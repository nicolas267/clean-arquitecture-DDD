import  usersControllers from '../../controllers/users/usersControllers';

const users = new usersControllers;
// const strategy = new usersControllers;

exports.assignRoutes = function (app: any) {
    app.post('/users/create', users.create);

    // app.get('/strategy/:id', strategy.index);
    // app.get('/strategy/', strategy.show);
    // app.post('/strategy/create', strategy.create);

}