const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "pug");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
