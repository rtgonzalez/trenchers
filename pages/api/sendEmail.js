import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, phone, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'trencherskitchenandtap@gmail.com',
                pass: 'AIzaSyChNJ4Rgo2iaM-Z5Y-fOs6TiaIOnQyzDug'
            }
        });

        try {
            await transporter.sendMail({
                from: `Inquiry ${email}`,
                to: 'trencherskitchenandtap@gmail.com',
                subject: `Inquiry:${firstName} ${lastName}`,
                text: `Name: ${firstName}\s${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
            });

            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}
