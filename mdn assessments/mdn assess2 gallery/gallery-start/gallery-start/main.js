const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Declaring the array of image filenames */
const images = [
    {src: "images/pic1.jpg"}, 
    {src: "images/pic2.jpg"}, 
    {src: "images/pic3.jpg"}, 
    {src: "images/pic4.jpg"}, 
    {src: "images/pic5.jpg"}];




/* Declaring the alternative text for each image file */

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.alt = image.alt;
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', ()=>{
        displayedImage.src = image.src;
        displayedImage.alt = image.alt
    })
}




/* Wiring up the Darken/Lighten button */
