let header = ""

header += ` <div class="container d-flex align-items-center justify-content-between mb-2">
<div class="logo">
    <a href="index.html"> <img src="assets/image/logo.svg" alt="" class="img-fluid">
    </a>
</div>
<div class="menu">
    <ul class="d-flex align-items-center justify-content-between mb-0 fw-bold ">
        <li><a href="index.html" class="px-3 active-color">Home</a></li>
        <li><a href="shop.html" class="px-3 primary-color">Shop</a></li>
        <li><a href="#" class="px-3 primary-color">About</a></li>
        <li><a href="#" class="px-3 primary-color">Login</a></li>
        <li><a href="#" class="px-3 primary-color">Sign Up</a></li>
    </ul>
</div>
<div class="icon d-flex align-items-center justify-content-center ">
    <div class="wishlist px-3  ">
        <a href="#" class="position-relative">
            <img src="assets/image/icon-heart.svg" alt="heart" class="img-fluid">
            <span
                class="position-absolute  start-100 translate-middle text-center mt-1 rounded-circle count text-white fw-normal  ">0
            </span>
        </a>
        <a href="#" class="ps-2 grey-color fw-semibold ">Whislist</a>
    </div>
    <div class="cart px-3 ">
        <a href="cart.html" class="position-relative">
            <img src="assets/image/icon-cart.svg" alt="cart" class="img-fluid">
            <span
                class="position-absolute  start-100 translate-middle text-center mt-1 rounded-circle count text-white fw-normal  " id="count">0
            </span>
        </a>
        <a href="cart.html" class="ps-2 grey-color fw-semibold ">Cart</a>
    </div>
    <div class="account px-3 ">
        <a href="#" class="position-relative">
            <img src="assets/image/icon-user.svg" alt="heart" class="img-fluid">
        </a>
        <a href="#" class="ps-2 grey-color fw-semibold ">Account</a>
    </div>
</div>
</div>
<div class="header-bar">
            <div class="container d-flex justify-content-center  align-items-center ">
                <p class="m-0 p-2 text-white fw-semibold " style="font-size: 13px;">Everyday fresh products</p>
                <p class="m-0 p-2 text-white fw-semibold " style="font-size: 13px;">Free delivery for order over $70</p>
                <p class="m-0 p-2 text-white fw-semibold " style="font-size: 13px;">Daily Mega Discounts</p>
                <p class="m-0 p-2 text-white fw-semibold " style="font-size: 13px;">Best price on the market</p>
            </div>
        </div>`

document.getElementById('header').innerHTML = header

function Count(){
    var cart = JSON.parse(localStorage.getItem("cart"));
    document.querySelector('#count').innerText = cart.length
}
Count()
function deleteData(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(id, 1)
    localStorage.setItem('cart', JSON.stringify(cart));
    userinfo()
    Count()
}

function plusData(id){
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart[id].qty++  
    localStorage.setItem('cart', JSON.stringify(cart));
    userinfo()

}
function minusData(id){
    const cart = JSON.parse(localStorage.getItem("cart"));
    if(cart[id].qty>0){
        cart[id].qty-- 
        if(cart[id].qty==0){
            deleteData() 
        } 
    }
    
    userinfo()
    
    localStorage.setItem('cart', JSON.stringify(cart));
}
