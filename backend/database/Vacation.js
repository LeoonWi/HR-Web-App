import { db } from './connectMariaDB.js';

export const showVacation = (req, res) => {
    db.query("SELECT * FROM db_hr.Vacation", (err, vacations) => {
        if(err) {
            console.log(err);
        } else {
            res.json(vacations);
        };
    });
};