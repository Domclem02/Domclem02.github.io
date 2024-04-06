document.getElementById("wordle").addEventListener("click", function() {
    setTimeout(function() {
        window.location.replace('https://www.nytimes.com/games/wordle/index.html');
    }, 100); // 100 milliseconds delay
});
document.getElementById("connections").addEventListener("click", function() {
    // Replace 'https://example.com' with the URL you want to redirect to
    setTimeout(function() {
        window.location.replace('https://www.nytimes.com/games/connections');
    }, 100); // 100 milliseconds delay
});