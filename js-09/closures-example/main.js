console.log('closures-example main.js is loaded...');

function pickStudent() {
    const students = [
        'Crina',
        'Daniel',
        'Corina',
        'Bogdan',
        'Florin'
    ];

    const picker = function(){
        const randomIndex = Math.floor(Math.random() * students.length);
        console.log(`The picked student is: ${students[randomIndex]}`);
    }

    return picker;
}

const studentPickerFnc = pickStudent();
studentPickerFnc();