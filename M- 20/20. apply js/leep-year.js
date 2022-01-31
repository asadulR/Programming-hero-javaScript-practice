//     wrong

// function isLeep(year){
//     if(year % 4 === 0){
//         if(year % 100 === 0){
//             if(year % 400 === 0){
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     }else{
//         return false;
//     }
// }

// let isLeepYear = isLeep(2040);
// console.log(isLeepYear);

//    wrong 


// function isLeep(year){
//     if (year % 4 === 0){
//         if(year % 100){
//             if(year % 400){
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     }else{
//         return false;
//     }
// }

// let isLeepYear = isLeep(2100)
// console.log(isLeepYear);

//      Right

function isLeep(year){
    if(year % 4){
        if(year % 100){
            if(year % 400){
                return 'Leep Year'
            }else{
                return 'Not a Leep Year';
            }
        }else{
            return 'Leep Year';
        }
    }else{
        return 'Not a Leep Year';
    }
}

let isLeepYear = isLeep(2100);
console.log(isLeepYear);