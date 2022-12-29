

// Mouse Circle

const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");


const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});

// End of Mouse Circle


// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 100

const animateCircles = (e,x,y) => {

    if(x < mX){
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if(y < mY){
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if(y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX
    mY = e.clientY 

};

    // End of Animated Circles

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

     document.body.addEventListener("mousemove", (e) => {
        document.querySelectorAll(".experience-btn").forEach(
            (experience) => {
                experience.addEventListener("click", e => {
                    e.preventDefault();
                });
            }
        )
     })
      // End of Navigation

    // Section 2
      document.querySelectorAll(".experience-btn").forEach(
        (experience) => {
            experience.addEventListener("click", (e) => {
                e.preventDefault();

                const experienceText = experience.nextElementSibling;
                experienceText.classList.toggle("change");

                const rightPosition = experienceText.classList.contains("change") ? `calc(100% - ${getComputedStyle (experience.firstElementChild).width})`
                :0;

                experience.firstElementChild.style.right = rightPosition;

            });
        });
    // End of Section 2

    // Form Validation
    const form = document.querySelector(".contact-form");
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

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

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            checkRequiredFields([username, email, subject, message]);
        });
    }
    // End of Form Validation

    


    