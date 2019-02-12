module.exports = function (app, db) {
    //delete users where user_id =
    app.delete('/users/names/user_id/:user_id', function (req, res) {
        db.run("DELETE from users WHERE user_id = ?", [req.params.user_id], function (err, user) {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            }
            else
                res.send();
        });
    });
};
//# sourceMappingURL=delete.js.map