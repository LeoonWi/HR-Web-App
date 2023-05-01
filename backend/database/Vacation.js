import { db } from './connectMariaDB.js';

export const showVacation = (req, res) => {
    db.query({dateStrings: true, sql: "SELECT * FROM db_hr.Vacation"}, (err, vacations) => {
        if(err) {
            console.log(err);
        } else {
            res.json(vacations);
        };
    });
};

export const updateVacation = (req, res) => {
    var worker_fio = req.body.worker_fio;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var status = req.body.status;
    var id = req.body.id;
    db.query("REPLACE INTO db_hr.Vacation (id_vacation, worker_fio, start_date, end_date, status) VALUES (?,?,?,?,?)", 
    [id, worker_fio, start_date, end_date, status], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Данные в таблицу Отпуска изменены."});
        };
    });
};

export const searchVacation = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM db_hr.Vacation WHERE worker_fio LIKE '%${req.body.str}%'`}, (err, vacations) => {
        if(err) {
            console.log(err);
        } else {
            res.json(vacations);
        };
    });
};