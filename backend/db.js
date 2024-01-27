import mongoose from "mongoose";
import { Schema } from "mongoose";
mongoose.connect("mongodb+srv://admin:rBoyFOcwHGteDbqx@cluster0.qfuqfta.mongodb.net/paytm")

const userSchema = new Schema( {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

const accountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema)

module.exports = ({
    User, 
    Account
})