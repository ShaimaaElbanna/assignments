//1 Consider the following string:
let myString = "hello,this,is,a,difficult,to,read,sentence";

//1.1 Add the string to your file and log it.
console.log (myString);

//1.2 Log the length of myString.
console.log (myString.length);

//1.3 a way to remove the commas from the string and replace them with spaces.
myString = myString.replace(/,/g," ");

//1.4
console.log (myString);