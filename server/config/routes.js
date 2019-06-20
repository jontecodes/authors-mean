var authors = require('../controllers/authors');

module.exports = function(app){
    app.get('/authors', (req, res) => authors.index(req,res));
    app.get('/author/:id', (req, res) => authors.show(req, res));
    app.post('/create', (req, res) => authors.create(req, res));
    app.put('/update/author/:id', (req, res) => authors.update(req, res));
    app.delete('/destroy/:id', (req, res) => authors.destroy(req,res));
}