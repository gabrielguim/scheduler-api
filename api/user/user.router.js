const express = require('express');
import { UserService } from './user.service';

const router = express.Router();

router.get('/', (req, res) => {    
    try {
        const data = UserService.getAllUsers(req.populate);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:id', (req, res) => {    
    try {
        const data = UserService.getUser(req.params.id, req.uid);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:id/calendar', (req, res) => {    
    try {
        const data = UserService.getUser(req.params.id, req.uid, 'calendar');
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.post('/', (req, res) => {    
    try {
        const user = req.body;
        const data = UserService.registerUser(user);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/', (_, res) => {    
    try {
        const data = UserService.removeAllUsers();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/:id', (req, res) => {    
    try {
        const data = UserService.removeUser(req.param.id, req.uid);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
