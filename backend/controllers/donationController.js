const Donation = require("../models/Donation");

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "❌ خطأ في جلب التبرعات" });
  }
};

exports.addDonation = async (req, res) => {
  const { name, email, amount, message } = req.body;
  try {
    const newDonation = new Donation({ name, email, amount, message });
    await newDonation.save();
    res.status(201).json({ message: "✅ تم إضافة التبرع بنجاح" });
  } catch (error) {
    res.status(500).json({ message: "❌ خطأ أثناء إضافة التبرع" });
  }
};


// 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd'
    });
    res.json({ clientSecret: paymentIntent.client_secret });
};