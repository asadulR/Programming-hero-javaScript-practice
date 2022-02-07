const headerTitle = document.getElementById("first-title");
headerTitle.style.textAlign ="center";
headerTitle.style.color = "purple";




const secondTitle1 = document.getElementById("second-title1");
secondTitle1.style.textAlign = "center";
secondTitle1.setAttribute('title', 'I am adding a tooltip');




//  creating an element

const li = document.createElement('li');
li.innerText = 'Blog-5';

//  adding the element

const ul = document.getElementById('blog-list');

ul.appendChild(li);




//  adding an article as an element 

const article = document.createElement('article');
article.classList.add('blog');

// const h3 = document.createElement('h3');
// h3.innerText = 'My awesomew blog 5';

// const p = document.createElement('p');
// p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Totam similique rerum soluta hic qui ex, suscipit obcaecati tenetur.';


// article.appendChild(h3);
// article.appendChild(p);


//  Alternative way
article.innerHTML = `
<h3>My awesomew blog 5</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Totam similique rerum soluta hic qui ex, suscipit obcaecati tenetur.</p>
`


//  parent of article 

const blogSection = document.getElementById('blogs');
blogSection.appendChild(article);





//  style all article 
const blogs = document.getElementsByClassName("blog");
for(const blog of blogs){
    blog.style.border = "2px solid salmon";
    blog.style.padding ="10px";
    blog.style.margin = "10px";
    blog.style.borderRadius = "10px";
}
