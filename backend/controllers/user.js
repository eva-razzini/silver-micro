const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash,
          phone: req.body.phone,
          role: 'membre'
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
            }
            res.status(200).json({
              userId: user._id,
              role: user.role,  // Assurez-vous d'inclure le rôle dans la réponse
              token: jwt.sign(
                { userId: user._id, role: user.role },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

  
exports.getAllMembers = (req, res, next) => {
      User.find()
          .then(users => {
              res.status(200).json(users);
          })
          .catch(error => {
              res.status(500).json({ error });
          });
};
  
exports.addMember = (req, res, next) => {
      const user = new User({
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
          role: req.body.role
      });
  
      user.save()
          .then(() => {
              res.status(201).json({ message: 'Utilisateur ajouté avec succès !' });
          })
          .catch(error => {
              res.status(400).json({ error });
          });
};
  

exports.updateMember = (req, res, next) => {
      const userId = req.params.id;
  
      User.findByIdAndUpdate(userId, req.body, { new: true })
          .then(updatedUser => {
              if (!updatedUser) {
                  return res.status(404).json({ message: 'Utilisateur non trouvé.' });
              }
              res.status(200).json({ message: 'Utilisateur mis à jour avec succès !', user: updatedUser });
          })
          .catch(error => {
              res.status(500).json({ error });
          });
};
  
exports.deleteMember = (req, res, next) => {
      const userId = req.params.id;
  
      User.findByIdAndRemove(userId)
          .then(deletedUser => {
              if (!deletedUser) {
                  return res.status(404).json({ message: 'Utilisateur non trouvé.' });
              }
              res.status(200).json({ message: 'Utilisateur supprimé avec succès !' });
          })
          .catch(error => {
              res.status(500).json({ error });
          });
};