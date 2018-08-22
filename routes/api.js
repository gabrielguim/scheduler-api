// API Routes
const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {    
    res.status(200).json(
        { 
            data: "Hello World",
        }
    );
});

module.exports = router;
