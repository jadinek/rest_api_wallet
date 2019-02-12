const init = require ('./database');
const getinfo = require ('./get');
const postinfo = require ('./post');
const putinfo = require ('./put');
const deleteinfo = require ('./delete');

const express:any = require('express');
const sqlite3:any = require('sqlite3');
const bodyParser:any = require('body-parser');

const app:any = express();
const port = process.env.PORT || 3000;
const db:any = new sqlite3.Database('accounts');

app.use(bodyParser.json());

init(db);

app.get('/', function(req:any, res:any){
    res.send('Success');
});

getinfo(app, db);
postinfo(app, db);
putinfo(app, db);
deleteinfo(app, db);

app.listen(port);
console.log('Server listening on port ' + port);