require("./db/connection");
const express = require("express");
const cors = require("cors");
const listRouter = require("./list/listRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(listRouter, userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));