// Standard Carousel
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    updateCarousel();
}

function updateCarousel() {
    const carouselContent = document.querySelector('.carousel-content');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;

    carouselContent.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Tanmay Carousel
let currentIndexTanmay = 0;

function nextSlideTanmay() {
    currentIndexTanmay = Math.min(currentIndexTanmay + 3, 9);
    updateCarouselTanmay();
}

function prevSlideTanmay() {
    currentIndexTanmay = Math.max(currentIndexTanmay - 3, 0);
    updateCarouselTanmay();
}

function updateCarouselTanmay() {
    const tanmayContent = document.querySelector('.tanmay-content');
    const itemWidthTanmay = document.querySelector('.tanmay-item').offsetWidth;
    const translateValueTanmay = -currentIndexTanmay * itemWidthTanmay;

    tanmayContent.style.transform = `translateX(${translateValueTanmay}px)`;
}
   
 //Automatic carousel Siddharth
    $(document).ready(function(){
        $('#carousel-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });    

    //for button nadd cart
    let CartItems = [];

    function openCart() {
        alert("Cart Items: " + JSON.stringify(cartItems));
    }

    function addToCart(productName) {
        cartItems.push(productName);
        updateCartCount();
    }

    function updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems.length;
        }
    }

    // delete from cart button 
    let cartItems = [];

    function openCart() {
        alert("Cart Items: " + JSON.stringify(cartItems));
    }

    function addToCart(productName) {
        cartItems.push(productName);
        updateCartCount();
    }

    function deleteFromCart() {
        if (cartItems.length === 0) {
            alert("Cart is empty. Nothing to delete.");
            return;
        }

        const selectedProduct = prompt("Enter the product name to delete from the cart:");
        const index = cartItems.indexOf(selectedProduct);

        if (index !== -1) {
            cartItems.splice(index, 1);
            alert(selectedProduct + " deleted from the cart.");
            updateCartCount();
        } else {
            alert("Product not found in the cart.");
        }
    }

    function updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = cartItems.length;
        }
    }