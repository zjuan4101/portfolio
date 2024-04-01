const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/api/contact');

// Route handler for contact form submissions
router.post('/contact', contactController.submitContactForm);

module.exports = router;
