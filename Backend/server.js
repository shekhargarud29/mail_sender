const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

require("./router")(app);
// app.get("/send_mail/", (req, res) => {
//   console.log("Received a POST request");
//   res.send(req.query);
//   console.log(req.query);
//   //   res.send("done");
// });
// app.post("/send_mail/", (req, res) => {
//   console.log("Received a POST request");
//   res.send(req.body);
//   console.log(req.body);
//   //   res.send("done");
// });

app.listen(9998, () => {
  console.log("server is runnning");
});
