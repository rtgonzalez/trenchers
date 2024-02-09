import nodemailer from 'nodemailer';
import { convertAMPMHours } from 'utils/jsfunctions';
import { format } from 'date-fns';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Use nodemailer to send the email
        const {
            email,
            firstName,
            lastName,
            phone,
            company,
            spaceVenue,
            eventDate,
            startTime,
            endTime,
            eventType,
            peopleNum,
            minors,
            additionalInfo
        } = req.body;
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'contact@rtgonzalez.com.ar',
                    pass: process.env.GOOGLE_EMAIL_PASSWORD
                },
                authMethod: 'PLAIN'
            });
            const newDate = format(new Date(eventDate), 'MM-dd-yyyy');
            const areMinors = minors ? 'Yes' : 'No';

            // Email options
            const mailOptions = {
                from: email,
                to: 'contact@rtgonzalez.com.ar', // Where you want to receive the emails
                subject: `New message from ${firstName}  ${lastName} reservation for: ${peopleNum} people`,
                text: `First Name: ${firstName}\nLast Last Name:${lastName}\nEmail: ${email}\nPhone: ${phone}\nCompany:${company}\nSpace Venue:${spaceVenue}\nEvent Date:${newDate}\nStart Time:${convertAMPMHours(
                    startTime
                )}\nStart Time:${convertAMPMHours(
                    endTime
                )}\nEvent Type:${eventType}\nNum. People:${peopleNum}\nMinors:${areMinors}\nAdditional Information: ${additionalInfo}`
            };
            // Send the email
            const info = await transporter.sendMail(mailOptions);

            console.log('Message sent: %s', info.messageId);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email', error);
            return res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
