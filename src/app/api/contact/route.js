// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    const nodemailerConfig = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(nodemailerConfig);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
