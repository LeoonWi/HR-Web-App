import { db } from './connectMariaDB.js';

export const showWorkerHasPost = (req, res) => {
    db.query("SELECT post_name FROM Worker_has_Post WHERE worker_fio = ?", [req.body.fio], (err, post) => {
        if (err) {
            console.log(err);
        } else {
            res.send(post);
        };
    });
};