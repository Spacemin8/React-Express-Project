const userService = require('../service/user-service');
const { User } = require('../database/models');
const { Token } = require('../database/models');

const bcrypt = require('bcrypt');
require('dotenv').config();
const tokenService = require('../service/token-service');

module.exports = {
  login: async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email }
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate a JWT token for authentication
      const accesstoken = await tokenService.generateAccessToken(user.id);
      const refreshtoken = await tokenService.generateRefreshToken(user.id);
      try {
        const result = {
          message: 'Login Successful',
          accesstoken: accesstoken,
          refreshtoken: refreshtoken
        };
        console.log('success!!!!', result);
        await Token.create(result);
        return res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: 'create table is failed' });
      }
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  },
  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const exist = await userService.signup(username, email, password);
      if (exist) {
        res.status(401).json({ message: 'Username already exists.' });
        console.log('Username already exists.');
      } else {
        await User.create({
          username,
          email,
          password: hashPassword
        });
        res.status(200).json({ message: 'User create successfully.' });
        console.log('User create successfully.');
      }
    } catch (error) {
      console.error('error creating User:', error);
      res
        .status(500)
        .json({ message: 'An error occured while creating User.' });
    }
  },
  refreshAcess: async (req, res) => {
    const refreshtoken = req.body;
    const token = await tokenService.refreshAcess(refreshtoken);
    const newAccesstoken = await tokenService.generateAccessToken(token);
    res.json({ newaccesstoken: newAccesstoken });
  }
};
