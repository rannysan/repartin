var model = require('../schemas/Payment.js');

module.exports = {
    create: function (req, res) {
        var payment = new model({
            userId: req.body.userId,
            value: req.body.value,
            date: req.body.date,
            removed: req.body.removed
        });

        payment.save(function (err, payment) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar novo pagamento', error: err }) };
            return res.json({ payment: payment, message: 'pagamento criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.params.name;
        model.findOne({ name: name, removed : false }, function (err, payment) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar pagamento', error: err }) };
            if (payment) {
                return res.json({ payment: payment, message: 'pagamento encontrada!' });
            } else {
                return res.status(201).json({ payment: payment, message: 'pagamento não encontrada :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.params.id;
        model.findOne({ _id: id, removed : false }, function (err, payment) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar pagamento', error: err }) };
            if (payment) {
                return res.json({ payment: payment, message: 'pagamento encontrada!' });
            } else {
                return res.status(201).json({ payment: payment, message: 'pagamento não encontrada :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function (err, payment) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar pagamento', error: err }) };
            return res.json({ message: 'pagamento excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.params.id;
        var payment = { 
            primary: req.body.primary,
            onPrimary: req.body.onPrimary,
            secondary: req.body.secondary,
            onSecondary: req.body.onSecondary
        };
        model.findByIdAndUpdate(id, payment, function (err, payment) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar pagamento', error: err }) };
            return res.json({ message: 'pagamento atualizada com sucesso!' });
        });
    }
};