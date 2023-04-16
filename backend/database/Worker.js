import { db } from './connectMariaDB.js';

// Отображение всех сотрудников
export const showWorker = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM Worker`}, (err, workers) => { // dateString для читабельного отображения даты
        if(err) {
            console.log(err);
        } else {
            res.json(workers);
        };
    });
};