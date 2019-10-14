const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
       this.orders.push(meal)
    },
    orders: [],
    getOrders: function () {
        console.log(this.orders)
    }

}


const chickenComboMeal = {
    sandwichType: "Chicken Sandwitch",
    fries: true,
    drinkSize: "Medium"
}

const cheeseburgerComboMeal = {
    sandwichType: "Double Cheeseburger",
    fries: false,
    drinkSize: "Large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(cheeseburgerComboMeal)


// Invoke the function to return the list of all orders
restaurant.getOrders()

// Output all orders to the console using console.table()
console.table(restaurant.orders)