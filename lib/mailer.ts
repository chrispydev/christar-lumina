import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  project: string;
  message: string;
}) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "info@christarlumina.com",
    subject: `New Project Request From ${data.name}`,
    html: `
      <h2>New Client Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Project:</strong> ${data.project}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `
  });
}
