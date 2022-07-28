// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img")
;

let mX = 0;
let mY = 0;
const z = 50;
const i = 10;

const animateCircles = (e,x,y) => {
        if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${i}px`
    }

    if(x < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${i}px`;
    } else if(x > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`
    }

    mX = e.clientX;
    mY = e.clientY;
};
// End of Animated Circles

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    animateCircles(e,x,y);
    });

    // Main Button
    const mainBtn = document.querySelector('.main-btn');

    let ripple;

    mainBtn.addEventListener("mouseenter", (e) => {
        const left = e.clientX - e.target.getBoundingClientRect
        ().left;
        const top = e.clientY - e.target.getBoundingClientRect
        ().top;
       
        ripple = document.createElement('div');
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        mainBtn.prepend(ripple);
    });

    mainBtn.addEventListener("mouseleave", () => {
        mainBtn.removeChild(ripple);    
    })
    // End of Main Button

     // Navigation
     const menuIcon = document.querySelector(".menu-icon");
     const navbar = document.querySelector(".navbar");

     document.addEventListener("scroll", () => {
        menuIcon.classList.add("show-menu-icon");
        navbar.classList.add("hide-navbar");

        if(window.scrollY === 0) {
           menuIcon.classList.remove("show-menu-icon");
           navbar.classList.remove("hide-navbar"); 
        }
     });

     menuIcon.addEventListener("click", () => {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
     });
      // End of Navigation

    // Section 2
    document.querySelectorAll(".service-btn").forEach(
        (service) => {
            service.addEventListener("click", e => {
                e.preventDefault();
            
                const serviceText = service.nextElementSibling;
                serviceText.classList.toggle("change");

                const rightPosition = serviceText.classList.contains("change") ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
                :0;

                service.firstElementChild.style.right = rightPosition;
            });
        });
    // End of Section 2

    // Form Validation
    const form = document.querySelector(".contact-form");
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const messages = document.querySelectorAll(".message");

    const error = (input, message) => {
        input.nextElementSibling.classList.add("error");
        input.nextElementSibling.textContent = message;
    };

    const success = (input) => {
        input.nextElementSibling.classList.remove("error");
    };

    const checkRequiredFields = (inputArr) => {
        inputArr.forEach(input => {
            if(input.value.trim() === "") {
                error(input, `${input.id} is required`);
            } else {
                success(input);
            }
        });
    };

    form.addEventListener("submit", e => {
        e.preventDefault();

        checkRequiredFields([username, email, subject, message]);
    });
    // End of Form Validation

    


    