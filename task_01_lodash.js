const _ = require('lodash');


const members = [
    {name: 'Aman Makhija', age: 20},
    {name: 'Himanshu Jangid', age: 40},
    {name: 'Vijay Sahu', age: 41},
    {name: 'Rakesh Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Kartik Dhwan', age: 45},
    {name: 'Hardik Dhawan', age: 51}
  ];


  // Get array of first names of everyone
  const firstNames = members.map(member => _.split(member.name, ' ')[0]);
  console.log(firstNames);

  //Make everyone's last names in UPPERCASE in given array of objects
  const updatedMembers = members.map(member => {
    if(_.includes(member.name, ' ')){
        const [firstName, lastName] = _.split(member.name, ' ');
        return{...member, name: `${firstName} ${_.toUpper(lastName)}`};
    }
  })

  console.log(updatedMembers);

  //Get entries where age is between 41-60

  /* const age_result = members.map(member => {
    if(member.age >= 41 && member.age <= 60){
        return{...member};
    }
  })

  console.log(age_result); */

const age_result = _.filter(members, member => member.age >= 41 && member.age <= 60);
console.log(age_result);

//average age
/* const averageAge = _.meanBy(members, member => member.age || 0);
console.log(averageAge); */

const membersWithAge = members.filter(member => _.has(member, 'age'));
const averageAge = _.meanBy(membersWithAge, 'age');
console.log(averageAge);

// maximum age
const maxAge = _.maxBy(members, 'age');
console.log(maxAge);

//divide persons in three groups
const groupedMembers = _.reduce(
    members,
    (result, member) => {
        if (!_.has(member, 'age')){
            result.noage.push(member);
        }else if (member.age < 35){
            result.young.push(member);
        }else {
            result.old.push(member);
        }
        return result;
    },
    {young: [], old: [], noage: []}
);

console.log(groupedMembers);

//add a new object at index 2 in array
/* const newObj = [{name:'Abhimanyu Meel', age:22}];
const newMembers = _.concat(newObj, ...members);
console.log(newMembers); */

const newObj = {name: 'Abhimanyu Meel', age: 22};
const insertIndex = 2;
const newMembers = _.concat(_.slice(members, 0 , insertIndex), newObj, _.slice(members, insertIndex));
console.log(newMembers);

//extract first and second element using destructuring
const [first, second] = members;

console.log(first);
console.log(second);

//Extract properties of object using destructuring
const namesAndAges = members.map(({ name, age }) => ({ name, age }));
console.log(namesAndAges);

//Rename extracted property of object while destructing
const renamedMembers = members.map(({ name: fullName, age: memberAge }) => ({ fullName, memberAge}));
console.log(renamedMembers);

//Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const updatedMember = _.assign({name: 'Abhimanyu Meel', age: 22}, { age: 21});
console.log(updatedMember);

//reduce function
const sumOfAge = _.reduce(newMembers, 
    (accumulator, member) => {
        if(member.age != undefined){
            return accumulator + member.age;
            }
            return accumulator;
    }, 0
);

console.log(sumOfAge);