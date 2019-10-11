const RequestUser = require('../models/requestUser');

// eslint-disable-next-line no-unused-vars
exports.post = (req, res, next) => {
  new RequestUser(req.body)
    .save()
    .then(doc => {
      res.json({
        doc,
        message: 'Peticion enviado exitosamente'
      });
    })
    .catch(err => {
      res.status(500).json(err.errors);
    });
};

// eslint-disable-next-line no-unused-vars
exports.get = (req, res, next) => {
  res.render('request', {
    title: 'Request to apply',
    csrfToken: req.csrfToken(),
    errors: []
  });
};
