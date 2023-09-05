const fs = require('fs');
const cors = require('cors');
const express = require('express');
const PythonShell = require('python-shell').PythonShell;

const PORT = 80;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/python', (req, res) => {
    fs.writeFileSync('test.py', req.body.code);
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [1, 2, 3],
    };
    PythonShell.run('test.py', options)
        .then((messages) => {
            res.send({ data: messages.join('\r\n') });
        })
        .catch((err) => {
            res.send({ data: err.traceback });
        });
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
