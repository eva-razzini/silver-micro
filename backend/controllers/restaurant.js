const Restaurant = require('../models/restaurant');


exports.getAllRestaurants = (req, res, next) => {
    Restaurant.find()
        .then(restaurants => {
            res.status(200).json(restaurants);
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};


exports.addRestaurant = (req, res, next) => {
    if (req.auth.role !== 'super-admin')  {
        return res.status(403).json({ message: "Vous n'êtes pas autorisé à effectuer cette action." });
    }

    const restaurant = new Restaurant({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    restaurant.save()
        .then(() => {
            res.status(201).json({ message: 'Restaurant ajouté avec succès !' });
        })
        .catch(error => {
            res.status(400).json({ error });
        });
};

exports.updateRestaurant = (req, res, next) => {
    if (req.auth.role !== 'super-admin') {
        return res.status(403).json({ message: "Vous n'êtes pas autorisé à effectuer cette action." });
    }

    const restaurantId = req.params.id;

    Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true })
        .then(updatedRestaurant => {
            if (!updatedRestaurant) {
                return res.status(404).json({ message: 'Restaurant non trouvé.' });
            }
            res.status(200).json({ message: 'Restaurant mis à jour avec succès !', restaurant: updatedRestaurant });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.deleteRestaurant = (req, res, next) => {
    if (req.auth.role !== 'super-admin') {
        return res.status(403).json({ message: "Vous n'êtes pas autorisé à effectuer cette action." });
    }

    const restaurantId = req.params.id;

    Restaurant.findByIdAndRemove(restaurantId)
        .then(deletedRestaurant => {
            if (!deletedRestaurant) {
                return res.status(404).json({ message: 'Restaurant non trouvé.' });
            }
            res.status(200).json({ message: 'Restaurant supprimé avec succès !', restaurant: deletedRestaurant });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};