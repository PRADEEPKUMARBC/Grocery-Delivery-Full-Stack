import express from 'express';
import authUser from '../middlewares/authUser.js';
import { addAdress } from '../controllers/addressController.js';

export const addressRouter = express.Router();

addressRouter.post('/add', authUser, addAdress);
addressRouter.post('/add', authUser, addAdress);

export default addressRouter; 