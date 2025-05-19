import express from 'express';
import { getAllProverbs, getRandomProverb } from '../controllers/proverbsController.js';

const router = express.Router();

router.get('/', getAllProverbs);
router.get('/random', getRandomProverb);

export default router;
