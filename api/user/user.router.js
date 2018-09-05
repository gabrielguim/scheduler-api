const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {    
    res.status(200).json({
        data: "GET User works!"
    })
});

router.get('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: "GET User works!"
    })
});

router.post('/', (req, res) => {    
    console.log(req.body);
    
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
        data: "You deleted all users, so i'm fully empty hauehaue"
    })
});

router.delete('/:id', (req, res) => {    
    res.status(200).json({
        id: req.params.id,
        data: `You delete this user with id ${req.params.id}, so i don't exist anymore ahuehaueh`
    })
});

module.exports = router;
