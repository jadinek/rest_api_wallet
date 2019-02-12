require('./account');
function initialise(db) {
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, password TEXT);");
        db.run("CREATE TABLE IF NOT EXISTS accounts (account_id INTEGER PRIMARY KEY AUTOINCREMENT, account_type INTEGER, account_number INTEGER, account_balance INTEGER, scale REAL);");
        db.run("CREATE TABLE IF NOT EXISTS transactions (transaction_id INTEGER PRIMARY KEY AUTOINCREMENT, account_id INTEGER, transaction_date TEXT, credit INTEGER, debit INTEGER, scale REAL, FOREIGN KEY(account_id) REFERENCES accounts(account_id));");
        db.run("CREATE TABLE IF NOT EXISTS account_owner (user_id INTEGER, account_id INTEGER, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY(account_id) REFERENCES accounts(account_id));");
    });
}
;
module.exports = initialise;
//# sourceMappingURL=database.js.map