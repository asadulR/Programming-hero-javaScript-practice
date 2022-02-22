function loadNewPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => displayPosts(value))
}

function displayPosts(value){
    const ul = document.getElementById('posts');
    for(const post of value){
        const li = document.createElement('li');
        li.innerText = `title: ${post.title}`
        ul.appendChild(li);
    }
}

