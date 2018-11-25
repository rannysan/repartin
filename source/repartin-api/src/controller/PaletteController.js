var model = require('../schemas/Palette.js');

module.exports = {
    create: function (req, res) {
        var palette = new model({
            primary: req.body.primary,
            onPrimary: req.body.onPrimary,
            secondary: req.body.secondary,
            onSecondary: req.body.onSecondary
        });

        palette.save(function (err, palette) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao salvar nova paleta de cores', error: err }) };
            return res.json({ palette: palette, message: 'paleta de cores criada com sucesso!' });
        });
    },

    getByName: function (req, res) {
        var name = req.params.name;
        model.findOne({ name: name, removed : false }, function (err, palette) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar paleta de cores', error: err }) };
            if (palette) {
                return res.json({ palette: palette, message: 'paleta de cores encontrada!' });
            } else {
                return res.status(201).json({ palette: palette, message: 'paleta de cores não encontrada :(!' });
            }
        });
    },

    getById: function (req, res) {
        var id = req.params.id;
        model.findOne({ _id: id, removed : false }, function (err, palette) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao buscar paleta de cores', error: err }) };
            if (palette) {
                return res.json({ palette: palette, message: 'paleta de cores encontrada!' });
            } else {
                return res.status(201).json({ palette: palette, message: 'paleta de cores não encontrada :(!' });
            }
        });
    },

    deleteById: function (req, res) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function (err, palette) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar paleta de cores', error: err }) };
            return res.json({ message: 'paleta de cores excluida com sucesso!' });
        });
    },

    updateById: function (req, res) {
        var id = req.params.id;
        var palette = { 
            primary: req.body.primary,
            onPrimary: req.body.onPrimary,
            secondary: req.body.secondary,
            onSecondary: req.body.onSecondary
        };
        model.findByIdAndUpdate(id, palette, function (err, palette) {
            if (err) { return res.status(500).json({ message: 'Ops! Ocorreu um erro ao deletar paleta de cores', error: err }) };
            return res.json({ message: 'paleta de cores atualizada com sucesso!' });
        });
    }
};