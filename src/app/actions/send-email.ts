"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  project: string;
  message: string;
}) {
  try {
    // Send email to your email address
    await resend.emails.send({
      from: "noreply@yourdomain.com", // You'll set your domain in Resend dashboard
      to: "ntpacha3365@gmail.com", // Your email where you receive messages
      replyTo: data.email, // So you can reply directly to the visitor
      subject: `New Contact Form Submission: ${data.project}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.project}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
