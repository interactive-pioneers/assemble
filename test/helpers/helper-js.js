/**
 * Assemble <http://assemble.io>
 * Created and maintained by Jon Schlinkert and Brian Woodward
 *
 * Copyright (c) 2013 Upstage.
 * Licensed under the MIT License (MIT).
 */

module.exports.register = function(Handlebars, options) {
  var path = require('path');
  var Utils = require('./utils');

  Handlebars.registerHelper("js", function(context) {
    if (!Array.isArray(context)) {context = [context];}
    return new Handlebars.SafeString(context.map(function(item) {
      var ext = Utils.getext(item);
      var js = '<script src="' + options.assets + '/js/' + item + '"></script>';
      var coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
      switch (ext) {
        case "js":
          return js;
        case "coffee":
          return coffee;
        default:
          return js;
      }
    }).join("\n"));
  });
};
