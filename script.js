function startPreparation() {
    // Implement the logic for "Start Preparation" button here
    window.location.href = 'inAppBrowserPage.html'; // Example: Redirect to another page
}

function showAboutUs() {
    // Implement the logic for "About Us" button here
    window.location.href = 'explorePage.html'; // Example: Redirect to another page
}

// Get references to DOM elements
const webview = document.getElementById('webview');
const progress = document.getElementById('progress');

// Listen for iframe load events
webview.addEventListener('load', () => {
    // Hide the progress bar when the iframe is fully loaded
    progress.style.width = '100%';
    setTimeout(() => {
        progress.style.opacity = '0';
    }, 500);
});

// Update progress bar as the iframe loads
webview.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.style.width = percentComplete + '%';
    }
});

function launchURL(url) {
    // Function to open URLs in a new tab/window
    window.open(url, 'https://drive.google.com/drive/folders/1yGXSnCjddxFQboCLCTiHAOhIPDVEZeni?usp=sharing');
}
