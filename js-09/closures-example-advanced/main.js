console.log('closures-example main.js is loaded...');

function studentPicker() {
    const students = [];

    const addStudent = function(newStudent){
        students.push(newStudent);
    }

    const pickStudent = function(){
        const randomIndex = Math.floor(Math.random() * students.length);
        console.log(`The picked student is: ${students[randomIndex]}`);
    }

    const listStudents = function(){
        console.log(students);
    }

    return {
        addStudent,
        pickStudent,
        listStudents
    };
}

const picker = studentPicker();
