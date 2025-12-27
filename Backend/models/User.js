const moongoose = require('mongoose');

const bycrypt = require('bcryptjs');

const UserSchema = new moongoose.Schema(
    {
    fullName: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    },
    {timestamps: true}
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return;
    this.password = await bycrypt.hash(this.password, 10);
    ;
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bycrypt.compare(candidatePassword, this.password);
};

module.exports = moongoose.model('User', UserSchema);