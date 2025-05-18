import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './database/database.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
