const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/members', authMiddleware, userCtrl.getAllMembers);
router.post('/signup', authMiddleware, userCtrl.addMember);
router.put('/users/:id', authMiddleware, userCtrl.updateMember);
router.delete('/users/:id', authMiddleware, userCtrl.deleteMember);

module.exports = router;