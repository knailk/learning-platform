const fs = require('fs');

const saveFileCode = (path, file_name, content) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
    //write file
    fs.writeFileSync(path + '/' + file_name, content);
    return path + '/' + file_name;
};

const createTestCaseFile = (arr_in_out, function_name) => {
    arr_in_out.forEach((value) => {
        
    });
};

module.exports = { saveFileCode };
