// student.js

function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
}

function editProfile() {
    // No need to handle profile picture upload
}

// Populate content dynamically
function populateContent() {
    // Detailed Schedule Content
    document.getElementById('schedule-content').innerHTML = `
        <h2>After-School Schedule</h2>
        <ul>
            <li>5:00 PM - 6:00 PM: Physics Homework</li>
            <li>6:15 PM - 7:00 PM: Math Revision</li>
            <li>7:15 PM - 8:00 PM: English Reading</li>
            <li>8:15 PM - 9:00 PM: Science Project Work</li>
        </ul>
    `;

    // Homework Content
    document.getElementById('homework-content').innerHTML = `
        <ul>
            <li>Math: Complete exercises 1-20</li>
            <li>English: Read chapter 4</li>
            <li>Science: Write a report on plants</li>
        </ul>
    `;

    // Resources Content
    document.getElementById('resources-content').innerHTML = `
        <a href="https://students.tabbiemath.com/#/" target="_blank">Tabbie Math</a>
        <br>
        <a href="https://classroom.google.com/" target="_blank">Google Classroom</a>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    showTab('schedule'); // Show schedule tab by default
    populateContent();   // Populate all tab contents
});
