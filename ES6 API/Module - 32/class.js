class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'Start a support session');
    }
}

const amir = new Support('Amir Khan', 'India');
console.log(amir);
amir.startSession();


const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

console.log(player.firstName);
