
function buttonPress() {
    let userNameInput = document.getElementById('Usernames').value
    let passwordInput = document.getElementById('Passwords').value
    
    if (userNameInput === "" || passwordInput ===  "") {
        window.alert("Error Username or Password is EMPTY!");
    } else if (userNameInput.length <= 3 || passwordInput.length <= 3) {
        window.alert("Username or Password should be Longer than 3 Characters")
    } else if(userNameInput === "admin" && passwordInput === "root") {
        window.location.href = "home.html"
    }
    
}