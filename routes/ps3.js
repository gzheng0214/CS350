const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.render("index", {
    string: "Hey now",
  });
});

router.get("/names/:name", (req, res) => {
  const name = req.params.name;
  res.render("index", {
    name,
  });
});

router.post("/", (req, res) => {
  const string = req.body.string;
  res.render("index", {
    string,
    length: string.length,
  });
});

module.exports = router;
