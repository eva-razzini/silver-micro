const Reservation = require('../models/reservation');

exports.createReservation = (req, res, next) => {
    const reservation = new Reservation({
      name_id: req.body.name_id,
      numberpes: req.body.numberpes,
      phone: req.body.phone,
      datetime: req.body.datetime
    });
  
    reservation.save()
      .then(() => res.status(201).json({ message: 'Réservation créée avec succès !' }))
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