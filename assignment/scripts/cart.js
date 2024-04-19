console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item){
    basket.push(item);
    console.log("An item was added: ", item);
    return true;
}
addItem('bread');
addItem('grapes');
addItem('cereal');
addItem('water');


function listItems() {
    for (let i=0; i<basket.length; i++) {
console.log('Listed items: ', basket[i]);
}
}
listItems();

function empty(){
    while (basket.length > 0){
        basket.pop();
        console.log('Emptying the basket:', empty());
    }
}
empty();

const maxItems = 5; 
console.log('Max items: ', maxItems);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
