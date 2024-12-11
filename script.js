let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.mobile-nav');
let cartIcon = document.querySelector('.cart-icon');
    let cartMain = document.querySelector('.cart-main');

let toggleMenu = ()=>{
    mobileNav.addEventListener('click', (event)=>{
        let clicked = event.target;
        if(clicked.classList.contains('hamburger')){
            mobileMenu.style.display = "flex";
        } else if(clicked.classList.contains('close-menu')){
            mobileMenu.style.display = "none";
        }
    })
}
toggleMenu();

// toggle cart open and close
let showCart = ()=>{
    cartIcon.addEventListener('click', ()=>{
        if(cartMain.style.display = "none"){
            cartMain.style.display = "block";
        }
        hideCart();
    })
}
showCart();

// hide cart
let hideCart = ()=>{
    cartIcon.addEventListener('click', ()=>{
        if(cartMain.style.display = "block"){
            cartMain.style.display = "none";
        }
        showCart();
    })
}
hideCart();


// lightbox and buttons
let lightBox = document.querySelector('.lightbox');
let product = document.querySelector('.product');
let lightImages = lightBox.querySelectorAll('.images-main .img-main');
let productImages = product.querySelectorAll('.images-main .img-main');
let prevBtn = lightBox.querySelector('.prev');
let nexBtn = lightBox.querySelector('.next');
let closeBtn = lightBox.querySelector('.close-lightbox');
let imgMain = product.querySelector('.images-main .show');
let emptyCart = document.querySelector('.empty-cart');
let loadedCart = document.querySelector('.loaded-cart');
let n = 0;

// controls
//open lightbox (){}
let openLightBox = ()=>{
    imgMain.addEventListener('click', ()=>{
        lightBox.style.display = "block";
        closeLightBox();
    })
}
openLightBox();
// close lightbox{}
let closeLightBox = ()=>{
    closeBtn.addEventListener('click', ()=>{
        lightBox.style.display = "none";
    })
}

// reset images
let prevMainImg = product.querySelector('.prev');
let nextMainImg = product.querySelector('.next');
let resetImgs = ()=>{
    for(let i=0; i<productImages.length; i++){
        productImages[i].style.display = 'none';
        productImages[n].style.display = 'block';
    }
}
/* resetImgs(); */

// product images controls
prevMainImg.addEventListener('click', ()=>{
    if(n > 0){
      n--;
    } else{
      n = productImages.length - 1;
    }
    resetImgs();
   })
   
   nextMainImg.addEventListener('click', ()=>{
    if(n < productImages.length - 1){
      n++;
    } else{
      n = 0;
    }
    resetImgs();
   })


let resetLightImgs = ()=>{
    for(let i=0; i<lightImages.length; i++){
        lightImages[i].style.display = 'none';
        lightImages[n].style.display = 'block';
    }
}
resetLightImgs();

// prevBtn ()
 prevBtn.addEventListener('click', ()=>{
  if(n > 0){
    n--;
  } else{
    n = lightImages.length - 1;
  }
  resetLightImgs();
 })
 
 nexBtn.addEventListener('click', ()=>{
  if(n < lightImages.length - 1){
    n++;
  } else{
    n = 0;
  }
  resetLightImgs();
 })

// add to shopping cart
let qtyTotal = document.querySelector('.items-main-total');
let qty = document.querySelector('.qty');
let incrementBtn = document.querySelector('.qty-plus');
let decrementBtn = document.querySelector('.qty-minus');
let addToCartBtn = document.querySelector('.addToCart-Btn');
let cartItems = document.querySelector('.cart-items');
let count = 0;

// increment
let increment = ()=>{
    incrementBtn.addEventListener('click', ()=>{
        count ++;
        qty.innerHTML = count;
        qtyTotal.innerHTML = count;
        addToCart();
    })
}
increment();
// decrement
let decrement = ()=>{
    decrementBtn.addEventListener('click', ()=>{
        count --;
        qty.innerHTML = count;
        qtyTotal.innerHTML = count;
        if(count <= 0){
            count = 1;
            qty.innerHTML = count;
        }
        addToCart();
    })
}
decrement();

