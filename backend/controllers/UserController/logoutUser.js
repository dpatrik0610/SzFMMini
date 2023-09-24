async function logoutUser(req, res) {
    try {
      res.clearCookie('token');
      
      return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error during logout:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  module.exports = logoutUser;
  