import express from 'express';
import {
  createUserProfile,
  getUserProfiles,
  getUserProfileById,
  deleteUserProfile
} from '../controllers/userProfileController.js';

const router = express.Router();

router.route('/')
  .get(getUserProfiles)
  .put(createUserProfile);

router.route('/:id')
  .get(getUserProfileById)
  .delete(deleteUserProfile);

export default router;