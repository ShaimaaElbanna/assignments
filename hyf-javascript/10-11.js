//10 - Use the list of vehicles to write an advertisement. So that it prints something like:
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

<<<<<<< HEAD
//11What if you add one more vehicle to the list, can you have that added to the advertisement without
// changing the code for question 10?
vehiclesList.push("bordes");
=======
//11
vehiclesList.push("bord");
>>>>>>> 2906af9b08bf95b0f524b457f6d820079b9a66f5
console.log(advertisement());