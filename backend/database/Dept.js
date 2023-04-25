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
    db.query("SELECT Dept.dept_name, Dept.fio_chief FROM db_hr.Dept, db_hr.Post WHERE Dept.dept_name = Post.dept_name AND Dept.dept_name = ?", [req.params.dept_name], (err, depts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(depts);
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