// Refactor the following function into a one-liner:
// const printName = (name) => {
//                      return “Hi” + name;
//            }
// Rewrite the following code using template literals
// const printBill = (name, bill) => {
//                      return “Hi “ + name + “, please pay: “ + bill;
//            }
// Modify the following code such that the object properties are destructured and logged.
// const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);

//one Liner
const printName=(name)=>(`Hi  ${name}`);
console.log(printName("Sivani"));

//template literal
const printBill = (name1, bill) =>(`Hi   ${name1}  , please pay:  ${bill}`);
console.log(printBill("Sivani",100));

//destructured and logged
const person = {
                         name3: 'Noam Chomsky',
                        age: 92
              }
    const {name3,age}=person;
    console.log(`Name of the person is ${name3} and age is ${age}.`);
