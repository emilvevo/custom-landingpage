$(function() {
    const hamburgerBtn = $("#hamburger");
    const menuSection = $(".menu");

    hamburgerBtn.click(function() {
        menuSection.toggle(500);
    });
});