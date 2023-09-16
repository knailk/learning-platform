const fs = require('fs');
const cors = require('cors');
const express = require('express');
const PythonShell = require('python-shell').PythonShell;
const defaultPath = './code';
const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/python', (req, res) => {
    let file_name = Date.now() + '.py';
    try {
        let date = new Date();
        let file_path = defaultPath + '/' + req.body.user_id + '/code_test/';
        file_path += date.getFullYear() + '_';
        file_path += date.getMonth() + '_';
        file_path += date.getDate();

        //check if folder exist
        if (!fs.existsSync(file_path)) {
            fs.mkdirSync(file_path, { recursive: true });
        }
        //add file
        fs.appendFile(file_name, '', function (err) {
            if (err) throw err;
        });
        //write file
        fs.writeFile(file_path + '/' + file_name, req.body.code);
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            args: [1, 2, 3],
        };
        PythonShell.run(file_path + '/' + file_name, options)
            .then((messages) => {
                res.send({ data: messages.join('\r\n') });
                fs.unlinkSync(file_name);
            })
            .catch((err) => {
                res.send({ data: err.traceback });
                fs.unlinkSync(file_name);
            });
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
        fs.unlinkSync(file_name);
    }
});

app.post('/code-practice', (req, res) => {
    let file_name = req.body.practice_code_id + '.py';
    try {
        let file_path = defaultPath + '/' + req.body.user_id + '/code_practice';
        //check if folder exist
        if (!fs.existsSync(file_path)) {
            fs.mkdirSync(file_path, { recursive: true });
        }
        //add file
        fs.appendFile(file_name, '', function (err) {
            if (err) throw err;
        });
        //write file
        fs.writeFileSync(file_path + '/' + file_name, req.body.code);
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            args: [1, 2, 3],
        };
        if (req.body.run) {
            PythonShell.run(file_path + '/' + file_name, options)
                .then((messages) => {
                    res.send({ data: messages.join('\r\n') });
                    fs.unlinkSync(file_name);
                })
                .catch((err) => {
                    res.send({ data: err.traceback });
                    fs.unlinkSync(file_name);
                });
        } else {
            res.send({ data: 'success' });
        }
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
        fs.unlinkSync(file_name);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
