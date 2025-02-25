const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.render('projects/list', { title: "مشاريعنا", projects });
    } catch (error) {
        res.status(500).send("❌ حدث خطأ أثناء جلب المشاريع.");
    }
};

exports.addProject = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newProject = new Project({ name, description });
        await newProject.save();
        res.redirect('/projects');
    } catch (error) {
        res.status(500).send("❌ حدث خطأ أثناء إضافة المشروع.");
    }
};
