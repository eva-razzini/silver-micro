const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservation');
const userCtrl = require('../controllers/user');
const authMiddleware = require('../middleware/auth');


router.post('/', authMiddleware, reservationCtrl.createReservation);
router.get('/', authMiddleware, reservationCtrl.getAllReservations);
router.get('/user/:userId', authMiddleware, reservationCtrl.getUserReservations);
router.put('/:reservationId', authMiddleware, reservationCtrl.updateReservation);
router.delete('/:reservationId', authMiddleware, reservationCtrl.deleteReservation);

module.exports = router;