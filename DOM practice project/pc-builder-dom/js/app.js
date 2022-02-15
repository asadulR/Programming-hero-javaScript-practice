//  calculating item cost by clicking item and setting total cost as total price
function countCost(costId, price){
    //  click the item and set a price value
    const itemCost = document.getElementById(costId);
    itemCost.innerText = price;

    //  calculate the total cost
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = Number(bestPrice) + Number(memoryCost) + Number(storageCost) + Number(deliveryCost);
    
    //  set the total cost as the total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
}

//  clicking item to call the calculating function
function clickItem (clickId, itemCostId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        countCost(itemCostId, price)
    })
}

//  clicking memory items by calling function
clickItem('eightGB', 'memory-cost', 0);
clickItem('sixteenGB', 'memory-cost', 300);

//  clicking storage items by calling function
clickItem('ssd1', 'storage-cost', 0);
clickItem('ssd2', 'storage-cost', 200);
clickItem('ssd3', 'storage-cost', 300);


//  clicking delivery items by calling function

clickItem('free-delivery', 'delivery-cost', 0);
clickItem('paid-delivery', 'delivery-cost', 20);




//  apply promo code to get 10% 0ff

document.getElementById('apply-btn').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price');
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const totalPriceValue = Number(totalPrice.innerText);
    const discount = (totalPriceValue * 10) / 100;
    const discountPrice = totalPriceValue - discount;
    const worngCode = document.getElementById('worng-cupon');
    let cuponSuccess = document.getElementById('applied-text')
    const promoCode = 'AsadTanmin';
    if(promoInputValue === promoCode){
        totalPrice.innerText = discountPrice;
        document.getElementById('apply-btn').classList = 'd-none';
        cuponSuccess.classList = 'd-block'
        promoInput.value = '';
    }else if(promoInput !== promoCode){
        worngCode.classList = 'd-block text-danger'
    }
});