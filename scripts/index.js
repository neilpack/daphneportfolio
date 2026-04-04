document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Remove 'active' class from all buttons and content boxes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');
            
            // Find the target content ID and make it active
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Scroll to the top of the page smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});