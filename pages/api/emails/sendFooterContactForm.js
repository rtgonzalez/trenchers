import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Use nodemailer to send the email
        const { name, email, message } = req.body;
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'contact@rtgonzalez.com.ar',
                    pass: 'cmqungwcaczfiiej'
                },
                authMethod: 'PLAIN'
            });

            // Email options
            const mailOptions = {
                from: email,
                to: 'contact@rtgonzalez.com.ar', // Where you want to receive the emails
                subject: `New message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
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
