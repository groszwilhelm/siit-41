console.log('main.js'); 

let nr = Math.floor(Math.random() * 6);

switch (nr) {
    case 0:
        console.log(`${nr} => Corina`);
        break;
        
        // case 1:
        //     console.log(`${nr} => Stefan`);
        //     break;
        
    case 1:
    case 2:
        console.log(`${nr} => Aniko`);
        break;
    
    case 3:
        console.log(`${nr} => Bogdan`);
        break;

    // 4, 5
    default:
        console.log(`${nr} => Adi`);
        break;
}


