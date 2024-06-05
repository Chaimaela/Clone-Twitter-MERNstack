import express from 'express'
import { protectedRoute } from '../middlewares/protectedRoute.js';
import { followUnfollUser, getSuggestedUsers, getUserProfile, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.get("/profile/:username",protectedRoute, getUserProfile)
router.get("/suggested",protectedRoute, getSuggestedUsers)
router.post("/follow/:id",protectedRoute, followUnfollUser)
router.post("/update",protectedRoute, updateUserProfile)



export default router