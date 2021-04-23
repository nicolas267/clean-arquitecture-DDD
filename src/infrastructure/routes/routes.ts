import  UserControllers from '../../controllers/users/UserControllers';
import  MovieControllers from '../../controllers/movies/MovieControllers';

const users = new UserControllers;
const movies = new MovieControllers;

exports.assignRoutes = function (app: any) {
    app.post('/auth/login', users.login);

    app.post('/users/create', users.create);

    app.post('/movies/create', movies.create);
    app.post('/movies/update/:id', movies.create);
}