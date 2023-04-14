var db = require('../connectMariaDB');

const getWorker = (result) => {
    db.query("SELECT * FROM db_hr.Worker", (err, workers) => {
        if(err) {
            console.log(err);
        } else {
            result(null, workers);
        };
    });
};

module.exports = getWorker;