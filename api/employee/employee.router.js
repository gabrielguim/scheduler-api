const express = require('express');
import { EmployeeService } from './employee.service';

const router = express.Router();

router.get('/', (req, res) => {    
    try {
        const data = EmployeeService.getAllEmployees(req.populate);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:id', (req, res) => {    
    try {
        const data = EmployeeService.getEmployee(req.params.id, req.uid);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:id/service', (req, res) => {    
    try {
        const data = EmployeeService.getEmployee(req.params.id, req.uid, 'services');
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});


router.post('/', (req, res) => {    
    try {
        const employee = req.body;
        const data = EmployeeService.registerEmployee(employee);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/', (_, res) => {    
    try {
        const data = EmployeeService.removeAllEmployees();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/:id', (req, res) => {    
    try {
        const data = EmployeeService.removeEmployee(req.param.id, req.uid);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
