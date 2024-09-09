
// This JavaScript class representing all of action on a shopping cart for an e-commerce application.

// declaration of the class
class ShoppingCart {
    //declaration of the default constructor
    constructor() {
        //the items will return an array
        this.items = [];
    }
    //Add an item in the items array
    addItem(item) {
        //push the item
        this.items.push(item);
    }
    //Delete an item out the items array
    removeItem(itemId) {
        //variable don't change is index of item in items array, find the idex of the item we want to delete and change item in item.id which is the same as itmeId
        const index = this.items.findIndex(item => item.id === itemId);
        // if index is negative
        if (index !== -1) {
            //index become 1
            this.items.splice(index, 1);
        }
    }
    //Calculate total of the items array
    calculateTotal() {
        // return price of items array will come to the number total of item and price of item.
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    //Apply a reduction on the price in percentage
    applyDiscount(percentage) {
        //declaration variable discontFactor with his calcul
        const discountFactor = 1 - percentage / 100;
        // Iterate through each item using forEach 
        this.items.forEach(item => {
            //Apply the discount factor to its price
            item.price *= discountFactor;
        });
    }
    // Returns the number of items currently in the items array
    getItemCount() {
        return this.items.length;
    }
}