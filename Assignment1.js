//pass one function as a param to another function question 1
function add(a,b){
 return a+b;
}
function multiply(a,b,add){
    return a*b+add(a,b);
}
console.log(multiply(7,8,add));

//Arrow Function question 2
let result=(firstName,lastName)=>firstName.charAt(0)+lastName.charAt(0);
console.log("Result of arrow function is "+result("Roger","Waters"));
