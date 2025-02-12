import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },

    username: {
        type: String,
        required: [true, 'username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username is invalid, it should contain 8-20 alphanumeric characters and be unique!"],
    },

    image: {
        type: String,
    },

    phone: {
        type: String,
        required: [true, 'Phone number required']
    },

    role: {
        type: String,
        enum: ["buyer", "seller", "agent", "admin"],
        default: "buyer"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = models.User || model("User", userSchema);

export default User;