const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');

const router = express.Router();

router.get('/login', (req, res) => res.render('login', { title: "تسجيل الدخول" }));
router.get('/register', (req, res) => res.render('register', { title: "إنشاء حساب" }));

// التحقق من أن الدوال مستوردة بشكل صحيح
if (!registerUser || !loginUser || !logoutUser) {
    throw new Error("❌ خطأ: الدوال registerUser, loginUser, logoutUser غير معرفة في userController.js");
}

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

module.exports = router;
