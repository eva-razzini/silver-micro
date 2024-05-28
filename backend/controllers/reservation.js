const Reservation = require('../models/reservation');

exports.getAllReservations = (req, res, next) => {
  Reservation.find()
    .populate('userId')
    .populate('restaurantId')
    .then(reservations => res.status(200).json(reservations))
    .catch(error => res.status(400).json({ error }));
};

exports.createReservation = (req, res, next) => {
  const reservation = new Reservation({
    userId: req.auth.userId,
    restaurantId: req.body.restaurantId,
    date: req.body.date,
    time: req.body.time,
    numberOfGuests: req.body.numberOfGuests,
    Phone: req.body.phone
  });

  reservation.save()
    .then(() => res.status(201).json({ message: 'Reservation created successfully!' }))
    .catch(error => res.status(400).json({ error }));
};


exports.getAllReservations = (req, res, next) => {
    Reservation.find()
      .then(reservations => res.status(200).json(reservations))
      .catch(error => res.status(400).json({ error }));
};
  
  
exports.getUserReservations = (req, res, next) => {
    Reservation.find({ name_id: req.params.userId })
      .then(reservations => res.status(200).json(reservations))
      .catch(error => res.status(400).json({ error }));
};
  

exports.updateReservation = (req, res, next) => {
    Reservation.findOneAndUpdate(
      { _id: req.params.reservationId, name_id: req.auth.userId },
      { ...req.body, _id: req.params.reservationId },
      { new: true }
    )
      .then(reservation => {
        if (!reservation) {
          return res.status(404).json({ message: 'Réservation non trouvée ou utilisateur non autorisé.' });
        }
        res.status(200).json({ message: 'Réservation mise à jour avec succès !', reservation });
      })
      .catch(error => res.status(400).json({ error }));
};
  

exports.deleteReservation = (req, res, next) => {
    Reservation.findOneAndDelete({ _id: req.params.reservationId, name_id: req.auth.userId })
      .then(reservation => {
        if (!reservation) {
          return res.status(404).json({ message: 'Réservation non trouvée ou utilisateur non autorisé.' });
        }
        res.status(200).json({ message: 'Réservation supprimée avec succès !' });
      })
      .catch(error => res.status(400).json({ error }));
};