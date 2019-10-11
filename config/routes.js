'use strict';

/**
 * Module dependencies.
 */

const home = require('./routes/home');
const request = require('./routes/requestUser');
/**
 * Expose
 */

module.exports = function(app) {
  // Set global routes
  app.use('/', home);
  app.use('/request', request);
  /**
   * Error handling
   */

  app.use(function(err, req, res, next) {
    // treat as 404
    res.locals.csrfToken = req.csrfToken();
    if (
      err.message &&
      (~err.message.indexOf('not found') ||
        ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
