import { db } from './connectMariaDB.js';

export const showDept = (req, res) => {
    db.query("SELECT * FROM db_hr.Dept", (err, depts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(depts);
        };
    });
};