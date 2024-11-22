module.exports = function (app) {
  app.post("/src/node_mailer/send_mail/", (req, res) => {
    // console.log();

    const x = require(__dirname + "./../src/node_mailer/send_mail");
    x.main(req, res);

    //   console.log("Received a POST request");
    //   res.send(req.body);
    //   console.log(req.body);
    //   //   res.send("done");
  });

  app.post("/src/pgis/store_data/", function (req, res) {
    const x = require(__dirname + "./../src/pgis/store_data");
    x.main(req, res);
  });
};
