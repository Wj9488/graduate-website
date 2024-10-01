import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, company, reason, message } = req.body;

    try {
      await sendgrid.send({
        to: process.env.SENDGRID_FROM_EMAIL, // recipient email
        from: process.env.SENDGRID_FROM_EMAIL, // verified sender email
        subject: `Contact Form Submission from "${firstName} ${lastName}" (Personal Website)`,
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("SendGrid Error:", error);

      if (error.response) {
        console.error("SendGrid Response Body:", error.response.body);
      }

      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
