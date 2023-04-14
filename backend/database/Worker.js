var getWorker = require('./Models/WorkerModel');
const showWorker = (req, res) => {
    getWorker((err, workers) => {
        if(err) {
            console.log(err);
        } else {
            res.json(workers);
        };
    });
};

module.exports = showWorker;