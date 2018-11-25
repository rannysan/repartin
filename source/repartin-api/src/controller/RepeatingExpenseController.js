var model = require('../schemas/RepeatingExpense.js');

module.exports = {
    create: function (req, res) {
        var rExpense = new model({
            name: req.body.name,
            dueDate: req.body.dueDate,
            baseValue: req.body.baseValue,
            houseID: req.body.houseID,
            removed: false
        });

        rExpense.save(function (err, rExpense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar nova despesa fixa', error: err }) };
            return res.json({ rExpense: rExpense, message: 'Despesa fixa criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.body.name;
        model.findOne({ name: name }, function (err, rExpense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar despesa fixa', error: err }) };
            if (rExpense) {
                return res.json({ rExpense: rExpense, message: 'Despesa fixa encontrado!' });
            } else {
                return res.json({ rExpense: rExpense, message: 'Despesa fixa não encontrado :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.body.id;
        model.findOne({ _id: id }, function (err, rExpense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar despesa fixa', error: err }) };
            if (rExpense) {
                return res.json({ rExpense: rExpense, message: 'Despesa fixa encontrado!' });
            } else {
                return res.json({ rExpense: rExpense, message: 'Despesa fixa não encontrado :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.body.id;
        model.findByIdAndRemove(id, function (err, rExpense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro despesa fixa', error: err }) };
            return res.json({ message: 'Despesa fixa excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.body.id;
        var house = { 
            name: req.body.name,
            dueDate: req.body.dueDate,
            baseValue: req.body.baseValue,
            removed: req.body.removed
        };
        model.findByIdAndUpdate(id, house, function (err, house) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro deletar despesa fixa', error: err }) };
            return res.json({ message: 'Despesa fixa atualizada com sucesso!' });
        });
    }
};