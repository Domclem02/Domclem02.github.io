document.getElementById("redirectButton").addEventListener("click", function() {
    // Replace 'https://example.com' with the URL you want to redirect to
    setTimeout(function() {
        window.location.replace('https://example.com');
    }, 100); // 100 milliseconds delay
});