// add to cart (){}
let addToCart = ()=>{
    addToCartBtn.addEventListener('click', (event)=>{
        let clicked = event.target;
        let row = clicked.parentElement.parentElement;
        let itemName = "Fall Limited Edition Sneakers";
        let qtyNum = row.querySelector('.qty').innerHTML;
        let itemPrice = row.querySelector('.price').innerHTML.replace('$', '');
        let newLi = document.createElement('li');
        newLi.classList.add('item');
        newLi.innerHTML = `
        <img src="images/image-product-1-thumbnail.jpg" alt="" class="item-img">
                <div class="item-details">
                  <span class="item-name">
                    ${itemName}
                  </span>
                  <div class="item-prices">
                    <span class="item-price">$${itemPrice}</span>
                    <span class="item-qty">x${qtyNum}</span>
                    <span class="item-total-price"></span>
                  </div>
                </div>
                <img src="images/icon-delete.svg" alt="" class="delete-btn">
        `;
        cartItems.appendChild(newLi);
        showLoadedCart();
        updateCart();
        deleteItem();
    })
}

// show empty cart or leaded cart
let showEmptyCart = ()=>{
    emptyCart.style.display = "block";
    loadedCart.style.display = "none";
}
let showLoadedCart = ()=>{
    emptyCart.style.display = "none";
    loadedCart.style.display = "block";
}

// update cart
let updateCart = ()=>{
    let qtyNum = document.querySelector('.item-qty').innerHTML.replace('x', '');
    let cartPrice = document.querySelector('.item-price').innerHTML.replace('$', '');
    let cartTotalPrice = document.querySelector('.item-total-price');
    let count = 0;
    let price = 0;

    price = price + (qtyNum * cartPrice);
    cartTotalPrice.innerHTML = `$${price}`;
    qtyTotal.innerHTML = qtyNum;
}

// delete item from cart
let deleteItem = ()=>{
    let deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (event)=>{
        let clicked = event.target;
        let row = clicked.parentElement;
        let rowParent = row.parentElement;
        rowParent.remove(row);
        showEmptyCart();
        updateCart();
        addToCart();
    })
}

// checkout
let checkOut = ()=>{
    let checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', (event)=>{
        let clicked = event.target;
        let row = clicked.parentElement;
        let cartItems = row.querySelector('.cart-items');
        let item = cartItems.querySelector('.item');
        cartItems.remove(item);
    })
}
checkOut();

// thumb active
let thumbActive = ()=>{
    let thumbs = document.querySelectorAll('.thumb');
    let mainImages = document.querySelectorAll('.img-main');
    // change active thumb
    thumbs.forEach((thumb)=>{
        thumb.addEventListener('click', ()=>{
            thumb.classList.add('thumb-active');
            thumbs.forEach((t)=>{
                if(t !== thumb){
                    t.classList.remove('thumb-active');
                }
            })
        })
    })
}
thumbActive();

let imageChange = ()=>{
    let thumbs = document.querySelectorAll('.product .thumbnails .thumb');
    // change main image
    thumbs.forEach((thumb)=>{
        let thumbClicked = thumb.id;
            let imgClicked = document.getElementById(`${thumbClicked}-img`);
            thumb.addEventListener('click', (event)=>{
                imgClicked.classList.add('show');
                
                // hide main image if it's thumb isn't clicked
                thumbs.forEach((t)=>{
                    let thumbNotClicked = t.id;
                    if(thumbNotClicked !== thumbClicked){
                        let imgNotClicked = document.getElementById(`${thumbNotClicked}-img`);
                        imgNotClicked.classList.remove('show');
                    }
                })
            })
        })
}
imageChange();