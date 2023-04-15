import mariadb from '../../node_modules/mariadb/callback.js';

export const db = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003',
    database: 'db_hr'
});

// db.connect(function(err) {
//     if(err) {
//         console.log("Ошибка подключения! Err: "); throw err;
//     } else {
//         console.log("Подключение прошло успешно!");
//     }
// });