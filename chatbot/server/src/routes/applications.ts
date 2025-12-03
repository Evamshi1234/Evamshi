import { Router } from 'express';
import Application from '../models/Application';

const router = Router();

// Create application
router.post('/', async (req, res) => {
  try {
    const app = await Application.create(req.body);
    // TODO: emit socket event for real-time updates
    return res.status(201).json(app);
  } catch (err) {
    return res.status(400).json({ error: 'Failed to create application', details: err });
  }
});

// Get applications (filtered)
router.get('/', async (req, res) => {
  const { email } = req.query;
  const filter: any = {};
  if (email) filter.email = email;
  const apps = await Application.find(filter).sort({ createdAt: -1 }).limit(100);
  res.json(apps);
});

// Update status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const app = await Application.findByIdAndUpdate(id, { status }, { new: true });
    if (!app) return res.status(404).json({ error: 'Not found' });
    // TODO: emit socket event
    res.json(app);
  } catch (err) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

export default router;
