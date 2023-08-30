var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi Mars!",
    user: "Amando",
    added: new Date().toDateString(),
  },
  {
    text: "Hello Astronauts",
    user: "Charles",
    added: new Date().toDateString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message board", messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Enter your new message here" });
});

router.post("/new", (req, res) => {
  console.log(req.body);

  if (!req.body.text && !req.body.user) {
    console.log("Please enter a message body and a user.");
    res.status(400).json({ msg: "Enter at least a message and a user. " });
    return;
  }

  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date().toJSON(),
  });
  res.status(201);
  res.redirect("/");
});

module.exports = router;
