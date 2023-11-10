import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "kyofighter@outlook.com",
        pass: "s9ncdtjv",
      },
    });

    let info = await transporter.sendMail({
      from: "Mahindra Malgudi Website <kyofighter@outlook.com>",
      to: "dadapeer78666@gmail.com",
      subject: "New Form Submission for Mahindra Malgudi",
      html: `
        <h3>I am interested in this property.</h3>
        <br><br>
        <h2>Details</h2>
        <br>
        <h3>Name          : ${req.body.name}</h3>
        <h3>Email         : ${req.body.email}</h3>
        <h3>Mobile Number : ${req.body.mobileNumber}</h3>
        <h3>Comments      : ${req.body.comments}</h3>
      `,
    });

    if (info.messageId) {
      res.send({ status: true });
    }
  } catch (err) {
    res.send({ error: "Internal Server Error" });
  }
}
