import { db } from './connectMariaDB.js';

export const showSick = (req, res) => {
    db.query({dateStrings: true, sql: "SELECT * FROM db_hr.Sick"}, (err, sicks) => {
        if(err) {
            console.log(err);
        } else {
            res.json(sicks);
        };
    });
};

export const updateSick = (req, res) => {
    var worker_fio = req.body.worker_fio;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var id = req.body.id;
    db.query("REPLACE INTO db_hr.Sick (id_sick, worker_fio, start_date, end_date) VALUES (?,?,?,?)", 
    [id, worker_fio, start_date, end_date], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Данные в таблицу Больничные изменены."});
        };
    });
};

export const searchSick = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM db_hr.Sick WHERE worker_fio LIKE '%${req.body.str}%'`}, (err, sicks) => {
        if(err) {
            console.log(err);
        } else {
            res.json(sicks);
        };
    });
};