function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the About section by default on page load
document.addEventListener("DOMContentLoaded", function() {
    showSection('about');
});