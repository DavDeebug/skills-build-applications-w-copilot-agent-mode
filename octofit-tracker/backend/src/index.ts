import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected on port 27017'))
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });

app.get('/', (_req, res) => {
  res.json({ status: 'OctoFit Tracker API', message: 'Backend running on port 8000' });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
