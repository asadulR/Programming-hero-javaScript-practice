const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}

loadBuddies();

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddis');
    let count = 1;
    for(const buddy of buddies){
        console.log(buddy.name);
        const p = document.createElement('p');
        p.innerText = `${count}. Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}, Cell: ${buddy.cell},  Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
        count++

    }
}