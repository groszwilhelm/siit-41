console.log('main.js loaded');

const grades = [7.46, 9.17, 5.55, 6, 8.12];
grades.sort();
console.log(grades);


const persons = [
    {
        name: 'Ionescu Ana',
        grade: 7.46
    },
    {
        name: 'Adam Anda',
        grade: 9.17
    },
    {
        name: 'Pop Calin',
        grade: 5.55
    },
    {
        name: 'Pop Alin',
        grade: 8.12
    },
    {
        name: 'Cuza Alexandru',
        grade: 6.67
    },
    {
        name: 'Iancu Avram',
        grade: 7.87
    }
];

// iteration through the array
persons.forEach(a => console.log(a.grade));

// sort the persons by grade
persons.sort((a, b) => a.grade < b.grade ? -1 : a.grade > b.grade ? 1 : 0);
console.log(persons);

// randomize the elements
persons.sort(() => 0.5 - Math.random());
console.log(persons);

// filter the persons that have the grade grater than 7.00
const filteredPersons = persons.filter(a => a.grade >= 7)
console.log(filteredPersons);

// but be careful!
filteredPersons[0].grade = 1;
console.log(persons);

// shallow copy vs deep copy
const a1 = [1, 2, 3, 4];
const a2 = [...a1];
a2[0] = 1000;
console.log(a1);


