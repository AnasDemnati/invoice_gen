import express from 'express';
import mongoose from 'mongoose';
import companyRoutes from './routes/CompanyRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//connexion avec la BD
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MONGO_URI is not defined');
  process.exit(1);
}
mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));


app.use('/api', companyRoutes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
