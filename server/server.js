require("dotenv").config();
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const db = require("./config/mongooseConnection");
const indexRouter = require("./routes/index");
const storiesRouter = require("./routes/storyRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/stories", storiesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})