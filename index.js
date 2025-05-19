import express from 'express';
import cors from 'cors';
import proverbsRoutes from './routes/proverbs.js';
const allowedOrigins = ['https://afghan-proverbs-ui-project.onrender.com','http://localhost:4200'];
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: allowedOrigins
}));

app.use('/api/proverbs', proverbsRoutes);

app.listen(PORT, () => {
  console.log(`Afghan Proverbs API is running on port ${PORT}`);
});
