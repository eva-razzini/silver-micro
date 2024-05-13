const Reservation = require('../models/reservation');

exports.creatReservation = (req, res, next) => {
    const reservation = new Reservation({
      ...req.body
    });
    reservation.save()
        .then(() => res.status(201).json({message: 'Post saved successfully!'}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyReservation = (req, res, next) => {
    Reservation.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Reservation updated successfully!'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteReservation = (req, res, next) => {
    Reservation.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Deleted!'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneReservation = (req, res, next) => {
    Reservation.findOne({_id: req.params.id})
    .then((reservation) => res.status(200).json(reservation))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllReservations = (req, res, next) => {
    Reservation.find()
    .then((reservations) => res.status(200).json(reservations))
    .catch(error => res.status(400).json({ error }));
};