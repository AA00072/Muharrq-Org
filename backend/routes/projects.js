const express = require('express');
const { getProjects, addProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects); // عرض جميع المشاريع
router.get('/new', (req, res) => res.render('projects/form', { title: "إضافة مشروع جديد" })); // نموذج إضافة مشروع
router.post('/add', addProject); // إضافة مشروع جديد

module.exports = router;