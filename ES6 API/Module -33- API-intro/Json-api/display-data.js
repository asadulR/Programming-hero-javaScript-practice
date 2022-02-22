function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

function displayPosts(data) {
    const ul = document.getElementById('posts');
    for(const post of data){
        const li = document.createElement('li');
        li.innerText = `id: ${post.id}, title: ${post.title}`;
        ul.appendChild(li);
    }
}