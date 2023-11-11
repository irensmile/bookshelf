const body = document.querySelector("body");
const switcher = document.querySelector(".box-toggle");

switcher.addEventListener("click", changeTheme);

function changeTheme(event) {
    body.classList.toggle("dark-theme");
    // localStorage
}
 
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
