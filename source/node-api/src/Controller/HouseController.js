var model = require('../Schemas/House.js');

module.exports = {
    create: function (req, res) {
        var house = new model({
            name: req.body.name,
            address: req.body.address,
            creation: req.body.creation,
            color: req.body.color,
            adminID: req.body.adminID,
            removed: false
        });

        house.save(function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar nova casa', error: err }) };
            return res.json({ house: house, message: 'Casa criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.body.name;
        model.findOne({ name: name }, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar casa', error: err }) };
            if (house) {
                return res.json({ house: house, message: 'Casa encontrado!' });
            } else {
                return res.json({ house: house, message: 'Casa não encontrado :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.body.id;
        model.findOne({ _id: id }, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar casa', error: err }) };
            if (house) {
                return res.json({ house: house, message: 'Casa encontrado!' });
            } else {
                return res.json({ house: house, message: 'Casa não encontrado :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.body.id;
        model.findByIdAndRemove(id, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar casa', error: err }) };
            return res.json({ message: 'Casa excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.body.id;
        var house = { 
            name: req.body.name,
            address: req.body.address,
            color: req.body.color,
            adminID: req.body.adminID,
            removed: req.body.removed
        };
        model.findByIdAndUpdate(id, house, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar casa', error: err }) };
            return res.json({ message: 'Casa atualizado com sucesso!' });
        });
    }
};