//12
const myObj;

//13
const myTeacher = {
    teachers: ["tomy" ,"rasmus", "mike", "viktor"],
    languages: ["javaScript, HTML/CSS"]
}

//14
let x = [1,2,3];
let y = [1,2,3];
let z = y;

//15
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = "red"
console.log(o2); //changing o2 changes o3
console.log(o3);

o1.foo = "blue"
console.log(o1); //changing o1 will not change o3
console.log(o3);