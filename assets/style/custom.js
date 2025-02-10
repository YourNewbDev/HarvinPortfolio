window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');

    if (window.scrollY > 5) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("click", function (event) {
    let navbar = document.querySelector(".navbar-collapse");
    let toggler = document.querySelector(".navbar-toggler");

    if (navbar && toggler && !toggler.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove("show");
    }
});

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    emailjs.sendForm("service_gnowg5k", "template_1jxysjv", this, "fveVn0nMZ9epMPE57")
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again later.");
        });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault(); // Prevents `#` from showing in URL
                targetSection.scrollIntoView(); // Jumps directly to the section

                // Updates the URL without `#`
                history.pushState(null, null, window.location.pathname);
            }
        });
    });
});

