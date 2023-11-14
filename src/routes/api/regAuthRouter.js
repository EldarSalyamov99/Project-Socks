import express from 'express';
import bcrypt from 'bcrypt';
import {User }from '../../../db/models';

const regAuthRouter = express.Router();

regAuthRouter.get('/user', (req, res) => {
    if (req.session?.user) {
      return setTimeout(() => res.json(req.session.user), 2000);
    }
    return res.sendStatus(404);
  });
  
  regAuthRouter.post('/reg', async (req, res) => {
    const { email, password, name } = req.body;
    console.log('qqqqq',req.body);
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { hashpass, name },
    });
    if (created) {
      req.session.user = { ...user.get(), hashpass: undefined };
      return res.sendStatus(200);
    }
    return res.status(400).json({ message: 'Email already exists' });
  });
  
  regAuthRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }
    const isCorrect = await bcrypt.compare(password, user.hashpass);
    if (!isCorrect) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
  
    req.session.user = { ...user.get(), hashpass: undefined };
    res.sendStatus(200);
  });
  
  regAuthRouter.get('/logout', (req, res) => {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  });
  
  export default regAuthRouter;