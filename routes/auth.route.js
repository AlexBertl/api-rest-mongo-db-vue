import express from "express";
import {login, register} from "../controllers/auth.controller.js";
import {body} from 'express-validator'
import {validationResultExpress} from "../middlewares/validationResultExpress.js";

const router = express.Router()

router.post('/register', [
        body('email', 'format not allowed').trim().isEmail().normalizeEmail(),
        body('password', 'password not allowed').trim().isLength({min: 6}).custom((value, {req}) => { // Use parentheses around the arrow function
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return value;
        }),
    ], validationResultExpress
    , register);


router.post('/login', [
        body('email', 'format not allowed').trim().isEmail().normalizeEmail(),
        body('password', 'password not allowed').trim().isLength({min: 6}),
    ], validationResultExpress,
    login)
export default router;