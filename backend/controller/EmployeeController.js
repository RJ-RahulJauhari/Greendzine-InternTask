import EmployeeModel from "../model/EmployeeModel.js";

const getEmployeeById = async (req,res) => {
    const id = req.params.id;
    try{
        const emp = await EmployeeModel.findOne({emp_id:id});
        if(!emp){
            return res.status(401).json({'message':'Employee Retrival Unsuccessful'});
        }
        return res.status(200).json(emp);
    }catch(err){
        return res.status(500).json({'message':`Something went wrong...${err.message}`})
    }
}

const getEmployeeByName = async (req, res) => {
    const { name } = req.params;

    try {
        const employees = await EmployeeModel.find({ name: { $regex: name, $options: 'i' } });

        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: 'No employees found with the provided name' });
        }

        return res.status(200).json(employees);
    } catch (error) {
        console.error('Error retrieving employees by name:', error);
        return res.status(500).json({ message: 'Something went wrong while fetching employees by name' });
    }
};


const getAllEmployees = async (req,res) => {
    try{
        const employees = await EmployeeModel.find({});
        if(!employees){
            return res.status(400).json({'message':'Employee Retrival Unsuccessful'});
        }
        return res.status(200).json(employees);
    }catch(err){
        return res.status(500).json({'message':`Something went wrong...${err.message}`})
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await UserModel.findOne({ username });

        // If user doesn't exist or password doesn't match, return unauthorized
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If username and password match, return success
        return res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

const createEmployees = async (req, res) => {
    const employees = req.body; // Assuming request body contains an array of employee JSON objects
    try {
        // Using insertMany to insert multiple documents at once
        const insertedEmployees = await EmployeeModel.insertMany(employees);
        return res.status(201).json(insertedEmployees);
    } catch (err) {
        return res.status(500).json({ 'message': `Something went wrong...${err.message}` });
    }
}

// Update an employee by ID
const updateEmployeeById = async (req, res) => {
    const id = req.params.id;
    const updates = req.body; // Object containing fields to update

    try {
        // Find the employee by ID and update
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        return res.status(200).json(updatedEmployee);
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

// Delete an employee by ID
const deleteEmployeeById = async (req, res) => {
    const id = req.params.id;

    try {
        // Find the employee by ID and delete
        const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        return res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

export {getEmployeeByName,createEmployees,updateEmployeeById,deleteEmployeeById,getAllEmployees,getEmployeeById,login};
