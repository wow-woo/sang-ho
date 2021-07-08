import express from "express";
import "./sql/mariaDB";

const app = express();

app.use(express.static("assets"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/items", (req, res) => {
  res.render("items", { kim: "haha" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(PORT, "RUNNING..."));
