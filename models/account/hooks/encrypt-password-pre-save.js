const bcrypt = require('bcrypt');

function encryptPasswordPreSave(next) {
  bcrypt.genSalt(10, (err, salt) => {
    /* istanbul ignore next */
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (e, hash) => {
      /* istanbul ignore next */
      if (e) return next(e);
      this.password = hash;
      next();
    })
  })
}

module.exports = encryptPasswordPreSave;
