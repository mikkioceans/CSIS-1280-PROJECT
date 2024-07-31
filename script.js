

// Hamburger 
let nav = document.querySelector("nav")
const Hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links");


Hamburger.addEventListener("click", () => {
    Hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    
   

})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    Hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))

imageSources = ["image1-microsoft.webp", "image2-amazon.jpg" , "image3-nvidia.jpg" , "image-4-meta.jpg" , "image-5-easports.webp","image-6-tesla.jpg"]
companiesImages = document.getElementById("Companies-Image")

let number = 0;

setInterval(function showingImages () {
    number++ ;
    companiesImages = document.getElementById("Companies-Image");
    if (number > imageSources.length - 1) {
        number = 0;
    }
    companiesImages.src = imageSources[number];
   
   
}, 1500)


