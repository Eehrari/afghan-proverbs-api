import express from 'express';
import cors from 'cors';
import proverbsRoutes from './routes/proverbs.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api/proverbs', proverbsRoutes);

app.listen(PORT, () => {
  console.log(`Afghan Proverbs API is running on port ${PORT}`);
});
