document.addEventListener('DOMContentLoaded', function () {
  const authModal = document.getElementById('authModal');
  const openModalBtn = document.getElementById('sign-in-button-main');
  const authFormClose = document.querySelector('.auth-form-close');
  const signupLink = document.getElementById('signup-link');
  const signinLink = document.getElementById('signin-link');
  const signupForm = document.getElementById('signup-form');
  const signinForm = document.getElementById('signin-form');
  const submitButton = document.querySelector('.btn-sign-up');

  openModalBtn.addEventListener('click', function () {
    openAuthModal(authModal);
  });

  authFormClose.addEventListener('click', function () {
    authModal.style.display = 'none';
  });

  signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    updateButtonText('Sign up');
    signupForm.style.display = 'block';
    signinForm.style.display = 'none';
  });

  signinLink.addEventListener('click', function (event) {
    event.preventDefault();
    updateButtonText('Sign in');
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
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

    saveUserData(userData);

    authModal.style.display = 'none';

    this.reset();
  });

  function openAuthModal(modal) {
    modal.style.display = 'block';
  }

  function saveUserData(userData) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  }

  function updateButtonText(action) {
    if (submitButton) {
      submitButton.textContent = action;
    }
  }
});
