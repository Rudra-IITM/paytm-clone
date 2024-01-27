const express = require("express");
const rootRouter = require('./routes/index')
const cors = require('cors');
const { PORT } = require("./config");

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/v1/", rootRouter)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
});