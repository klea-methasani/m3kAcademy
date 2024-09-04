document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchBtn = document.getElementById('switchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');

    // Hide the signup form initially
    signupContainer.classList.add('hidden');

    // Array to store signup data
    const users = [];

    // Toggle between login and signup forms
    switchBtn.addEventListener('click', function() {
        if (signupContainer.classList.contains('hidden')) {
            loginContainer.classList.add('hidden');
            signupContainer.classList.remove('hidden');
            switchBtn.textContent = 'Switch to Login';
        } else {
            signupContainer.classList.add('hidden');
            loginContainer.classList.remove('hidden');
            switchBtn.textContent = 'Switch to Signup';
        }
    });

    // Clear all form fields
    clearBtn.addEventListener('click', function() {
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        document.querySelectorAll('select').forEach(select => {
            select.value = '';
        });
        document.getElementById('codingBackground').checked = false;
    });

    // Submit event listener for login form
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Check if email and password match any entry in the users array
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');
            // Clear login form fields after successful login
            document.getElementById('loginForm').reset();
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    // Submit event listener for signup form
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        // Perform signup validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
          // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format! Please enter a valid email address.');
        return;
    }
        // Add user data to the users array
        users.push({ email, password });
        alert('Signup successful!');
        // Clear signup form fields after successful signup
        document.getElementById('signupForm').reset();
    });
});