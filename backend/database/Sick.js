import { db } from './connectMariaDB.js';

export const showSick = (req, res) => {
    db.query("SELECT * FROM db_hr.Sick", (err, sicks) => {
        if(err) {
            console.log(err);
        } else {
            res.json(sicks);
        };
    });
};