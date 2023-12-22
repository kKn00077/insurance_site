import nodemailer from 'nodemailer';
import { v4 } from 'uuid';

export type EmailData = {
    from: string;
    subject: string;
    message: string;
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
});
  
export async function sendEmail({ from, subject, message }: EmailData) {
    const mailData = {
        to: process.env.MAIL_USER,
        subject: subject,
        from: from,
        //	html 옵션 또는 text 옵션 둘중 하나만 사용해야함
        html: `
            <h1>${subject}</h1>
            <div>${message}</div>
            </br>
            <p>보낸사람 : ${from}</p>
        `,
        dsn: {
            id: v4(),
            return: 'full',
            notify: ['failure'],
            recipient: process.env.MAIL_USER
        }
    };
    
    return transporter.sendMail(mailData);
}