const config = require('./common/config/env.config.js');
const express = require('express');
const headers = require('./authorization/middlewares/utill')
const app = express();

const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');

app.use(headers);
app.use(express.json());
app.use(express.urlencoded({extended: false}))
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);


app.listen(config.port,  () => console.log('app listening at port %s', config.port));