const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {    
    res.send('api works!');
});

module.exports = router;
