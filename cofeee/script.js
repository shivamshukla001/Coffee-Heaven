// Toggle between login and register
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Register User
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem(email, JSON.stringify({ name, password, orders: [] }));
    alert('Registration successful! You can now login.');
    loginLink.click();
});

// Login User
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        localStorage.setItem('loggedInUser', email);

        // Redirect to the coffee website's home page
        window.location.href = 'index.html'; // Replace 'index.html' with the actual path of your coffee home page
    } else {
        alert('Invalid email or password!');
    }
});
