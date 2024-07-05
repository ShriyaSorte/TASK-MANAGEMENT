const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const taskuserSchema = new mongoose.Schema({
    username : {type: String, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true}
});

taskuserSchema.pre('save', async function (next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

taskuserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', taskuserSchema);