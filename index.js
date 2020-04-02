// function discount(items) {
//   let disc = (items.price * items.discount)
//   let afterDisc = items.price - disc

//   return afterDisc
// }
// function price(items) {
//   let amount = discount(items) * items.price

//   return amount
// }

// function calculateTotal(items) {
//   let newItemsList = items.map(price, discount)

//   return newItemsList
// }
function price(items) {
  for (let i = 0; i < items.length; i++) {
    let disc = items[i].price * items[i].discount
    let discountedItem = items[i].price - disc
    let newPrice = discountedItem * items[i].quantity

    return newPrice
  }
}



function calculateTotal(items) {
  let total = items.map(items.total, price)
}




module.exports = calculateTotal