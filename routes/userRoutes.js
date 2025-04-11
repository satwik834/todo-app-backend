import express from 'express';
import passport from 'passport';
import { createUser, logoutUser } from '../controllers/userController.js';


const router = express()


router.post('/register', createUser);
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Logged in', user: req.user });
});
router.post('/logout', logoutUser);

export default router