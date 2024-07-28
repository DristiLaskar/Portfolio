document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var closeBtn = document.getElementById('close-btn');
    var navLinks = document.getElementById('nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('show');
    }

    hamburger.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});
