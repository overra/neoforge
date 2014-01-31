var request = require('request');

var Neo = module.exports = function (port, host) {
  if (!(this instanceof Neo)) {
    return new (Function.prototype.bind.apply(Neo, arguments));
  }

  this.port = port || 7474;
  this.host = host || 'localhost';
};

Neo.prototype.query = function (query, params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  }

  var body = {
    query: query
    , params: params
  };

  request({
    url: 'http://' + this.host + ':' + this.port + '/db/data/cypher'
    , method: 'POST'
    , headers: {
      'Accept': 'application/json; charset=UTF-8'
      , 'Content-Type': 'application/json'
    }
    , body: JSON.stringify(body)
  }, function (err, res, body) {
    var columns
      , rows;

    body = JSON.parse(body);

    if (body.message) { err = new Error(body.message); }
    else {
    columns = body.columns;
      rows = body.data.map(function (row) {
        var properties = {}; 
        row.forEach(function (property, index) {
          var type
            , id;

          if (typeof property === 'string') {
            properties[columns[index]] = property; 
          }
          else {
            properties[columns[index]] = property.data; 
            delete property.data;
            properties[columns[index]].metadata = property;
            type = property.self.split('/').slice(-2)[0];
            id = property.self.split('/').slice(-1)[0];
            properties[columns[index]][type] = id;
          }
        });
        return properties;
      });
    }

    callback(err, rows);
  });
};