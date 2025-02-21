function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (optional)
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Here, you can implement the logic to send the form data to your email
    // This typically involves using a server-side script or a third-party service

    // For demonstration purposes, we'll just log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);

::contentReference[oaicite:0]{index=0}
 
