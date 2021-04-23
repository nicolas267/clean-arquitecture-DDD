'use strict';

import express from 'express';
import bodyparser from 'body-parser';
import session from 'express-session';

const app = express();

const routes = require('./infrastructure/routes/routes');

app.use(session({
    secret: '66T67-06OIU-WppQ38S',
    resave: true,
    saveUninitialized: true,
}));

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));

routes.assignRoutes(app);

app.listen(3000);

console.log('Server listening on port 3000');