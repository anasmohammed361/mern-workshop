import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose"
import mongooseFindOrCreate from "mongoose-findorcreate"
const User = new mongoose.Schema({
    email:String,
    googleId:String,
    imageUrl:String
})
User.plugin(mongooseFindOrCreate)
export const UserModel = mongoose.model('User',User) 