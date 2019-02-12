const init = require('./database');
const getinfo = require('./get');
const postinfo = require('./post');
const putinfo = require('./put');
const deleteinfo = require('./delete');
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = new sqlite3.Database('accounts');
app.use(bodyParser.json());
init(db);
app.get('/', function (req, res) {
    res.send('Success');
});
getinfo(app, db);
postinfo(app, db);
putinfo(app, db);
deleteinfo(app, db);
app.listen(port);
console.log('Server listening on port ' + port);
//# sourceMappingURL=account.js.map