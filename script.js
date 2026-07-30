// =============================
// FILTER BUTTONS
// =============================

function filterSelection(category) {

    const items = document.querySelectorAll(".portfolio-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (event) {
        event.target.classList.add("active");
    }

    items.forEach(item => {

        if (category === "all") {

            item.style.display = "block";

        } else {

            if (item.classList.contains(category)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        }

    });

}

// =============================
// IMAGE LIGHTBOX
// =============================

const images = document.querySelectorAll(".zoom-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.querySelector(".close-lightbox");

images.forEach(image => {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImg.src = this.src;

    });

});

close.onclick = function () {

    lightbox.style.display = "none";

}

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display="none";

    }

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});
