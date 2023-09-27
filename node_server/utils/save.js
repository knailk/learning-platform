const fs = require('fs');
const path = require('path');
const NUMBER = 'number';
const STRING = 'string';
const ARRAY = 'array';
const convertType = (value, type) => {
    switch (type) {
        case NUMBER:
            if (!isNaN(value)) {
                return parseInt(value);
            } else {
                throw 'Giá trị ' + value + ' không phải là kiểu số';
            }
        case ARRAY:
            try {
                return JSON.parse(value);
            } catch (error) {
                throw 'Mảng ' + value + ' không hợp lệ';
            }
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

const customErrorReturn = (traceback) => {
    let regex = /File ".*", line/g;
    traceback = traceback.replaceAll(regex, 'At Line');
    try {
        let data = traceback.split('\r\n');
        return data.join('\r\n').trim();
    } catch (error) {
        return 'Đã xảy ra lỗi trong quá trình thực thi';
    }
};

module.exports = { saveFileCode, convertTestCase, customErrorReturn };
