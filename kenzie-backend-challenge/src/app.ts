import express, { type Express } from 'express';
import mongoose, { type ConnectOptions } from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes';

const app: Express = express();

app.use(express.json());

const PORT: string | number = process.env.PORT ?? 4000;

app.use(cors());
app.use(todoRoutes);

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xxhllfo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    throw error;
  });
