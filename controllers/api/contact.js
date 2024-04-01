// Controller for handling contact form submissions
exports.submitContactForm = (req, res) => {
    const { name, email, message } = req.body;
    // Logic to handle contact form submission (e.g., send email)
    console.log(`New message from: ${name} (${email}) - ${message}`);
    res.json({ success: true });
  };
  