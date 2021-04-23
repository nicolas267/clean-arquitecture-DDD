import  UserControllers from '../../controllers/users/UserControllers';
import  MovieControllers from '../../controllers/movies/MovieControllers';

const users = new UserControllers;

exports.assignRoutes = function (app: any) {
    app.post('/auth/login', users.login);

    app.post('/users/create', users.create);

}