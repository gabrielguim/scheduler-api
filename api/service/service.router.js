const express = require('express');
import { ServiceService } from './service.service';

const router = express.Router();

router.get('/', (_, res) => {   
    try {
        const data = ServiceService.getAllServices();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:id', (req, res) => {    
    try {
        const data = ServiceService.getService(req.params.id);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.post('/', (req, res) => {        
    try {
        const service = req.body;
        const data = ServiceService.registerService(service);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.put('/:id', (req, res) => {    
    try {
        const service = req.body;
        const data = ServiceService.updateService(req.params.id, service);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/', (_, res) => {    
    try {
        const data = ServiceService.removeAllServices();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/:id', (req, res) => {    
    try {
        const data = ServiceService.removeService(req.params.id);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
