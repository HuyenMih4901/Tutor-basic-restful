const express = require("express");
const app = express();
const routes = require("./routes/router");
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");
// app.use(cors);
app.use(bodyParser.json());
app.use(cors());

routes(app);
app.get("/hello", (req, res) => {
    res.send("Hello");
})
app.use("/", (req, res) => {
    res.send("entry point");
});
db.connect();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(req, res, next) {
    console.log(`listen on port ${PORT}`);
});