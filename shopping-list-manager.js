//Create an array

const shoppingList = ["Rice","Apples","Grapes","Peas","Oranges"]

//Task 1 : Display shopping list
//This function receives one item from the shopping list and prints it to the console.
function displayItems(item){
    console.log(item)
}
//forEach method loops through every item in the shoppingList array.
//For each item it calls the displayItems function.
shoppingList.forEach(displayItems)

//Task 2 : Add a new item

//This function adds Lemon to the end of the shoppingList array.
function addItem(item){
    shoppingList.push("Lemon")
}
//calls the addItem function.
addItem()
//displays the updated shoppingList.
console.log(shoppingList)

//Task 3 : Remove an item

//This function removes an item from the shoppingList array.
function removeItem(item){
    //find the index of the item in the array.
    const index = shoppingList.indexOf(item)

    //check if the item does not exist in the array.
    if(index === -1){
        console.log("Item not found!!")
    }
    //remove one item from the array at the found index.
    else{
        shoppingList.splice(index, 1)
        //displays a confirmation message.
        console.log(`${item} removed.`)
    }
}
//call function to remove Rice from the shoppingList.
removeItem("Rice")
//call function to remove Onions from the shoppingList.
removeItem("Onions")
//Display the updated shoppingList after attempting to remove the items.
console.log(shoppingList)

// Task 4 : Search for an item

//This function searches for an item in the array
function searchItem(item){
    //The includes()method checks whether an item exists in the array.
    //It returns true if the item is found and false if the item is not found.
    const search = shoppingList.includes(item)
    //Display the search result in the console.
    console.log(search)
}
//calls the searchItem function and passes "Oranges" as the item to search for.
searchItem("Oranges")

// Task 5 : Count the items

//The length property returns the total number of elements in the array.
const count = shoppingList.length
//Displays the total number of elements in the shoppingList array in the console.
console.log(count)

// Task 6 : Create a priority list

//Creates a new array containing only the first three items of the shoppingList array.
//The slice method extracts items without changing the original array.
const firstThreeItems = shoppingList.slice(0, 3)

//Displays the new array containing the first three items in the console.
console.log(firstThreeItems)
