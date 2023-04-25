import { db } from './connectMariaDB.js';

export const showPost = (req, res) => {
    db.query("SELECT * FROM db_hr.Post WHERE Post.dept_name = ?", [req.params.dept_name], (err, posts) => {
        if(err) {
            console.log(err);
        } else {
            res.json(posts);
        };
    });
};