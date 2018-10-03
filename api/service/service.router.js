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
    res.status(200).json({
        id: req.params.id,
        data: "GET Service works!"
    })
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
    res.status(200).json({
        id: req.params.id,
        data: req.body
    })
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
        const serviceId = req.params.id;
        const data = ServiceService.removeService(serviceId);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
