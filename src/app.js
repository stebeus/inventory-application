import path from 'node:path';

import express from 'express';

import { forwardNotFoundError, handleError } from './controllers/error.js';
import { index } from './routes/index.js';

const app = express();

const { dirname } = import.meta;
const viewsPath = path.join(dirname, 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', index);

app.use(forwardNotFoundError);
app.use(handleError);

export { app };
