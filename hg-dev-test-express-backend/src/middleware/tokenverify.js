const tokenService = require('../service/token-service');
// Middleware function to verify access token
module.exports = {
  verifyAccessToken: async (req, res, next) => {
    const accessToken = req.headers.authorization?.split(' ')[1]; // Extract access token from Authorization header

    if (!accessToken) {
      return res.status(401).json({ message: 'Access token is missing' });
    }

    // Verify access token (pseudocode)
    if (!tokenService.isValidAccessToken(accessToken)) {
      return res.status(401).json({ message: 'Invalid access token' });
    } else {
      return res.status(200).json({ message: 'verify access token' });
      console.log('verified');
    }

    // Access token is valid, proceed to the next middleware or route handler
    next();
  }
};
