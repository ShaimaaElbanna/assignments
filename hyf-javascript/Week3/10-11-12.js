//10 - Use the list of vehicles to write an advertisement. 
//So that it prints something like:
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
//. (Hint: use a for loop.)
//Hint, the output should be correct English with all the punctuation in place
// (that's the challenge). So plurals for the vehicle types, 
//commas followed by a single space, the word and to replace the final
// comma and closed off by a period.


let vehiclesList = ["motorbike", "caravan", "bike", "van", "bus", "car"];
function advertisement(){
    let adv = "Amazing Joe's Garage, we service ";
    for (i = 0; i < vehiclesList.length; i++){
        if(i == vehiclesList.length - 1)
        { adv += "and " + vehiclesList[i] + "s.";
        } else {
             adv += vehiclesList[i] + "s, "; 
            }
    }
    return adv;
}
console.log(advertisement());

//11
vehiclesList.push("bordes");
console.log(advertisement());