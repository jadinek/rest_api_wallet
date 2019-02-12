module.exports = function (app, db) {
    app.get('/login/email/:email/password/:password', function (req, res) {
        db.all("SELECT * FROM users WHERE email = ? AND password = ?", [req.params.email], [req.params.password], function (err, user) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else {
                res.send({ user });
            }
        });
    });
};
//# sourceMappingURL=login.js.map