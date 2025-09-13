import express from 'express';
import { corsMiddleware } from './middlewares/corsMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';
import userProfileRoutes from './routes/userProfileRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/user-profiles', userProfileRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use(errorHandler);

export default app;