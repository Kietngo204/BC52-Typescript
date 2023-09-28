// Ctrl + Shift + B
console.log("Hello Typescript");

// Types

// - Number/String/Boolean

let a: number;
a = 5;
// a = '10'

let b = 10;
b = 20;
// b = '20'

let c: string;
c = "Hi";
// c = 4

let d = "BC52";

let e: boolean;
e = true;

// Array

let arr1: Array<number> = [1, 2, 3];
let arr2: string[] = ["A", "B", "C"];

// Tuple

let tuple1: [string, number] = ["score", 5];

// Enum

enum Language {
  "Tiếng Việt" = "vn",
  "English-US" = "en-us",
  "English-UK" = "en-uk",
  "Chinese" = "cn",
}

console.log(Language["Tiếng Việt"]);

// Object
// type Student = {
//   name: string;
//   email: string;
//   className: string;
//   age?: number;
// };

interface Student {
  name: string;
  email: string;
  className: string;
  age?: number;
}

const student: Student = {
  name: "bob",
  email: "bob@gmail.com",
  className: "BC52",
  //   age: 20,
};

// Type nâng cao

// - Union type
let data: Student | null = null;
data = {
  name: "alice",
  email: "alice@gmail.com",
  className: "BC52",
};

// - Pick: lấy mấy cái liệt kệ
type CreateStudent = Pick<Student, "name" | "email">;

// - Omit: lấy hết - mấy cái liệt kê
type UpdateStudent = Omit<Student, "age" | "className">;

// - Partial: biến tất cả thành optional
type OptionalStudent = Partial<Student>;

// - Record : định dạng các kiểu biến trong chuỗi
let obj: Record<string, string | number>;
obj = {
  a: 1,
  b: "A",
};

// - Generic : Định dạng return về một hàm không xác định và mình sẽ quy định hàm mình sẽ trả ra là như nào
function getData<T>(url: string): T {
  return {} as T;
}

const data1 = getData<Student[]>("QuanLyPhim/LayDanhSachPhim");
const data12 = getData<Student>("QuanLyPhim/LayThongTinPhim");

// const resp1 = axios.get<Movie[]>("QuanLyPhim/LayThongTinPhim");

const btnEl = <HTMLButtonElement>document.getElementById("btn-submit");

const inpEl = <HTMLInputElement>document.getElementById("inp-email");

// Class
class Employee {
  protected _firstName: string;
  protected _lastName: string;
  public _email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

const emp1 = new Employee("Dan", "Nguyen", "dan@gnail.com");
console.log(emp1.fullName);

class Manager extends Employee {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
  }
}

// - Interface

interface ICar {
  branch: string;
  color: string;
  engine: string;
  releaseDate: string;
}

class Car implements ICar {
  constructor(
    public branch: string,
    public color: string,
    public engine: string,
    public releaseDate: string
  ) {}
}

const car = new Car("Toyota", "Silver", "1000cc", "25/10/2020");
