//your code here!
document.addEventListener("DOMContentLoaded", function () {
    const myList = document.getElementById("infi-list");
    let itemCounter = 3; // Start with 3 default items

    function addListItem() {
        const newItem = document.createElement("li");
        newItem.textContent = "Item " + (++itemCounter);
        myList.appendChild(newItem);
    }

    // Add 10 default list items
    for (let i = 0; i < 10; i++) {
        addListItem();
    }

    // Add 2 more items when the user reaches the end of the list
    myList.addEventListener("scroll", function () {
        if (myList.scrollTop + myList.clientHeight >= myList.scrollHeight) {
            addListItem();
            addListItem();
        }
    });
});

