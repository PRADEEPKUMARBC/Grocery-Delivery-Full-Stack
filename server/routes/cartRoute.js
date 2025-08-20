//import mongoose from "mongoose";
import express from 'express';
import updateCart from '../controllers/cartController.js';
import authSeller from "../middlewares/authSeller.js";

export const cartRouter = express.Router();

cartRouter.post('/update', authSeller, updateCart)

export default cartRouter;