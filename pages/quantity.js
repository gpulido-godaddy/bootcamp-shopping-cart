var removeItemButtons = getElementsByClassName('btn-danger')
console.log(removeItemButtons)
for (var i=0; i< removeItemButtons.length; i++){
    var button = removeItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

function updateTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = (priceElement.innerText.replace('$', ''))
        var quantity= quantityElement.value 
        console.log(price * quantity)
        total = total +(price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+ total