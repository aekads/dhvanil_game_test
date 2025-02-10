const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.get("/", (req, res) => res.render("index"));
app.get("/brick-breaker", (req, res) => res.render("brick-breaker"));
app.get("/flappy-bird", (req, res) => res.render("flappy-bird"));
app.get("/car-dodge", (req, res) => res.render("car-dodge"));
app.get("/snake-game", (req, res) => res.render("snake-game"));
app.get("/space-shooter", (req, res) => res.render("space-shooter"));
app.get("/bubble-pop", (req, res) => res.render("bubble-pop"));
app.get("/fruit-catcher", (req, res) => res.render("fruit-catcher"));
app.get("/balloon-tap", (req, res) => res.render("balloon-tap"));
app.get("/clicking-game", (req, res) => res.render("clicking-game"));

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
