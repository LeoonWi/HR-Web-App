import { db } from './connectMariaDB.js';

// Отображение всех сотрудников
export const showWorker = (req, res) => {
    db.query({dateStrings: true, sql: 
        `SELECT * FROM Worker`}, (err, workers) => { // dateString для читабельного отображения даты
        if (err) {
            console.log(err);
        } else {
            res.json(workers);
        };
    });
};

export const updateWorker = (req, res) => {
    if (!req.body.status) {
        db.query("UPDATE Worker SET fio = ?, birthdate = ?, gender = ?, address = ?, phone = ? WHERE fio = ?",
        [req.body.fio, req.body.birthdate, req.body.gender, req.body.address, req.body.phone, req.body.fioKey], (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    message: `Данные о работке изменены.`
                });
            };
        });
    } else if (req.body.status) {
        db.query("UPDATE Worker SET status = ?, reason = ? WHERE fio = ?",
        [req.body.status, req.body.reason, req.body.fioKey], (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    message: `Работник уволен.`
                });
            };
        });
    } else {
        res.send({
            message: `Произошла ошибка.`
        });
    }
};

export const createWorker = (req, res) => {
    if (!req.body) return res.send({message: `Нет данных`});
    db.query("INSERT INTO Worker (fio, birthdate, gender, address, phone, status, reason) VALUE (?,?,?,?,?,'Работает',NULL)",
    [req.body.fio, req.body.birthdate, req.body.gender, req.body.address, req.body.phone], (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({
                message: `Работник добавлен.`
            });
        };
    });
};

export const searchWorker = (req, res) => {
    db.query({dateStrings: true, sql: `SELECT * FROM db_hr.Worker WHERE fio LIKE '%${req.body.str}%'`}, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.json(data);
        };
    });
};