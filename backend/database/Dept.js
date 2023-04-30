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

export const showDeptById = (req, res) => {
    db.query("SELECT Dept.dept_name, Dept.fio_chief FROM db_hr.Dept, db_hr.Post WHERE Dept.dept_name = ?", [req.params.dept_name], (err, depts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(depts);
        };
    });
};

export const addDept = (req, res) => {
    db.query("INSERT INTO db_hr.Dept (dept_name, fio_chief) VALUES (?,?)", [req.body.dept_name, req.body.fio_chief], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Отдел добавлен."});
        };
    });
};

export const updateDept = (req, res) => {
    db.query("UPDATE db_hr.Dept SET dept_name = ?, fio_chief = ? WHERE dept_name = ?", [req.body.dept_name, req.body.fio_chief, req.body.dept_nameOld], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Данные в таблице Отдел были изменены."});
        };
    });
};

export const delDept = (req, res) => {
    db.query("DELETE FROM db_hr.Dept WHERE dept_name = ?", [req.body.dept_nameOld], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.json({ message: "Отдел удален." });
        };
    })
};