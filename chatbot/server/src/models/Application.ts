import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  url: String,
  name: String,
});

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  program: String,
  documents: [DocumentSchema],
  status: { type: String, default: 'submitted' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Application', ApplicationSchema);
