const imagesSrc = ["images/s-1.jpg", "images/s-2.jpg", "images/s-3.jpg", "images/s-4.png", "images/s-5.png", "images/s-6.png", "images/s-7.jpg", "images/s-8.jpg", "images/s-9.jpg", "images/s-10.jpg", "images/s-11.jpg", "images/s-12.jpg", "images/s-13.jpg"];


const image = document.getElementById('image');


let imageSrcIndex = 0;

setInterval(() => {
    imageSrcIndex++;
    if(imageSrcIndex >= imagesSrc.length){
        imageSrcIndex = 0;
    }
    const imageUrl = imagesSrc[imageSrcIndex];
    image.setAttribute('src', imageUrl);
    
}, 3000);