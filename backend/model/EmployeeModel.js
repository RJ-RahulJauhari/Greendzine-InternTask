import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({

    emp_id:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true
    },
    role:{
        type: String,
        required: true
    }
},{timestamps:true})


export default mongoose.model("EmployeeModel",EmployeeSchema);