const express = require('express');
const router = express.Router();

const resaCrl = require ('../controllers/reservation');

router.post('/', resaCrl.creatReservation);
router.put('/:id', resaCrl.modifyReservation);
router.delete('/:id', resaCrl.deleteReservation);
router.get('/:id', resaCrl.getOneReservation); 
router.get('/', resaCrl.getAllReservations);

module.exports = router;