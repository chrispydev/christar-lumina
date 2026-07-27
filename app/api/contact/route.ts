import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      project,
      message,
    } = await req.json();


    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields"
        },
        {
          status: 400
        }
      );
    }


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });



    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Project Inquiry from ${name}`,

      html: `

      <h2>New Contact Request</h2>

      <p>
      <strong>Name:</strong>
      ${name}
      </p>


      <p>
      <strong>Email:</strong>
      ${email}
      </p>


      <p>
      <strong>Project:</strong>
      ${project || "Not specified"}
      </p>


      <p>
      <strong>Message:</strong>
      </p>

      <p>
      ${message}
      </p>

      `

    });



    return NextResponse.json({
      success: true
    });



  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong"
      },
      {
        status: 500
      }
    );

  }
}
