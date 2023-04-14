var db = require('./connectMariaDB');

// Отображение всех сотрудников
const showWorker = (req, res) => {
    db.query({dateStrings: true, sql: "SELECT * FROM db_hr.Worker"}, (err, workers) => { // dateString для читабельного отображения даты
        if(err) {
            console.log(err);
        } else {
            res.json(workers);
        };
    });
};

module.exports = showWorker;