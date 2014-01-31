var Neo = require('../');

var db = Neo();

var query = 'MATCH \
  (user:User {firstName: {name}}) \
  -[relation]-> \
  (follows:User) \
  RETURN user.firstName, relation, follows.firstName';

db.query(query, {
  name: 'Adam'
}, function (err, rows) {
  if (err) throw err;
  console.log(JSON.stringify(rows, null, 2));
});
