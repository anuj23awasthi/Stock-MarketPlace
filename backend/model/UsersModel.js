const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true }
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'username',
});

const UsersModel = mongoose.model('User', UserSchema);

module.exports = { UsersModel };
