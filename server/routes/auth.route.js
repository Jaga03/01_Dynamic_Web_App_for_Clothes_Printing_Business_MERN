import express from 'express'

import { signup,logout,login,checkAuth } from '../controllers/auth.controller.js'

import {secureRoute} from '../middleware/auth.middleware.js'

const router = express.Router();

router.post("/signup", signup)

router.post("/login",login)

router.post("/logout",logout)

router.get("/check", secureRoute,checkAuth)

export default router;