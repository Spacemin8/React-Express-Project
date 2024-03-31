const { User } = require('../database/models');
const { Token } = require('../database/models');
module.exports = {
  signup: async (username, email, password) => {
    const existusername = await User.findOne({ where: { username } });
    const existemail = await User.findOne({ where: { email } });
    const existpassword = await User.findOne({ where: { password } });
    if (existusername || existemail || existpassword) {
      return Boolean(true);
    }
  },
  Inserttoken: async (accesstoken, refreshtoken) => {
    return Token.create({ accesstoken, refreshtoken });
  }
};
