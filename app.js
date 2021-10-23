const express = require("express");
const app = express();
const PORT = 3000;
const ps4 = require("./routes/ps4");
const path = require("path");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/ps4", ps4);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
