// var rohanScore = [55];


// if(rohanScore >= 80) {
//     console.log("Congratulations! Rohan has got A+");

// }
// else if (rohanScore >= 70 && rohanScore < 80 ) {
//     console.log("Rohan has done a good job, He has got A");

// }
// else if (rohanScore >= 50 && rohanScore < 70) {
//     console.log("Rohan has got A- . Go Ahead!");
// }
// else if (rohanScore >= 40) {
//     console.log("Rohan has got B");
// }
// else if (rohanScore >= 33) {
//     console.log("Rohan is pase, He has got D");
// }else{
//     console.log("Rohan is faile");
// }






var tanmeenBangla = 100;
var tanmeenEnglish = 50;
var tanmeenMath = 200;
var tanmeenEconomics = 300;
var tanmeenPolitical = 200;
var tanmeenAgri = 50;
var tanmeenPsychology = 100;
var tanmeenIct = 500;
var tanmeenComputer = 1000;

var tanmeenTotalMarks = tanmeenBangla + tanmeenEnglish + tanmeenMath + tanmeenEconomics + tanmeenPolitical + tanmeenAgri + tanmeenPsychology + tanmeenIct + tanmeenComputer;
// console.log(tanmeenTotalMarks);
if (tanmeenTotalMarks > 2200){
    // console.log("Tanmeen has done a great job. She is great. She has got A+ .")
    if(tanmeenBangla >= 100){
        if(tanmeenEnglish >= 50){
            if(tanmeenMath >= 150){
                if(tanmeenEconomics >= 400){
                    console.log("You are great. You have got A+");
                } else{
                    console.log("You have got " + tanmeenEconomics + " in Economics");
                }
            }else{
                console.log("You have got " + tanmeenMath + " in Math");
            }
        }else{
            console.log("You have got " + tanmeenEnglish + " in English");
        }
    }else{
        console.log("You have got " + tanmeenBangla + " in Bangla");
    }
}else{
    console.log("you are faile madam sunduri");
}