const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("./config/db");
const cors = require("cors");

dotenv.config();
mongoose();

const app = express();
app.use(cors());
app.use(express.json());

// استيراد المسارات
const donationRoutes = require("./routes/donations");
app.use("/api/donations", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
