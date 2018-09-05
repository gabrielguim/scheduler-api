const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {    
    res.status(200).json({
        data: "GET Employee works!"
    })
});

router.get('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: "GET Employee works!"
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
        data: "You deleted all employees, so i'm fully empty hauehaue"
    })
});

router.delete('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: `You delete this employees with id ${req.params.id}, so i don't exist anymore ahuehaueh`
    })
});

module.exports = router;
