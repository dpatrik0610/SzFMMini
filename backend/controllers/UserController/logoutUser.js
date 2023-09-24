async function logout(req, res) {
    // Perform logout actions, e.g., clear user's session or token
    // Optionally, you can add more logout-related logic here
  
    res.json({ message: 'Logout successful' });
  }
  
  module.exports = logout;
  