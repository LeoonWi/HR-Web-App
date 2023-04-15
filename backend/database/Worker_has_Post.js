import { db } from './connectMariaDB.js';

export const showWorkerHasPost = (req, res) => {
    db.query("SELECT * FROM db_hr.Worker_has_Post", (err, worker_has_posts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(worker_has_posts);
        };
    });
};