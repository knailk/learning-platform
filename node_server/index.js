const fs = require('fs');
const cors = require('cors');
const express = require('express');
const PythonShell = require('python-shell').PythonShell;
const defaultPath = '../fe/public/code';
const PORT = 80;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/python', (req, res) => {
    try {
        let date = new Date();
        let file_path = defaultPath + '/' + req.body.user_id + '/code_test/';
        file_path += date.getFullYear() + '_';
        file_path += date.getMonth() + '_';
        file_path += date.getDate();
        let file_name = Date.now() + '.py';

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
        PythonShell.run(file_path + '/' + file_name, options)
            .then((messages) => {
                res.send({ data: messages.join('\r\n') });
                fs.unlinkSync(file_name);
            })
            .catch((err) => {
                res.send({ data: err.traceback });
            });
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
    }
});

app.post('/code-practice', (req, res) => {
    try {
        let file_path = defaultPath + '/' + req.body.user_id + '/code_practice';
        let file_name = req.body.practice_code_id + '.py';
        //check if folder exist
        // if (!fs.existsSync(file_path)) {
        //     fs.mkdirSync(file_path, { recursive: true });
        // }
        //add file
        // fs.appendFile(file_name, '', function (err) {
        //     if (err) throw err;
        // });
        // //write file
        fs.writeFileSync(file_path + '/' + file_name, req.body.code);
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            args: [1, 2, 3],
        };
        PythonShell.run(file_path + '/' + file_name, options)
            .then((messages) => {
                res.send({ data: messages.join('\r\n') });
                // fs.unlinkSync(file_name);
            })
            .catch((err) => {
                res.send({ data: err.traceback });
            });
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
