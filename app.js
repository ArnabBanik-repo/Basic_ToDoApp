const express = require("express");
const controller = require("./controllers/mainController.js");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public/"));
app.use(express.urlencoded({ extended: false }));
controller(app);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running at http//localhost:" + PORT);
});
