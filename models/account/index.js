const { Schema, model } = require('mongoose');
const encryptPasswordPreSave = require('./hooks/encrypt-password-pre-save');

const accountSchema = new Schema({
  username: String,
  password: String,
}, { versionKey: false });

accountSchema.pre('save', encryptPasswordPreSave);

module.exports = model('Account', accountSchema, 'account');
