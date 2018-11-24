var model = require('../Schemas/Expense.js');

module.exports = {
    create: function (req, res) {
        var expense = new model({
            name: req.body.name,
            value: req.body.value,
            useId: req.body.useId,
            assignedUserID: req.body.assignedUserID,
            payments: req.body.payments,
            dueDate: req.body.dueDate,
            repeatingExpenseID: req.body.repeatingExpenseID,
            houseID: req.body.houseID,
            removed: false
        });

        expense.save(function (err, expense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar nova despesa', error: err }) };
            return res.json({ expense: expense, message: 'Despesa criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.body.name;
        model.findOne({ name: name }, function (err, expense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar despesa', error: err }) };
            if (expense) {
                return res.json({ expense: expense, message: 'Despesa encontrado!' });
            } else {
                return res.json({ expense: expense, message: 'Despesa não encontrado :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.body.id;
        model.findOne({ _id: id }, function (err, expense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar Despesa', error: err }) };
            if (expense) {
                return res.json({ expense: expense, message: 'Despesa encontrada!' });
            } else {
                return res.json({ expense: expense, message: 'Despesa não encontrada :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.body.id;
        model.findByIdAndRemove(id, function (err, expense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar despesa', error: err }) };
            return res.json({ message: 'Despesa excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.body.id;
        var expense = { 
            name: req.body.name,
            value: req.body.value,
            useId: req.body.useId,
            assignedUserID: req.body.assignedUserID,
            payments: req.body.payments,
            dueDate: req.body.dueDate,
            repeatingExpenseID: req.body.repeatingExpenseID,
            houseID: req.body.houseID,
            removed: req.body.removed
        };
        model.findByIdAndUpdate(id, expense, function (err, expense) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar despesa', error: err }) };
            return res.json({ message: 'Despesa atualizada com sucesso!' });
        });
    }
};