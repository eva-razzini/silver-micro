const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurant');
const reservationCtrl = require('../controllers/reservation');
const authMiddleware = require('../middleware/auth');


router.get('/', restaurantCtrl.getAllRestaurants);
router.post('/', authMiddleware, restaurantCtrl.addRestaurant);
router.put('/:id', authMiddleware, restaurantCtrl.updateRestaurant);
router.delete('/:id', authMiddleware, restaurantCtrl.deleteRestaurant);

router.post('/:id/reserve', reservationCtrl.createReservation);

module.exports = router;
