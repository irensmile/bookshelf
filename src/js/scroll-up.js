const scrollUpButton = document.querySelector(".scroll-up-btn");

scrollUpButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

window.addEventListener("scroll", e => {

    if (scrollY >= 220) {
        scrollUpButton.classList.remove("hide");
    } else {
        scrollUpButton.classList.add("hide");
    }
});