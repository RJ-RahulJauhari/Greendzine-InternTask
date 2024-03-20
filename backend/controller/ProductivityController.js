import ProductivityModel from "../model/ProductivityModel.js";

// Get productivity record by ID
const getProductivityRecordById = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await ProductivityModel.find({ emp_id: id });
        if (!record) {
            return res.status(404).json({ message: 'Productivity record not found' });
        }
        return res.status(200).json(record);
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}


// Get all productivity records
const getAllProductivityRecords = async (req, res) => {
    try {
        const records = await ProductivityModel.find({});
        return res.status(200).json(records);
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

// Create a new productivity record
const createProductivityRecord = async (req, res) => {
    const { emp_id, title, progress } = req.body;
    try {
        const record = new ProductivityModel({ emp_id, title, progress });
        await record.save();
        return res.status(201).json(record);
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

// Update a productivity record by ID
const updateProductivityRecordById = async (req, res) => {
    const id = req.params.id;
    const updates = req.body; // Object containing fields to update
    try {
        const updatedRecord = await ProductivityModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedRecord) {
            return res.status(404).json({ message: 'Productivity record not found' });
        }
        return res.status(200).json(updatedRecord);
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

// Delete a productivity record by ID
const deleteProductivityRecordById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRecord = await ProductivityModel.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Productivity record not found' });
        }
        return res.status(200).json({ message: 'Productivity record deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong...${err.message}` });
    }
}

const createProductivityRecords = async (req, res) => {
    const records = req.body; // Assuming request body contains an array of productivity JSON objects
    try {
        const insertedRecords = await ProductivityModel.insertMany(records);
        console.log("Productivity records created successfully:", insertedRecords);
        return res.status(201).json(insertedRecords);
    } catch (error) {
        console.error("Error creating productivity records:", error);
        return res.status(500).json({ 'message': `Something went wrong...${error.message}` });
    }
}

export { createProductivityRecords, getProductivityRecordById, getAllProductivityRecords, createProductivityRecord, updateProductivityRecordById, deleteProductivityRecordById };
