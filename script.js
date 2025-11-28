function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.opacity = 0;
        setTimeout(() => {
            sec.style.transition = "1s";
            sec.style.opacity = 1;
        }, 200);
    });
});
