// Select the menu toggle and menu items
const menuToggle = document.getElementById('mobile-menu');
const menuItems = document.querySelector('.menu-items');

// Add click event listener to the menu toggle
menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active'); // Toggle the 'active' class
});