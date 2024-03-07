document.getElementById('emergencyButton').addEventListener('click', function() {
 // Show the modal
 document.getElementById('giphyModal').style.display = 'flex';

 // Display an alert after 2 seconds
 setTimeout(function() {
    alert('Love you');
 }, 1000);
});