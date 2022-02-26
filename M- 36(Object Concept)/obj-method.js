//  accessing a property from object , creating function inside the object and make changes

const student ={
    name: 'Asadul',
    id: 101,
    money: 5000,
    major: 'Mathematics',
    isRich: false,
    subjects: ['English', 'Economics', 'Psychology', 'Calculus'],
    bestFriend: {
        name: 'Tanmin',
        subject: 'Political Science',
        isRich: true
    },
    takeExam: function(){
        console.log(this.name, 'Giving Exam')
    },

    treatDey: function(expence){
        this.money = this.money-expence;
        return this.money;
    }

}

student.takeExam();
console.log(student.treatDey(1500));
console.log(student.treatDey(3000));
// console.log(Object.keys(student.bestFriend));