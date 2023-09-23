const express = require("express");
const path = require("path");
const cors = require("cors")
const app = express();

require("dotenv").config();


app.use(cors())
app.use(express.static("./dist"));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"))
})

const PORT = 2526;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));