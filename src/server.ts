'use strict';

import express from 'express';
import bodyparser from 'body-parser';

const app = express();

const routes = require('./infrastructure/routes/routes');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));

routes.assignRoutes(app);

app.listen(3000);

console.log('Server listening on port 3000');