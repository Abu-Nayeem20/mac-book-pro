
// Memory cost update
function memoryCost(is16Gb){
    const getMemoryField = document.getElementById('memory-cost');
    if(is16Gb == true){
        getMemoryField.innerText = 180;
    }
    else{
        getMemoryField.innerText = 0;
    }
}

// Storage cost update
function storageCost(gb){
    const getStorageField = document.getElementById('storage-cost');
    if(gb == '512gb'){
        getStorageField.innerText = 100;
    }
    else if(gb == '1tb'){
        getStorageField.innerText = 180;
    }
    else{
        getStorageField.innerText = 0;
    }
}

// Delivery Charge update
function deliveryCharge(isQuickDelivery){
    const getDeliveryField = document.getElementById('delivery-charge');
    if(isQuickDelivery == true){
        getDeliveryField.innerText = 20;
    }
    else{
        getDeliveryField.innerText = 0;
    }
}

// Total Price Update

function updateTotalPrice(){
    const previousPrice = 1299;
    const totalPriceField = document.getElementById('total-price');
    // Memory
    const getMemoryField = document.getElementById('memory-cost');
    const getMemoryPrice = parseFloat(getMemoryField.innerText);
    // Storage
    const getStorageField = document.getElementById('storage-cost');
    const getStoragePrice = parseFloat(getStorageField.innerText);
    // Delivery
    const getDeliveryField = document.getElementById('delivery-charge');
    const getDeliveryPrice = parseFloat(getDeliveryField.innerText);

    // Add all cost
    const newTotalPrice = previousPrice + getMemoryPrice + getStoragePrice + getDeliveryPrice;

    totalPriceField.innerText = newTotalPrice;

    // Update Final Total
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = newTotalPrice;
}


// Use Promo Code

document.getElementById('promo-code-button').addEventListener('click', function(){
    const getPromoInput = document.getElementById('promo-text');
    const getPromoInputText = getPromoInput.value;
    const totalPriceField = document.getElementById('total-price');
    const totalPrice = totalPriceField.innerText;

    const promoCode = 'stevekaku';
    if(getPromoInputText == promoCode){
        const discountPrice = (totalPrice / 100) * 20;
        const finalTotal = document.getElementById('final-total');
        finalTotal.innerText = totalPrice - discountPrice;
    }
    
    // Clear Input Field
    getPromoInput.value = '';

});


// Memory Button

document.getElementById('memory-8gb').addEventListener('click', function(){
    memoryCost(false);
    updateTotalPrice();
});

document.getElementById('memory-16gb').addEventListener('click', function(){
    memoryCost(true);
    updateTotalPrice();
});

// Storage Button
document.getElementById('storage-256gb').addEventListener('click', function(){
    storageCost('256gb');
    updateTotalPrice();
});

document.getElementById('storage-512gb').addEventListener('click', function(){
    storageCost('512gb');
    updateTotalPrice();
});

document.getElementById('storage-1Tb').addEventListener('click', function(){
    storageCost('1tb');
    updateTotalPrice();
});

// Delivery Charge Button

document.getElementById('delivery-free').addEventListener('click', function(){
    deliveryCharge(false);
    updateTotalPrice();
});

document.getElementById('delivery-quick').addEventListener('click', function(){
    deliveryCharge(true);
    updateTotalPrice();
});