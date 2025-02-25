const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index', { title: "الرئيسية" }));
router.get('/about', (req, res) => res.render('about', { title: "من نحن" }));
router.get('/contact', (req, res) => res.render('contact', { title: "اتصل بنا" }));

module.exports = router;
