neoforge
========

node.js driver for neo4j

## Documentation

Currently only Cypher queries via REST are possible.

### Getting started

Create an instance of the Neo class and make a simple query.

```js
var Neo = require('neoforge');

var db = Neo();

var query = 'MATCH \
  (user:User {firstName: {name}}) \
  -[relation]-> \
  (follows:User) \
  RETURN user, relation, follows.firstName';

db.query(query, {name: 'Adam'}, function (err, rows) {
  if (err) throw err;
  console.log(rows);
});
```

Which outputs this object:

```json
[
  {
    "user": {
      "lastName": "Snodgrass",
      "displayName": "overra",
      "firstName": "Adam",
      "metadata": {
        "labels": "http://localhost:7474/db/data/node/0/labels",
        "outgoing_relationships": "http://localhost:7474/db/data/node/0/relationships/out",
        "all_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/all/{-list|&|types}",
        "traverse": "http://localhost:7474/db/data/node/0/traverse/{returnType}",
        "property": "http://localhost:7474/db/data/node/0/properties/{key}",
        "self": "http://localhost:7474/db/data/node/0",
        "outgoing_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/out/{-list|&|types}",
        "properties": "http://localhost:7474/db/data/node/0/properties",
        "incoming_relationships": "http://localhost:7474/db/data/node/0/relationships/in",
        "extensions": {},
        "create_relationship": "http://localhost:7474/db/data/node/0/relationships",
        "paged_traverse": "http://localhost:7474/db/data/node/0/paged/traverse/{returnType}{?pageSize,leaseTime}",
        "all_relationships": "http://localhost:7474/db/data/node/0/relationships/all",
        "incoming_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/in/{-list|&|types}"
      },
      "node": "0"
    },
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
    "user": {
      "lastName": "Snodgrass",
      "displayName": "overra",
      "firstName": "Adam",
      "metadata": {
        "labels": "http://localhost:7474/db/data/node/0/labels",
        "outgoing_relationships": "http://localhost:7474/db/data/node/0/relationships/out",
        "all_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/all/{-list|&|types}",
        "traverse": "http://localhost:7474/db/data/node/0/traverse/{returnType}",
        "property": "http://localhost:7474/db/data/node/0/properties/{key}",
        "self": "http://localhost:7474/db/data/node/0",
        "outgoing_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/out/{-list|&|types}",
        "properties": "http://localhost:7474/db/data/node/0/properties",
        "incoming_relationships": "http://localhost:7474/db/data/node/0/relationships/in",
        "extensions": {},
        "create_relationship": "http://localhost:7474/db/data/node/0/relationships",
        "paged_traverse": "http://localhost:7474/db/data/node/0/paged/traverse/{returnType}{?pageSize,leaseTime}",
        "all_relationships": "http://localhost:7474/db/data/node/0/relationships/all",
        "incoming_typed_relationships": "http://localhost:7474/db/data/node/0/relationships/in/{-list|&|types}"
      },
      "node": "0"
    },
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

## TODO

- Create Node and Relationship classes with methods to query for labels and other metadata
- Create chainable methods for batch, transactional and cypher queries

## License
(ISC License)

Copyright (c) 2014, Adam Snodgrass <adam@overra.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.