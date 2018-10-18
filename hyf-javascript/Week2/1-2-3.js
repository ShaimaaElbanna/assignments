//1 Create a function that takes 3 arguments and returns the sum of the these arguments
function sum(a,b,c){
    return a + b + c
}
console.log(sum(7,8,9));


//2 Create a function named colorCar that receives a color, 
//and prints out, 'a red car' for example.
function colorCar(color){
  return  "a " + color + " car"
}
console.log(colorCar("blue"));

//3 Create an object and a function that takes the object as a parameter
// and prints out all of its properties and values.


const myobject = {      
    prop1: "cat",
    prop2: "dog",
    prop3: "lion",
    prop4: "tiger"
}
function function1(obj){
    console.log(obj)
}


function1(myobject);
