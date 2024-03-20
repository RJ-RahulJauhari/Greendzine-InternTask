import express from 'express';
import { createProductivityRecords ,getProductivityRecordById, getAllProductivityRecords, createProductivityRecord, updateProductivityRecordById, deleteProductivityRecordById } from '../controller/ProductivityController.js';

const router = express.Router();

router.post('/productivities/bulk', createProductivityRecords);

// Get productivity record by ID
router.get('/productivity/:id', getProductivityRecordById);

// Get all productivity records
router.get('/productivity', getAllProductivityRecords);

// Create a new productivity record
router.post('/productivity', createProductivityRecord);

// Update a productivity record by ID
router.put('/productivity/:id', updateProductivityRecordById);

// Delete a productivity record by ID
router.delete('/productivity/:id', deleteProductivityRecordById);

export default router;
