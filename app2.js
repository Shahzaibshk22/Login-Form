const Page = document.getElementById("Input-info")
const Form = document.getElementById("login-form")
const email = document.getElementById("input-email")
const pass = document.getElementById("input-pass")
const loginBtn = document.getElementById("login")
const p1 = document.getElementById("P2")
const p2 = document.getElementById("P3")


let Email = JSON.parse(localStorage.getItem("userEmail"))
let Pass = JSON.parse(localStorage.getItem("userPassword"))
loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    p1.textContent = ""
    p2.textContent = ""
    if (Email !== email.value) {
        email.style.borderColor = "red";
        p1.textContent = "Invalid Email address!";
    }
    else if (Pass !== pass.value) {
        pass.style.borderColor = "red";
        p2.textContent = "Incorrect Password!";
    }
    else {
        Form.remove()
        Page.innerText = "Login Successfully!";
        Page.style.display = "flex";
        Page.style.justifyContent= "center"
        Page.style.alignItems = "center";
        Page.style.fontWeight = "800";
        Page.style.color= "darkGreen";
        Page.style.fontSize= "30px";
    }
})