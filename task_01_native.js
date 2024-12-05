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
let firstNames = [];

for( let i in members){
   const names = members[i].name.split(' ')[0];
   firstNames.push(names);
}

console.log(firstNames);

//Make everyone's last names in UPPERCASE in given array of objects

for (let i in members){
    if (members[i].name.includes(' ')){
        const [firstName, lastName] = members[i].name.split(' ');
        members[i].name = ` ${firstName} ${lastName.toUpperCase()}`;
    }
}

console.log(members);

//Get entries where age is between 41-60

const age_result = [];
for(let i in members){
    if(members[i].age >=41 && members[i].age <= 60){
        age_result.push(members[i]);
    }
}
console.log(age_result);

//Get average age

let totalAge = 0;
let count = 0;

for( let i in members){
    if(members[i].age){
    totalAge += members[i].age;
    count++;
    }
}

const averageAge = count > 0 ? totalAge / count : 0;
console.log(averageAge);

//Get Person with maximum age

let maxAgePerson = null;
let maxAge = -Infinity;

for( let i in members){
    if(members[i].age > maxAge){
        maxAge = members[i].age;
        maxAgePerson = members[i];
    }
}

console.log(maxAgePerson);


//Divide persons in three groups
let persons = {
    young: [],
    old: [],
    noage: []
};


for( let i in members){
    if(members[i].age < 35){
        persons.young.push(members[i]);
    }else if(members[i].age > 35){
        persons.old.push(members[i]);
    }else {
        persons.noage.push(members[i]);
    }
}

console.log(persons);

//add a new member to same members array instance at index 2
members.splice(2,0, {name:'Abhimanyu Meel', age: 22});
console.log(members);


//extract first and second element using destructing
const [first, second] = members;

console.log(first);
console.log(second);


// Extract properties of object using destructuring
const namesAndAges = members.map(({ name, age }) => ({ name, age }));
console.log(namesAndAges);

//Rename extracted property of object while destructing

const renamedMembers = members.map(({ name: fullName, age: memberAge }) => ({ fullName, memberAge}));
console.log(renamedMembers);

// Destructure any property of an object and use spread operator to get remaining properties in an object

const {name, ...rest} = members;
console.log(name);
console.log(rest);


//Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step

const updatedMembers = members.map(member => 
    member.name === 'Abhimanyu Meel' ? {...member, age: 21} : member
);

console.log(updatedMembers);

//reduce function

const sumOfAge = members.reduce((accumulator, member) => {
    if(member.age != undefined){
    return accumulator + member.age;
    }
    return accumulator;
}, 0);

console.log(sumOfAge);