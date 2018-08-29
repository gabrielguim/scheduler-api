// API Routes
const express = require('express');

const router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @returns {object} 200 - A json with a bootifull message
 * @returns {Error}  default - Unexpected error
 */
router.get('/', (_, res) => {    
    res.status(200).json(
        { 
            data: "Hello World"
        }
    );
});

module.exports = router;
