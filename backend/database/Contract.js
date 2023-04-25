import { db } from './connectMariaDB.js';

export const showContract = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM db_hr.Contract`}, (err, contracts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(contracts);
        };
    });
};

export const updateContract = (req, res) => {
    db.query(`UPDATE Contract SET date_of_dismissal = ? WHERE worker_fio = ?`, [req.body.date, req.body.fio], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: 'Данные в таблице Контракты изменены.' })
        };
    });
};

export const createContract = (req, res) => {
    db.query(`INSERT INTO Contract (worker_fio, date_of_employment, date_of_dismissal) VALUES (?, ?, NULL)`,
    [req.body.fio, req.body.date], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: 'Добавлена новая запись в таблицу Контракты.' })
        };
    });
};