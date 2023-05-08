// ---------------------------Context Me
function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function(e) {
    e.preventDefault();
    alert(`Sorry Request cannot be accepted due to some technical errors`);
})


// ------------------------------------Star
// Get the canvas element and its context
const canvas = document.getElementById('star-canvas');
const context = canvas.getContext('2d');

// Set the canvas dimensions to match the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define variables for the stars
let numStars = 700;
let stars = [];

// Create a Star class to define the properties of each star
class Star {
    constructor(x, y, size, speed, opacity, directionX, directionY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = opacity;
        this.opacityDirection = -2;
        this.directionX = directionX;
        this.directionY = directionY;

    }

    // Define a method to draw the star on the canvas
    draw() {
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }

    // Define a method to update the position and opacity of the star
    update() {
        // Update the position of the star
        this.x -= this.speed;
        if (this.x < -this.size) {
            this.x = canvas.width + this.size;
        }

        // Update the opacity of the star
        this.opacity += this.opacityDirection * 0.01;
        if (this.opacity <= 0) {
            this.opacity = 0;
            this.opacityDirection = 1;
        } else if (this.opacity >= 1) {
            this.opacity = 1;
            this.opacityDirection = -1;
        }

        // Draw the star on the canvas
        this.draw();
    }
}

// Create a function to initialize the stars
function init() {
    // Create a loop to generate the stars
    for (let i = 0; i < numStars; i++) {
        // Generate random values for the star's properties
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2;
        let speed = Math.random() * 0.3 + 0.1;
        let opacity = Math.random() * 0.5 + 0.1;
        let directionX = Math.random() * 2 - 1;
        let directionY = Math.random() * 2 - 1;

        // Create a new star object and add it to the stars array
        let star = new Star(x, y, size, speed, opacity, directionX, directionY);
        stars.push(star);
    }
}

// Create a function to animate the stars
function animate() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each star
    for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        star.update();
    }

    // Call this function again on the next frame
    requestAnimationFrame(animate);
}

// Call the init function to generate the stars
init();

// Create a function to animate the stars
function animate() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each star
    for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        star.update();
    }

    // Call this function again on the next frame
    requestAnimationFrame(animate);
}

// Call the init function to generate the stars
init();

// Call the animate function to start the animation
animate();

// Add an event listener to resize the canvas when the window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Call the init function again to regenerate the stars
    stars = [];
    init();
});






jQuery(document).ready(function($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});