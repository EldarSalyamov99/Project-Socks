import express from 'express';
import authCheck from '../../middlewares/authCheck';


const indexRouter = express.Router();

indexRouter.get('/reg', authCheck(false), (req, res) => res.render('Layout'));

indexRouter.get('/login', authCheck(false), (req, res) => res.render('Layout'));

indexRouter.get('/account', authCheck(true), (req, res) => res.render('Layout'));

export default indexRouter