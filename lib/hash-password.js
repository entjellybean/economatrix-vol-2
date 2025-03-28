const bcrypt = require('bcrypt');
const saltRounds = 10;

// Parolayı hash’le
async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (err) {
    console.error('Hashleme hatası:', err);
    throw err;
  }
}

// Parolayı doğrula
async function comparePassword(password, hashedPassword) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (err) {
    console.error('Karşılaştırma hatası:', err);
    throw err;
  }
}

module.exports = {
  hashPassword,
  comparePassword
};
