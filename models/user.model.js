import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bycrypt from "bycrypt"

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true, // No leading and trailing whitespaces
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type:String,
            required: true,
            unique: true,
            trim: true
        },
        avatar: {
            type: String,
            required: true
        },
        converImage: {
            type: String,
        },
        watchHistory: {
            type: [Schema.Types.ObjectId],
            ref: "Video"
        },
        password: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)