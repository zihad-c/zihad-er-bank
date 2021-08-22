const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function () {
    const userName = document.getElementById('username');
    const userNameInputValue = userName.value;
    const password = document.getElementById('password');
    const passwordInputValue = password.value;
    if (userNameInputValue == "admin" && passwordInputValue == "password") {
        document.getElementById('error').style.display = "none";
        window.location.href = "banking.html";
    }
    else {
        document.getElementById('error').style.display = "block";
    }
    // return loginBtn;
})