module.exports = function(app:any, db:any)
{
    //delete users where user_id =
    app.delete('/users/names/user_id/:user_id', function(req:any, res:any) {
        db.run("DELETE from users WHERE user_id = ?", [req.params.user_id], function(err:any, user:any) {
                if (err){
                    console.error(err);
                    res.status(500).send(err);
                } else
                    res.send();
            });
        });
};