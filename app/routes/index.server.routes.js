var cwd = process.cwd(),
    index = require(cwd + '/app/controllers/index.server.controller');
module.exports = (app) => {
    app.route('/')
        .get(index.render);
}
