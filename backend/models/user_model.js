import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const User = mongoose.model("User", userSchema);
export default User;
