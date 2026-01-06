var colors = [
    "#b488f7",
    "#fca079",
    "#48c0c9"
];

function colorLinksRandomly() {
    // Get all anchor tags in the document
    var links = document.getElementsByTagName('a');
    
    // Iterate through each link
    for (var i = 0; i < links.length; i++) {
        // Pick a random color from the colors array
        var randomIndex = Math.floor(Math.random() * colors.length);
        var randomColor = colors[randomIndex];
        
        // Apply the color to the underline only
        links[i].style.textDecorationColor = randomColor;
        // Make the underline thicker
        links[i].style.textDecorationThickness = '2px';
    }
}

// Call the function when the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', colorLinksRandomly);
} else {
    // DOM is already loaded
    colorLinksRandomly();
}

