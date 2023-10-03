function logoutUser(req, res) {
  res.status(200).json({ message: 'Logout successful' });
}

module.exports = logoutUser;
