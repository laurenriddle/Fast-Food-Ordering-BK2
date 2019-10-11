const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
       this.orders.push(meal)
    },
    orders: [],
    getOrders: function () {
        return this.orders
    }

}


const chickenComboMeal = {
    sandwichType: "Chicken Sandwitch",
    fries: true,
    drinkSize: "Medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
console.log(restaurant.getOrders())
// Output all orders to the console using console.table()