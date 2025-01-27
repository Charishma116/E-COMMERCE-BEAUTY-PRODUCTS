document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('auth-form');
    const toggleLink = document.getElementById('toggle-login');
    
    let isLogin = false; // Default is signup
    
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      isLogin = !isLogin;
      form.querySelector('h1').textContent = isLogin ? 'Welcome Back!' : 'Create Your Account';
      form.querySelector('.btn').textContent = isLogin ? 'Log In' : 'Sign Up';
      toggleLink.textContent = isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Log In';
    });
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isLogin) {
        alert('Successfully logged in!');
      } else {
        alert('Successfully signed up!');
      }
    });
  });
  