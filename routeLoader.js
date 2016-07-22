module.exports = function (modules, app) {
    modules.forEach(function (module) {
        app.use('/' + (module.path || module), require('./modules/' + (module.name || module) + '/router'));
    });
}
