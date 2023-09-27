"use strict";
// Ctrl + Shift + B
console.log("Hello Typescript");
// Types
// - Number/String/Boolean
let a;
a = 5;
// a = '10'
let b = 10;
b = 20;
// b = '20'
let c;
c = "Hi";
// c = 4
let d = "BC52";
let e;
e = true;
// Array
let arr1 = [1, 2, 3];
let arr2 = ["A", "B", "C"];
// Tuple
let tuple1 = ["score", 5];
// Enum
var Language;
(function (Language) {
    Language["Ti\u1EBFng Vi\u1EC7t"] = "vn";
    Language["English-US"] = "en-us";
    Language["English-UK"] = "en-uk";
    Language["Chinese"] = "cn";
})(Language || (Language = {}));
console.log(Language["Tiếng Việt"]);
const student = {
    name: "bob",
    email: "bob@gmail.com",
    className: "BC52",
    //   age: 20,
};
// Type nâng cao
// - Union type
let data = null;
data = {
    name: "alice",
    email: "alice@gmail.com",
    className: "BC52",
};
// - Record : định dạng các kiểu biến trong chuỗi
let obj;
obj = {
    a: 1,
    b: "A",
};
