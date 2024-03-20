import express from 'express';
import { getEmployeeByName, createEmployees, updateEmployeeById, deleteEmployeeById, getAllEmployees, getEmployeeById, login } from '../controller/EmployeeController.js';

const router = express.Router();

// Create new employees
router.post('/employees', createEmployees);

// Update an employee by ID
router.put('/employees/:id', updateEmployeeById);

// Route to get employees by name
router.get('/employees/name/:name', getEmployeeByName);

// Delete an employee by ID
router.delete('/employees/:id', deleteEmployeeById);

// Get all employees
router.get('/employees', getAllEmployees);

// Get employee by ID
router.get('/employees/:id', getEmployeeById);

// Login
router.post('/login', login);

export default router;
