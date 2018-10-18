<<<<<<< HEAD
//12 Create an empty object.
const myObj;
=======
//12. Create an empty object.
const myObj = {};
>>>>>>> 2906af9b08bf95b0f524b457f6d820079b9a66f5

//13. Create an object that contains the teachers that you have had so far for the different modules.
const myTeacher = {
    teachers: ["tomy" ,"rasmus", "mike", "viktor"],
}

//14. Add a property to the object you just created that contains the languages that
// they have taught you.
myTeacher.languages = ["javaScript, HTML, CSS"]
console.log(myTeacher);


//15 Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1,2,3];
let y = [1,2,3];
let z = y;


console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16 Take a look at the following code:
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o2.foo = "red"
console.log(o2); //changing o2 changes o3
console.log(o3);

o1.foo = "blue"
console.log(o1); //changing o1 will not change o3
console.log(o3);

//17 What does the following code return? (And why?)

let bar = 42;
let type = typeof typeof bar;
console.log(type);
//‘Coerce' means to try to change - 
//so coercing var x = '6' to number means trying to change the type to number temporarily.
