// teacher.js

function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
}

function editProfile() {
    // No specific function for profile picture
}

// Add an assignment
function addAssignment(event) {
    event.preventDefault();
    
    const title = document.getElementById('assignment-title').value;
    const deadline = document.getElementById('assignment-deadline').value;
    const details = document.getElementById('assignment-details').value;

    const assignmentHTML = `
        <div class="assignment">
            <h3>${title}</h3>
            <p>Deadline: ${deadline}</p>
            <p>Details: ${details}</p>
        </div>
    `;

    document.getElementById('assignments-list').innerHTML += assignmentHTML;

    // Clear form fields
    document.getElementById('assignment-form').reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    showTab('assignments'); // Show assignments tab by default
    document.getElementById('assignment-form').addEventListener('submit', addAssignment);
});
