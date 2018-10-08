const express = require('express');
import { CalendarService } from './calendar.service';

const router = express.Router();

router.get('/', (_, res) => {   
    try {
        const data = CalendarService.getAllCalendars();
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:userId', (req, res) => {   
    try {
        const data = CalendarService.getCalendarsForUser(req.params.userId);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/:calendarId/:requester', (req, res) => {    
    try {
        const data = CalendarService.getCalendar(req.params.calendarId, req.params.requester);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.post('/', (req, res) => {        
    try {
        const calendar = req.body;
        const data = CalendarService.registerCalendar(calendar);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.put('/:calendarId/:ownerId', (req, res) => {        
    try {
        const calendar = req.body;
        const data = CalendarService.updateCalendar(req.params.ownerId, req.params.calendarId, calendar);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/:ownerId', (req, res) => {    
    try {
        const data = CalendarService.removeAllCalendarsForUser(req.params.ownerId);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.delete('/:calendarId/:ownerId', (req, res) => {    
    try {
        const data = CalendarService.removeCalendar(req.params.ownerId, req.params.calendarId);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
