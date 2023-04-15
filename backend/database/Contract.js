import { db } from './connectMariaDB.js';

export const showContract = (req, res) => {
    db.query("SELECT * FROM db_hr.Contract", (err, contracts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(contracts);
        };
    });
};