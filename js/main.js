let mainImage = document.querySelector(".prod-details .images .mainImage");
let supImages = document.querySelectorAll(".prod-details .images .imgs img");
supImages.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;
    })
})