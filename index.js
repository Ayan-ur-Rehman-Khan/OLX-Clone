
async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let { products } = data;
    let cardContainer = document.getElementById("cards");

    products.forEach(product => {
        let { title, description, price, images } = product;

        let card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${images[0]}" alt="Product Image">
            </div>
            <div class="product-details">
                <h2 class="product-title">${title}</h2>
                <div class="product-rating">★★★★☆ (12,345)</div>
                <div class="product-price">
                    $${price}
                    <small>$59.99</small>
                </div>
                <p class="product-description">${description}</p>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

getData();

const model = document.getElementById("model")
const loginbtn = document.getElementById("log")
const main = document.getElementById("main")
const log2 = document.getElementById("log2")
const profile = document.getElementById("profile")
const avatar = document.getElementById("avatar")
const logout = document.getElementById("logoutBtn")
const username = document.getElementById("profile-name")
const useremail = document.getElementById("profile-email")
const info = document.getElementById("info")

loginbtn.onclick = () => {
    model.style.display = "block"
    model.style.zIndex = "9999"
    model.style.position = "fixed"
    main.style.display = "none"
}

log2.onclick = () => {
    model.style.display = "none"
    main.style.display = "block"
    loginbtn.style.display = "none"
    avatar.style.display = "block"



}

logout.onclick = () => {
    avatar.style.display = "none"
    loginbtn.style.display = "block"
}



class Person {
    fullName
    email
    password
    constructor(fullName, email, password) {
        this.fullName = fullName,
            this.email = email,
            this.password = password
    }
}

let users = []
let userName = document.getElementById("username")
let userEmail = document.getElementById("useremail")

function registerUser(event) {
    event.preventDefault()
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let savedUser = usersFromStorage.find((element) => element.email === email.value)

    if (savedUser?.email) {
        alert("user already register he ")
    } else {
        let newUser = new Person(fullName.value, email.value, password.value)
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
    }

    fullName.value = ""
    email.value = ""
    password.value = ""
}


function loginUser(event) {
    event.preventDefault()
    let email = document.getElementById("loginEmail")
    let password = document.getElementById("loginPassword")
    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let savedUser = usersFromStorage.find((element) => element.email === email.value)

    if (savedUser?.email === email.value && savedUser?.password === password.value) {
        alert("you have logged in successfully!")
        localStorage.setItem("loggedinUser", JSON.stringify(savedUser))
        // userName.innerHTML = savedUser.fullName
        // userEmail.innerHTML = savedUser.email
        avatar.style.display = "block"
        // document.getElementById("profile-name").innerText = savedUser.fullNamename;
        // document.getElementById("profile-email").innerText = savedUser.email;
        username.innerHTML = savedUser.fullName
        useremail.innerHTML = savedUser.email
        console.log(savedUser.fullName)

    } else {
        alert("Invalid credientials")
    }

}

function logoutUser() {
    localStorage.removeItem("loggedinUser")
    username.innerHTML = ''
    useremail.innerHTML = ''

}


