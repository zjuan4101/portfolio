const express = require('express');
const router = express.Router();
const projectController = require('../../controllers/api/projects');

router.get('/projects', projectController.getAllProjects);

module.exports = router;
