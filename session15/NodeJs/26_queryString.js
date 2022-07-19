querystring = require('querystring');

const res = querystring.parse('empname=smith&empsalary=2346');
console.log(res);

const res1 = querystring.stringify({
    'empname': 'david', 
    'empsalary': '56334'
});
console.log(res1);