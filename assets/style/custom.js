window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 5) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("click", function (event) {
    let navbar = document.querySelector(".navbar-collapse");
    let toggler = document.querySelector(".navbar-toggler");

    if (navbar && toggler && !toggler.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector(".navbar").offsetHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight - 2; // Adjusting offset
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });

                // Updates the URL without `#`
                history.pushState(null, null, window.location.pathname);
            }
        });
    });
});

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let form = this;
    let submitButton = form.querySelector("button[type=submit]");

    // Disable the entire form
    Array.from(form.elements).forEach(element => element.disabled = true);
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;

    emailjs.sendForm("service_gnowg5k", "template_1jxysjv", form, "fveVn0nMZ9epMPE57")
        .then(() => {
            setTimeout(() => {
                let successModal = new bootstrap.Modal(document.getElementById("successModal"));
                successModal.show();

                // Reset the form fields
                form.reset();

                // Re-enable the form
                Array.from(form.elements).forEach(element => element.disabled = false);
                submitButton.innerHTML = "Send Message";
            }, 1000);
        })
        .catch(() => {
            let errorModal = new bootstrap.Modal(document.getElementById("errorModal"));
            errorModal.show();

            // Re-enable the form
            Array.from(form.elements).forEach(element => element.disabled = false);
            submitButton.innerHTML = "Send Message";
        });
});
