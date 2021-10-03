const express = require("express");
const app = express();
const PORT = 3000;
const ps3 = require("./routes/ps3");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/ps3", ps3);
app.set("view engine", "pug");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
