const fs = require('fs');
const cors = require('cors');
const express = require('express');
const PythonShell = require('python-shell').PythonShell;
const defaultPath = './data/code';
const PORT = 3001;
const app = express();
const utils = require('./utils/save');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.post('/python', (req, res) => {
    let file_name = Date.now() + '.py';
    try {
        let date = new Date();
        let file_path = defaultPath + '/' + req.body.user_id + '/code_test/';
        file_path += date.getFullYear() + '_';
        file_path += date.getMonth() + '_';
        file_path += date.getDate();

        utils.saveFileCode(file_path, file_name, req.body.code);

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
    try {
        let file_path = defaultPath + '/' + req.body.user_id + '/code_practice/' + req.body.practice_code_id;
        utils.saveFileCode(file_path, 'Solution.py', req.body.code);
        utils.saveFileCode(file_path, 'main.py', `from Solution import Solution\nimport sys\nprint(Solution().${req.body.function_name}(*sys.argv[1:]))`);
        if (req.body.run === true) {
            let test_case = req.body.test_case;
            let input_output = utils.convertTestCase(test_case);
            const run_test_case = () => {
                let return_value = [];
                let error = false;
                let count = 0;
                let total = input_output.length;
                input_output.forEach(async (element, index) => {
                    let options = {
                        mode: 'text',
                        pythonOptions: ['-u'],
                        args: element.input,
                    };
                    await PythonShell.run(file_path + '/' + 'main.py', options)
                        .then((messages) => {
                            count++;
                            return_value.push({ id: element.id, value: { input: element.original_input, output: messages[0] } });
                        })
                        .catch((err) => {
                            return_value = err.traceback;
                            error = true;
                        });
                    if (count === total || error === true) {
                        if (error) {
                            res.status(400).send({ error: utils.customErrorReturn(return_value) });
                        } else {
                            res.send({ data: return_value });
                        }
                    }
                });
            };
            run_test_case();
        } else {
            res.send({ data: 'success' });
        }
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
    }
});
app.get('/code-practice/get-saved-file', (req, res) => {
    let path = defaultPath + '/' + req.query.user_id + '/code_practice' + '/' + req.query.problem_id + '/Solution.py';
    if (!fs.existsSync(path)) {
        res.send({ data: '' });
    } else {
        let data_content = fs.readFileSync(path, 'utf8');
        res.send({ data: data_content });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
