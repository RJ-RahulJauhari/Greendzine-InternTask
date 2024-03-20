import mongoose from "mongoose";

const ProductivitySchema = new mongoose.Schema({
    emp_id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required: true
    },
    progress:{
        type:Number,
        required:true
    }
},{timestamps:true});

export default mongoose.model('ProductivityModel',ProductivitySchema);