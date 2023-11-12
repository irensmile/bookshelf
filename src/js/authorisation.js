document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('sign-in-button-main');
    const authModal = document.getElementById('authModal');
    const authFormClose = document.querySelector('.auth-form-close');
    const signupLink = document.getElementById('signup-link');
    const signinLink = document.getElementById('signin-link');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
  
    openModalBtn.addEventListener('click', function () {
      authModal.style.display = 'block';
    });
  
    authFormClose.addEventListener('click', function () {
      authModal.style.display = 'none';
    });
  
    signupLink.addEventListener('click', function () {
      signinForm.style.display = 'none';
      signupForm.style.display = 'block';
    });
  
    signinLink.addEventListener('click', function () {
      signupForm.style.display = 'none';
      signinForm.style.display = 'block';
    });
  
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const userData = {
        name,
        email,
        password,
      };
  
      const userDataJSON = JSON.stringify(userData);
  
      localStorage.setItem('userData', userDataJSON);
      this.reset();
    });
  });
  
   