const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('menu-toggle');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});