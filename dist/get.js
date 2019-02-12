module.exports = function (app, db) {
    //list all information in user table
    app.get('/users', function (req, res) {
        db.all("SELECT * FROM users", function (err, users) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else {
                res.send({ users });
            }
        });
    });
    //list information where user_id = user_id
    app.get('/users/user_id/:user_id', function (req, res) {
        db.all("SELECT * FROM users where user_id = ?", [req.params.user_id], function (err, user) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else {
                res.send({ user });
            }
        });
    });
    //list all information in accounts table
    app.get('/accounts', function (req, res) {
        db.all("SELECT * FROM accounts", function (err, accounts) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else {
                res.send({ accounts });
            }
        });
    });
    //list all information in transactions table
    app.get('/transactions', function (req, res) {
        db.all("SELECT * FROM transactions", function (err, transactions) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else {
                res.send({ transactions });
            }
        });
    });
};
//# sourceMappingURL=get.js.map