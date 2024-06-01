// Toggle sidebar when clicking the hamburger icon
const hamburgerIcon = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Example: Get course details from an API or database
function getCourseDetails() {
    // Make an API call or retrieve data from a database
    const courses = [
        {
            title: "PRAKTIKUM ELKA",
            code: "47-03",
            info: "RLK Laboratory",
            icon: "R"
        },
        // ... add more courses
    ];

    // Populate the content area with course cards
    const contentArea = document.querySelector('.content');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');

        // Add course details to the card
        // ... (use course.title, course.code, etc.)

        contentArea.appendChild(card);
    });
}

getCourseDetails(); // Call this function to populate the page