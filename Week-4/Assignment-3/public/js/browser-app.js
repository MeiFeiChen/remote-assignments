
// switch format of sign in/sign up 
function showHide(event) {
    const signupPage = document.querySelector('.signup_page');
    const loginPage = document.querySelector('.login_page');
    const signup = document.querySelector('.signup');
    const login = document.querySelector('.login');

    if (event.target.textContent === 'Sign In') {
        signupPage.style.display = "none";
        loginPage.style.display = "block";

        signup.style.fontWeight = "normal";
        login.style.fontWeight = "bold";

        signup.style.color = "#ccc";
        login.style.color = "#3D3D3D";
    } else {
        signupPage.style.display = "block";
        loginPage.style.display = "none";
        signup.style.fontWeight = "bold";
        login.style.fontWeight = "normal";

        signup.style.color = "#3D3D3D";
        login.style.color = "#ccc";
    }
}

function removeText() {
    const alert = document.querySelector('.form-alert')
    if (alert.textContent) {
        alert.textContent = ''
    }
}

