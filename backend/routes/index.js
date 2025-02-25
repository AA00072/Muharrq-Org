const express = require('express');
const router = express.Router();

const pagesRoutes = require('./pages');
const donationsRoutes = require('./donations');
const usersRoutes = require('./users');
const projectsRoutes = require('./projects');

router.use('/', pagesRoutes);
router.use('/donations', donationsRoutes);
router.use('/users', usersRoutes);
router.use('/projects', projectsRoutes);

module.exports = router;
