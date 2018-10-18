//4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' 
//for example when called as vehicleType("blue", 2)
  
function vehicleType(color ,code){
    if(code == 1){
        console.log( color + " car");
    }
    else if(code == 2){
       console.log( color + " motorbike")
    }
    else{
        console.log("Invalid code\n enter 1 or 2 for result")
    }
}
vehicleType("red", 2)
vehicleType("black", 1)
vehicleType("blue", 5)

//5 Can you write the following without the if statement, 
//but with just as a single line with console.log(...);?

(3 === 3) ?  console.log("yes") :  console.log("no");
 console.log(3 === 3 ? "yes" :"no");


//6 - Create a function called vehicle, like before, but takes another parameter called age,
// so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color ,code, age){

    if(code == 1 && age > 0){
        console.log( "a " + color +  " used " + "car.");
    }
    else if(code == 2){
        (age <= 0)
       console.log( "a " + color +  " new " + " motorbike.")
    }
    else{
        console.log("Invalid code\n enter 1 or 2 for result")
    }
}
vehicle("red", 2 , 5)
vehicle("black", 1 ,0)
vehicle("blue", 5 ,4 )