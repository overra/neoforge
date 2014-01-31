neoforge
========

node.js driver for neo4j

## Documentation

Currently only Cypher queries via REST are possible.

### Getting started

Create an instance of the Neo object and make a simple query.

```js
var Neo = require('neoforge');

var db = Neo();

var query = 'MATCH \
  (user:User {firstName: {name}}) \
  -[relation]-> \
  (follows:User) \
  RETURN user.firstName, relation, follows.firstName';

db.query(query, {name: 'Adam'}, function (err, rows) {
  if (err) throw err;
  console.log(rows);
});
```

Which outputs this object:

```json
[
  {
    "user.firstName": "Adam",
    "relation": {
      "followDate": 1390881336185,
      "metadata": {
        "start": "http://localhost:7474/db/data/node/0",
        "self": "http://localhost:7474/db/data/relationship/0",
        "property": "http://localhost:7474/db/data/relationship/0/properties/{key}",
        "properties": "http://localhost:7474/db/data/relationship/0/properties",
        "type": "FOLLOWS",
        "extensions": {},
        "end": "http://localhost:7474/db/data/node/1"
      },
      "relationship": "0"
    },
    "follows.firstName": "Amber"
  },
  {
    "user.firstName": "Adam",
    "relation": {
      "followDate": 1391186651565,
      "metadata": {
        "start": "http://localhost:7474/db/data/node/0",
        "self": "http://localhost:7474/db/data/relationship/1",
        "property": "http://localhost:7474/db/data/relationship/1/properties/{key}",
        "properties": "http://localhost:7474/db/data/relationship/1/properties",
        "type": "FOLLOWS",
        "extensions": {},
        "end": "http://localhost:7474/db/data/node/2"
      },
      "relationship": "1"
    },
    "follows.firstName": "Thomas"
  }
]
```