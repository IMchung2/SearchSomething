document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const searchInput = document.getElementById('searchInput').value;
    // Redirect to the RickRoll video
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});