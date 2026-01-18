const form = document.getElementById("signup-form")
const btn = document.getElementById("submit")
let input = document.getElementById("input-name")
let inputEm = document.getElementById("input-email")
let inputP = document.getElementById("input-pass")
let display = document.getElementById("live")
let p1 = document.getElementById("P1")
let p2 = document.getElementById("P2")
let p3 = document.getElementById("P3")

btn.addEventListener("click", function (e) {
    e.preventDefault()
    input.style.borderColor = ""
    inputEm.style.borderColor = ""
    inputP.style.borderColor = ""
    if (input.value == "") {
        input.style.borderColor = "red"
        p1.textContent = "username empty: At least 1 character required!"
        return
    }
    else if (!inputEm.value.includes("@")) {
        inputEm.style.borderColor = "red"
        p2.textContent = "Wrong email! include '@' in your email"
        return
    }
    else if (inputP.value.length < 8) {
        inputP.style.borderColor = "red"
        p3.textContent = "Incorrect password! At least 8 characters required"
        return
    }
    else {
        const userName = input.value
        const userEmail = inputEm.value
        const userPassword = inputP.value

        localStorage.setItem("userName", JSON.stringify(userName))
        localStorage.setItem("userEmail", JSON.stringify(userEmail))
        localStorage.setItem("userPassword", JSON.stringify(userPassword))
        input.value = ""
        inputEm.value = ""
        inputP.value = ""
        p1.textContent = ""
        p2.textContent = ""
        p3.textContent = ""
        display.textContent = "Sign-up Successfully!"
    }
}) 