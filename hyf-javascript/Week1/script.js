alert("That's not a valid grade")

//1. Write a console.log statement saying "Hello World!" for each language that you know.
 
console.log ("Halo, dunia!");
console.log ("Ciao, mondo!");
console.log ("Hola, mundo!");

console.log("Halo, dunia! // English \nCiao, mondo! //Indonesian \nHola, mundo! //Spanish")


//2. Consider the following code:
//console.log('I'm awesome');
console.log("'I'm awesome'");

//3 Declare a variable x and initialize it with an integer, using these exact steps:
//3.1 First, declare your variable x (do not initialize it yet).
var x ;

//3.2 Add a console.log statement that explains in words what you think the value of x is,
console.log('the value of my variable x will be: "undefined"');

//3.3 Add a console.log statement that logs the value of x.
console.log (x);

//3.4 Now initialize your variable x with an integer.
x = 10;

//3.5 Add a console.log statement that explains in words what you think the value of x is,
console.log('the value of my variable x will be: "10"');

//3.6 Add a console.log statement that logs the value of x.
console.log (x);


//4 Declare a variable y and assign a string to it.
var y = " ";

//4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
 console.log("The value of my y will be empty space ");

// 4.2 Now console.log the variable y.
 console.log (y)
 
 //4.3 Now assign a new string to the variable y.
 y = "just a string"

 //4.4 Write a console.log statement in which you explain in words what you think the value of the string is.
 console.log("The value of my y will be the string  just a string");

// 4.2 Now console.log the variable y.
 console.log (y)



 //5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

 //5.1 Declare a variable z and assign the number 7.25 to it.
 var z = 7.25;

 //5.2 console.log z.
 console.log (z);

 //5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
 var a = Math.round(z);

 //5.4 console.log a.
 console.log(a);

 //5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
 maxValue = Math.max(a,z);

 //5.6 console.log the highest value.
console.log(maxValue);


//6. Arrays

//6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', 
//because an array is capable of containing more than one element. (See Naming conventions).
var array =[];

//6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log ("The value of array will be [] ")

//6.3
console.log(array)

//6.4 Create an array that has your favorite animals inside
//(see if you can find a good name that exactly describes what this variable will hold).

 myAnimle = ["cat", "lion", "dog"];

 //6.5 Log your array.
 console.log(myAnimle)


//6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
 myAnimle.push("baby pig");

 //6.7 Log your new array!
console.log(myAnimle)



//7 More strings
let myString = "this is a test";

//7.1 Add the string to your file and console.log it.
console.log(myString);

//7.2 Find a way to get the length of myString.
const theString = myString.length;
//7.3 console.log the length of myString.
console.log(theString);



//8. Write a program that checks the types of two variables and
 //prints out SAME TYPE if they are the same type.

 //8.1 First declare at least four variables and assign them different data types.
 var s =5; //number
 var h = "myName"; //string
 var a = ["black", "blue", "red"]; //arrya
 var person = {firstName:"shaimaa", age:"22"}; //Objects


// 8.2 For each variable write a console.log statement that logs the value
 console.log('The value of my variable s is: ' + s);
 console.log('The value of my variable h is: ' + h);
 console.log('The value of my variable a is: ' + a);
 console.log('The value of my variable persono is: ' + person);


//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
 console.log('The Tybe of my variable s is: number');
 console.log('The Tybe of my variable h is: string');
 console.log('The Tybe of my variable a is: arrya');
 console.log('The Tybe of my variable person is: Objects');

 //8.4 Now use typeof to log the actual type of your variables.
 console.log(typeof s);
 console.log(typeof h);
 console.log(typeof a);
 console.log(typeof person);


 //8.5 Now compare the types of your different variables with one another.
 //8.6 Make sure to also show a message when the variables you are comparing are not the same type.

 function sametype(a,s){
    if (typeof (a) == typeof (s)){
       console.log("Same Type");}
    else {
        console.log("the variables are diffrent Type");   
    }
}
 sametype (a, s);
 sametype (a, person);

//9. If x equals 7, and the only other statement is x = x % 3,
// what would be the new value of x?

//9.1 Add at least 3 console.log statements in 
//which you show that you understand what % does.

console.log( x + " / "  + 3 + "=" + (x % 3));
var x = 7; 
x = 7%3;
console.log(x);

var x = 10; 
x = 10%3;
console.log(x);

var x = 20; 
x = 20%5;
console.log(x);

//10. Write a program to answer the following questions:

//10.1 Can you store multiple types in an array? 
//Numbers and strings? Make an example that illustrates your answer.

var x = 10;
var array = ["red" , 2 , x , true];

for(i=0; i<array.length; i++){
console.log(typeof(array[i]));
}

//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0?
// How can you test this?

if (6/0 === 10/0){
    console.log("yes they are equal ");
}
else {
    console.log("no they are not");
}    
console.log(6/0 === 10/0);


const myobj = {
    car: "red",
    bike: "blue",
}

const myobj = {
    car: "red2",
    bike: "blue2",
}


const myobj2 = ["red","blue",{
    car: "red",
    bike: "blue",
}
]

let car = {} 
let cars = []


for(let i = 0; i< 10; i++){
    cars.push({
        car: "red",
        bike: "blue"
})
}

console.log(cars);