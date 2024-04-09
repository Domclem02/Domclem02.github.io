document.getElementById("wordle").addEventListener("click", function() {
    setTimeout(function() {
        window.location.replace('https://www.nytimes.com/games/wordle/index.html');
    }, 100); // 100 milliseconds delay
});
document.getElementById("connections").addEventListener("click", function() {
    setTimeout(function() {
        window.location.replace('https://www.nytimes.com/games/connections');
    }, 100); // 100 milliseconds delay
});
document.getElementById("strands").addEventListener("click", function() {
    setTimeout(function() {
        window.location.replace('https://www.nytimes.com/games/strands');
    }, 100); // 100 milliseconds delay
});
// script.js
document.getElementById("redirectButton").addEventListener("click", function() {
    // Replace 'https://example.com' with the URL you want to open in a new tab
    var newTab = window.open('https://nicholls.edu', '_blank');
    
    // Reference the original window and update its location
    if (window.opener) {
        window.opener.location.href = window.location.href; // Update the original window's location
    }
});