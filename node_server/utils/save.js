const fs = require('fs');
const path = require('path');
const NUMBER = 'number';
const STRING = 'string';
const ARRAY = 'array';
const convertType = (value, type) => {
    switch (type) {
        case NUMBER:
            return parseInt(value);
        case ARRAY:
            return JSON.parse(value);
        default:
            return value;
    }
};

const saveFileCode = (file_path, file_name, content) => {
    if (!fs.existsSync(file_path)) {
        fs.mkdirSync(file_path, { recursive: true });
    }
    //write file
    // fs.unlinkSync(path.join(file_path, file_name));
    fs.writeFileSync(file_path + '/' + file_name, content);
    return file_path + '/' + file_name;
};

const convertTestCase = (test_cases) => {
    let result = test_cases.map((test_case) => {
        let input_arr = test_case.input.map((input) => {
            return convertType(input.value, input.type);
        });
        return { id: test_case.id, input: input_arr, original_input: test_case.input };
    });
    return result;
};

module.exports = { saveFileCode, convertTestCase };
