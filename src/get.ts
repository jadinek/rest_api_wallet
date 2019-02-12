module.exports = function (app:any, db:any)
{
    //list all information in user table
    app.get('/users', function(req:any, res:any) {
        db.all("SELECT * FROM users", function(err:any, users:any) {
            if (err) {
            console.error(err);
            res.status(500).send(err);
            } else {
                res.send({users});
        }
    });
    });

    //list information where user_id = user_id
    app.get('/users/user_id/:user_id', function(req:any, res:any) {
        db.all("SELECT * FROM users where user_id = ?", [req.params.user_id], function(err:any, user:any) {
            if (err) {
            console.error(err);
            res.status(500).send(err);
            } else {
                res.send({user});
        }
    });
    });

    //list all information in accounts table
    app.get('/accounts', function(req:any, res:any) {
        db.all("SELECT * FROM accounts", function(err:any, accounts:any) {
            if (err) {
            console.error(err);
            res.status(500).send(err);
            } else {
                res.send({accounts});
        }
    });
    });

    //list all information in transactions table
    app.get('/transactions', function(req:any, res:any) {
        db.all("SELECT * FROM transactions", function(err:any, transactions:any) {
            if (err) {
            console.error(err);
            res.status(500).send(err);
            } else {
                res.send({transactions});
        }
    });
    });
}