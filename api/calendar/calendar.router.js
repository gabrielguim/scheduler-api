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

router.get('/:userId', async (req, res) => {   
    try {
        var data = null;
        if (req.query.text) {
            data = await CalendarService.searchCalendar(req.query.text, req.params.userId);
        } else {
            data = await CalendarService.getCalendarsForUser(req.params.userId);
        }

        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

router.get('/shared/:requester', async (req, res) => {    
    try {
        const data = await CalendarService.getSharedCalendars(req.params.requester);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json({
            violations: err.message
        });
    }
});

router.post('/', async (req, res) => {        
    try {
        const calendar = req.body;
        const data = await CalendarService.registerCalendar(calendar);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json({
            violations: err.message
        });
    }
});

router.put('/:calendarId/:ownerId', async (req, res) => {        
    try {
        const calendar = req.body;
        const data = await CalendarService.updateCalendar(req.params.ownerId, req.params.calendarId, calendar);
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

router.delete('/:calendarId/:ownerId', async (req, res) => {    
    try {
        const data = await CalendarService.removeCalendar(req.params.ownerId, req.params.calendarId);
        res.status(200).json(data);
    } catch(err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;
