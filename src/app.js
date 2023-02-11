const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

const philaRouter = require("./router/phila");
const ngoRouter = require("./router/ngo");
const commonRouter = require("./router/common");

app.use(commonRouter);
app.use(philaRouter);
app.use(ngoRouter);

app.listen(port, () => {
  console.log(`Listning to server on port ${port}`);
});
