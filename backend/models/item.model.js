import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,     },
    isCompleted: { 
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true 
});

const Item = mongoose.model("Item", itemSchema); 

export default itemSchema; 
