mediumZoom(".catalog__item_image", {
    margin: 100,
});

const dropDown = document.getElementById("dropDown");
const navDropdown = document.getElementsByClassName("nav__dropdown");
navDropdown[0].addEventListener("click", () => {
    dropDown.classList.toggle("nav__dropdown_active");
    navDropdown[0].classList.toggle("nav__dropdown_active");

});

const burger = document.getElementById("burger");
const navLinks = document.getElementsByClassName("nav__links")
burger.addEventListener("click", () => {
    burger.classList.toggle("burger__active");
    navLinks[0].classList.toggle("nav__links_active");

});


$(document).ready(function() {
    $('[data-modal=consultation]').on("click", function() {
        $(".overlay, #consultation").fadeIn();
    });
    $(".modal__close").on("click", function() {
        $(".overlay, #consultation, #thanks, #order").fadeOut();
    });
    $(".btn__buy").on("click", function() {
        $(".overlay, #order").fadeIn();
    });
    $(".btn__buy").each(function(i) {
        $(this).on("click", function() {
            $("#order .modal__subtitle").text($(".catalog__item_title").eq(i).text());
            $("#order .input__subtitle").text($(".catalog__item_title").eq(i).text());
        });
    });

});