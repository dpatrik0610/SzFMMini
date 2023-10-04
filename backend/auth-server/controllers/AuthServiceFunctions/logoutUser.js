async function logoutUser(req, res) {
  try {
    res.status(200).json({ message: "Logout Successful." });
  } catch (error) {
    console.error('Error in Logout:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = logoutUser;