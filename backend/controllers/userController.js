const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        res.status(500).send("❌ حدث خطأ أثناء إنشاء الحساب.");
    }
};

exports.loginUser = async (req, res) => {
    // سيتم تحديثه لاحقًا بنظام المصادقة
    res.send("🚀 تسجيل الدخول بنجاح!");
};

exports.logoutUser = (req, res) => {
    // سيتم تحديثه لاحقًا بتسجيل الخروج الفعلي
    res.send("🚀 تسجيل الخروج بنجاح!");
};
