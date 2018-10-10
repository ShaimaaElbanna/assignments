//2.1
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

//2.3 : 2.5
favoriteAnimals.shift();
favoriteAnimals.unshift("meerkat");
favoriteAnimals.unshift("blowfish");
console.log
("i think the new value of the Array will be : 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ");
console.log(favoriteAnimals);
//2.6
console.log("The array has a length of: " + favoriteAnimals.length);

//2.7 , 8
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

//2.9
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf("meerkat"));