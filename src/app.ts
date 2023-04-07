require('dotenv/config');
require('express-async-errors');

import express from 'express';
import { routes } from './routes/routes';
import { User } from './db/model'
import errorHandler from './config/ErroHandler';

class App {

    public server: express.Application;
    isDev = process.env.NODE_ENV === 'development'

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.server.use(errorHandler);
        this.dbInit();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    async dbInit() {
        await User.sync({ alter: this.isDev });
    }
}

export default new App().server;