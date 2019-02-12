module.exports = function (app, db) {
    //update users where user_id =
    app.put('/users/user_id/:user_id', function (req, res) {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const user_id = req.params.user_id;
        var sql = "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE user_id = ?";
        var values = [first_name, last_name, email, user_id];
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
//# sourceMappingURL=put.js.map