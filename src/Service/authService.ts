const bcrypt = require('bcrypt');

const User = require('../Schema/UsuarioSchema');
const { generateToken } = require('../config/auth');

module.exports = {
  async create(empresa, password) {
    const user = await User.findOne({ empresa }).select('+password');

    if(!user) return { success: false, message: 'invalid credentials'};

    const checkPass = await bcrypt.compare( password, user.password );

    if( !checkPass ) return { success: false, message: 'invalid credentials'};

    const token = await generateToken( user._id );

    return {
      success: true,
      message: 'login efetivado com sucesso',
      result: {
        empresa: user.empresa,
        token,
      },
    };
  },
};
export{}
