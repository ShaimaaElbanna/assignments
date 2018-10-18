//7 - Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehiclesList = ["motorbike", "caravan", "bike", "van", "bus", "car"];


//8 - How do you get the third element from that list?
console.log(vehiclesList[2]);

//9 - Change the function vehicle to use the list of question 7. 
//So that vehicle("green", 3, 1) prints "a green new bike".

/* hard way
function vehicle(color ,code, age){
    if (code > vehiclesList.length){
        console.log("not here")
    }
    else{
    i = 0
    while (i <= vehiclesList.length){
        if (code == i){
            if (age > 0) {console.log( "a " + color +  " used " + vehiclesList[i])
            }
            else {console.log("A " + color + " new " + vehiclesList[i])
            }
        }
    i++
    }
}*/

function vehicle(color ,code, age){
    if (code > vehiclesList.length){
        console.log("not here")
    }
    else{
        if (age > 0) {console.log( "a " + color +  " used " + vehiclesList[code])
    }
    else {console.log("A " + color + " new " + vehiclesList[code])
    }
        
    }
}

vehicle("red", 3 , 5);
vehicle("blue", 1 , 0);
vehicle("blue", 9 , 0);
