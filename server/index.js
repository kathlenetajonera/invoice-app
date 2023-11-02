const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();

const invoiceRoutes = require("./routes/invoice");

app.use(cors());
app.use(express.json());
app.use("/api/invoice", invoiceRoutes);

module.exports = app;
