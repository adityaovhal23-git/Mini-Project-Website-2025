// Modal functionality
const userIcon = document.getElementById('userIcon');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');

// Open modal when user icon is clicked
userIcon.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Tab switching functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding tab content
        if (btn.dataset.tab === 'login') {
            loginTab.style.display = 'block';
            signupTab.style.display = 'none';
        } else {
            loginTab.style.display = 'none';
            signupTab.style.display = 'block';
        }
    });
});

// Image slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize first slide
showSlide(0);

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = count;
}

// Add to your existing script.js
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            this.classList.toggle('active');
            const subdropdown = this.querySelector('.subdropdown');
            subdropdown.style.display = this.classList.contains('active') ? 'block' : 'none';
        }
    });
});
let wishlistCount = 0;
const wishlistCountElement = document.querySelector('.wishlist-count');

function updateWishlistCount(count) {
    wishlistCount = count;
    wishlistCountElement.textContent = count;
}

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const maleServices = document.getElementById('maleServices');
    const femaleServices = document.getElementById('femaleServices');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Show/hide services based on selection
            if (this.dataset.gender === 'male') {
                maleServices.style.display = 'grid';
                femaleServices.style.display = 'none';
            } else {
                maleServices.style.display = 'none';
                femaleServices.style.display = 'grid';
            }
        });
    });

    // Cart and Wishlist functionality
    const cartBtns = document.querySelectorAll('.cart-btn');
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');

    cartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add to cart logic
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            
            // Visual feedback
            this.style.background = '#ff69b4';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.background = '#f0f0f0';
                this.style.color = 'black';
            }, 500);
        });
    });

    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add to wishlist logic
            const wishlistCount = document.querySelector('.wishlist-count');
            let count = parseInt(wishlistCount.textContent);
            wishlistCount.textContent = count + 1;
            
            // Visual feedback
            this.style.background = '#ff69b4';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.background = '#f0f0f0';
                this.style.color = 'black';
            }, 500);
        });
    });

    // Book Expert Button Functionality
    const bookExpertBtns = document.querySelectorAll('.book-expert');
    
    bookExpertBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const expertName = this.closest('.member-info').querySelector('h3').textContent;
            const position = this.closest('.member-info').querySelector('.position').textContent;
            
            // You can customize this alert with a modal or form
            alert(`Booking appointment with ${expertName} (${position})`);
        });
    });

    // Animate team cards on scroll
    const teamCards = document.querySelectorAll('.team-card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });

    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const bookingForm = document.getElementById('bookingForm');
    const serviceNameInput = document.getElementById('serviceName');

    // Add to Cart and Wishlist functionality
    const cart = [];
    const wishlist = [];

    document.querySelectorAll('.cart-btn').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            cart.push(serviceName);
            alert(`${serviceName} has been added to your cart!`);
        });
    });

    document.querySelectorAll('.wishlist-btn').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            wishlist.push(serviceName);
            alert(`${serviceName} has been added to your wishlist!`);
        });
    });

    // Book Now functionality
    document.querySelectorAll('.book-service-btn').forEach((btn) => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            serviceNameInput.value = serviceName; // Set the service name in the modal
            bookingModal.style.display = 'block'; // Show the modal
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        bookingModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        alert(`Appointment booked for ${serviceNameInput.value} on ${bookingForm.appointmentDate.value} at ${bookingForm.appointmentTime.value}.`);
        bookingModal.style.display = 'none'; // Close the modal
        bookingForm.reset(); // Reset the form
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`; // Stagger the animation
    });
});


document.querySelectorAll('.book-expert').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.team-card');
        const expertName = card.querySelector('h3').innerText;
        const specialty = card.querySelector('.specialty').innerText;

        document.getElementById('expert').value = expertName;
        document.getElementById('specialty').value = specialty;

        document.getElementById('bookingModal').style.display = "block";
    });
});

// Get the modal
var modal = document.getElementById("bookingModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
    modal.style.display = "none"; // Close the modal after submission
});


// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData(this);

    // Send the form data using fetch
    fetch('submit_appointment.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or error message
        modal.style.display = "none"; // Close the modal after submission
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


function validateSignup() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format!");
        return false;
    }

    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registered successfully!");
    return true;
}

function validateLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Logged in successfully!");
    return true;
}


