const express = require('express');
import { ServiceService } from './service.service';

const router = express.Router();

router.get('/', (_, res) => {   
    try {
        const data = ServiceService.getServices();
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
    res.status(200).json({
        data: req.body
    })
});

router.put('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: req.body
    })
});

router.delete('/', (_, res) => {    
    res.status(200).json({
        data: "You deleted all services, so i'm fully empty hauehaue"
    })
});

router.delete('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: `You delete this services with id ${req.params.id}, so i don't exist anymore ahuehaueh`
    })
});

module.exports = router;
