async function main(req, res) {
  async function main1(callback) {
    const nodemailer = require("nodemailer");

    console.log(req.body);
    console.log("Received a POST request");
    const to = req.body.to;
    const subject = req.body.subject;
    const message = req.body.message;
    const file = req.body.file;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "shekhargarud292@gmail.com",
        pass: "ntjmegritdvgllow",
      },
    });

    const info = await transporter.sendMail({
      from: "shekhargarud292@gmail.com",
      to: to,
      subject: subject,
      message: message,
      attachments: [
        {
          filename: "anime.jpg",
          path: file,
        },
      ],
    });

    // console.log(info);
    //   res.send(info);
    callback(info);
  }
  main1(async (info) => {
    const { messageId, envelope, accepted, response } = info;
    const { from, to } = envelope;
    const data = await fetch("http://localhost:9998/src/pgis/store_data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        messageId,
        accepted,
        response,
      }),
    });
  });
}

module.exports = {
  main,
};
