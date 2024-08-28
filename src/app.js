import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json());

export { app };
