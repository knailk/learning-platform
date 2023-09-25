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
        let main_content = `import sys\nimport json\nfrom ast import literal_eval\nfrom Solution import Solution\n\nprint(Solution().${req.body.function_name}(*json.loads(sys.argv[1])['input']))`;
        let file_path_user = defaultPath + '/' + req.body.user_id + '/code_practice/' + req.body.practice_code_id + '/user';
        let file_path_solution = defaultPath + '/' + req.body.user_id + '/code_practice/' + req.body.practice_code_id + '/solution';
        utils.saveFileCode(file_path_user, 'Solution.py', req.body.code);
        utils.saveFileCode(file_path_user, 'main.py', main_content);
        utils.saveFileCode(file_path_solution, 'Solution.py', req.body.solution);
        utils.saveFileCode(file_path_solution, 'main.py', main_content);
        if (req.body.run === true) {
            let test_case = [];
            if (req.body.type === 'test') {
                test_case = req.body.user_test_case;
            } else {
                test_case = req.body.test_case.map((value, idx) => {
                    return { id: idx, input: [...value.input] };
                });
            }
            let input_output = [];
            try {
                input_output = utils.convertTestCase(test_case);
            } catch (error) {
                res.status(400).send({ error: { message: error, title: 'TestCase không hợp lệ' } });
            }
            let return_value = [];
            let return_solution = [];
            let error = false;
            let count = 0;
            let count_solution = 0;
            let total = input_output.length;
            let flag = false;
            input_output.every(async (element) => {
                let args = { input: element.input };
                let options = {
                    mode: 'text',
                    pythonOptions: ['-u'],
                    args: [JSON.stringify(args)],
                };
                await PythonShell.run(file_path_user + '/' + 'main.py', options)
                    .then((messages) => {
                        count++;
                        return_value.push({ id: element.id, value: { input: element.original_input, output: messages[0] } });
                    })
                    .catch((err) => {
                        return_value = err.traceback;
                        error = true;
                    });
                await PythonShell.run(file_path_solution + '/' + 'main.py', options)
                    .then((messages) => {
                        count_solution++;
                        return_solution.push({ id: element.id, value: { input: element.original_input, output: messages[0] } });
                    })
                    .catch((err) => {
                        return_solution = err.traceback;
                        error = true;
                    });
                if (((count === total && count_solution === total) || error === true) && flag === false) {
                    if (error) {
                        res.status(400).send({ error: { message: utils.customErrorReturn(return_value), title: 'Lỗi Runtime' } });
                        flag = true;
                        return false;
                    } else {
                        res.send({
                            data: {
                                user: return_value,
                                solution: return_solution,
                            },
                        });
                        return false;
                    }
                }
            });
        } else {
            res.send({ data: 'success' });
        }
    } catch (error) {
        res.send({ data: 'Lỗi hệ thống, vui lòng thử lại sau' });
    }
});

app.get('/code-practice/get-saved-file', (req, res) => {
    let path = defaultPath + '/' + req.query.user_id + '/code_practice' + '/' + req.query.problem_id + '/user' + '/Solution.py';
    if (!fs.existsSync(path)) {
        res.send({ data: '' });
    } else {
        let data_content = fs.readFileSync(path, 'utf8');
        res.send({ data: data_content });
    }
});

const file_path_game = './game';
app.post('/game/run', (req, res) => {
    utils.saveFileCode(file_path_game, 'main.py', 'from hero import Hero\nhero = Hero()\n' + req.body.code);
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: null,
    };
    PythonShell.run(file_path_game + '/' + 'main.py', options)
        .then((messages) => {
            res.send({ data: messages.join('') });
        })
        .catch((err) => {
            res.status(400).send({ data: err });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
