// User Agent
let browserInfo = navigator.userAgent;
console.log(`User-Agent: ${browserInfo}`);

// Platform Info
let platformInfo = navigator.platform;
console.log(`Platform: ${platformInfo}`);

// Geolocation
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    }, error => {
        console.error('Error getting geolocation:', error);
    });
} else {
    console.error('Geolocation is not supported by this browser.');
}

console.log(`Screen width: ${screen.width}px`);
console.log(`Screen height: ${screen.height}px`);
console.log(`Available screen width: ${screen.availWidth}px`);
console.log(`Available screen height: ${screen.availHeight}px`);
console.log(`Color depth: ${screen.colorDepth} bits`);
console.log(`Pixel depth: ${screen.pixelDepth} bits`);


const headerElement = document.getElementById('header');
headerElement.textContent = 'Welcome to our Website!';