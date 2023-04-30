import { db } from './connectMariaDB.js';

export const showAllPost = (req, res) => {
    db.query("SELECT * FROM db_hr.Post", (err, posts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(posts);
        };
    });
};

export const showPost = (req, res) => {
    db.query("SELECT * FROM db_hr.Post WHERE Post.dept_name = ?", [req.params.dept_name], (err, posts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(posts);
        };
    });
};

export const delPost = (req, res) => {
    db.query("DELETE FROM db_hr.Post WHERE post_name = ?", [req.body.post_name], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.json({ message: "Должность удалена." });
        };
    })
};

export const addPost = (req, res) => {
    db.query("INSERT INTO db_hr.Post (dept_name, post_name, salary) VALUES (?,?,?)", [req.body.dept_name, req.body.post_name, req.body.salary], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Должность добавлена."});
        };
    });
};

export const updatePost = (req, res) => {
    db.query("UPDATE db_hr.Post SET dept_name = ?, post_name = ?, salary = ? WHERE post_name = ?", [req.body.dept_name, req.body.post_name, req.body.salary, req.body.post_nameOld], (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send({message: "Данные в таблице Должности были изменены."});
        };
    });
};