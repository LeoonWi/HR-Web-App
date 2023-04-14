const express = require('express');
const PORT = 3000;
const app = express();

var showWorker = require('./database/Worker');
app.get('/', showWorker);

app.listen(PORT, () => {
    console.log('Сервер запущен на порту', PORT);
});