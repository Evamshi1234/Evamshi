import { Router } from 'express';
import Feedback from '../models/Feedback';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const fb = await Feedback.create(req.body);
    // TODO: emit socket event
    res.status(201).json(fb);
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit feedback' });
  }
});

router.get('/', async (req, res) => {
  const list = await Feedback.find().sort({ createdAt: -1 }).limit(200);
  res.json(list);
});

export default router;
