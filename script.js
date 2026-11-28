
// =========================
// 1. 모바일 메뉴 설정
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// =========================
// 2. 메뉴 클릭 시 자동 닫기
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================
// 3. 스크롤 애니메이션
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.1
});

sections.forEach(function (section) {

    observer.observe(section);

});
