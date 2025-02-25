const express = require("express");
const { getDonations, addDonation } = require("../controllers/donationController");

const router = express.Router();
router.get("/", getDonations);
router.post("/add", addDonation);

module.exports = router;
