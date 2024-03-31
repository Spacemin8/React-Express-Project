require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Token } = require('../database/models/token');
module.exports = {
  generateAccessToken: async (userid) => {
    const accesstoken = jwt.sign({ userid }, process.env.ASECRET, {
      expiresIn: '1h'
    });
    return accesstoken;
  },
  generateRefreshToken: async (userid) => {
    const refreshtoken = jwt.sign({ userid }, process.env.RSECRET, {
      expiresIn: '168h'
    });
    return refreshtoken;
  },
  isValidAccessToken: async (accessToken) => {
    try {
      const decodedToken = jwt.verify(accessToken, process.env.ASECRET);
      const user = await getUserById(decodedToken.userId); // Example function to fetch user from database

      if (
        decodedToken.username === user.username &&
        decodedToken.email === user.email &&
        decodedToken.password === user.password
      ) {
        return true; // Token is valid.
      }
    } catch (error) {
      return false; // Token is invalid or has expired
    }
  },
  refreshAcess: async (refreshtoken) => {
    const tokenid = await Token.findOne({ where: { refreshtoken } });
    return tokenid;
  }
};
