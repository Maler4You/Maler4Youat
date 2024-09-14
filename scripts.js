function initMap() {
    var location = { lat: 48.2004, lng: 15.6230 }; // Coordinates of your location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMap();

    // Reviews slider
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;
    setInterval(() => {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showNextReview() {
        reviews[currentReview].classList.remove('active');
        currentReview = (currentReview + 1) % reviews.length;
        reviews[currentReview].classList.add('active');
    }

    // Start the reviews slider
    setInterval(showNextReview, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-list > li');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
});
