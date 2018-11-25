var model = require('../schemas/House.js');

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
        var name = req.params.name;
        model.findOne({ name: name, removed : false }, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar casa', error: err }) };
            if (house) {
                return res.json({ house: house, message: 'Casa encontrado!' });
            } else {
                return res.status(201).json({ house: house, message: 'Casa não encontrado :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.params.id;
        model.findOne({ _id: id , removed : false}, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar casa', error: err }) };
            if (house) {
                return res.json({ house: house, message: 'Casa encontrado!' });
            } else {
                return res.status(201).json({ house: house, message: 'Casa não encontrado :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar casa', error: err }) };
            return res.json({ message: 'Casa excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.params.id;
        var house = { 
            name: req.body.name,
            address: req.body.address,
            color: req.body.color,
            adminID: req.body.adminID,
            removed: req.body.removed
        };
        console.log(house.name);
        
        model.findByIdAndUpdate(id, house, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar casa', error: err }) };
            return res.json({ message: 'Casa atualizado com sucesso!' });
        });
    }
};