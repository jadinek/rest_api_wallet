module.exports = function (app, db) {
    //add users
    app.post('/users/', function (req, res) {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const password = req.body.password;
        var sql = "INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?);";
        var values = [first_name, last_name, email, password];
        db.serialize(function () {
            db.run(sql, values, function (err) {
                if (err) {
                    console.error(err);
                    res.status(500).send(err);
                }
                else
                    res.send();
            });
        });
    });
};
//# sourceMappingURL=post.js.map