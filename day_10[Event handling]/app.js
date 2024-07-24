//------------------------------------------------
// Activity 1 -  Basic
// Task 1 -
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    document.querySelector('#para').textContent = "Working Hard";
});

// Task 2 -
const Image = document.querySelector('.adobe');
Image.addEventListener('dblclick', ()=>{
    Image.style.display = 'none';       //can be done by any of these two methods
    Image.style.visibility = 'visible';
})

//------------------------------------------------
// Activity 2 - Mouse Events
// Task 3 - 
const Box = document.querySelector('.box');
Box.addEventListener('mouseover',() =>{
    Box.style.background = 'gray';
})

// Task 4 -
Box.addEventListener('mouseout',() =>{
    Box.style.background = 'aqua';
})

//------------------------------------------------
// Activity 3 - Keyboard Events
// Task 5 - keydown: Fires when a key is first pressed down. This event is triggered for each key press, regardless of which key is pressed.
const inputBt = document.querySelector('#inpt');
inputBt.addEventListener('keydown', () => {
    console.log('keydown pressed!!');
});

// Task 6 - keyup: Fires when the key is released. This event also triggers each time a key is released.
inputBt.addEventListener('keyup', () => {
    console.log('keyup relised!!');
});
//------------------------------------------------
// Activity 4 - Form Events
// Task 7 - submit form 
// for this create form and add 'type' as submit at which you want to submit
const form = document.querySelector('#myform');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    alert('form submitted');
})

// Task 8 -
const dropdown = document.getElementById('dropdown');
const displayParagraph = document.querySelector('.displayParagraph');

// Add a change event listener to the dropdown
dropdown.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = dropdown.value;
    console.log(selectedValue);
    // Display the selected value in the paragraph
    displayParagraph.textContent = `Selected value: ${selectedValue}`;
});

0
// Activity 5 - Event Delegation
// Task 9 -
const itemList = document.querySelector('#itemList');
itemList.addEventListener('click', (event) =>{
    console.log(event.target.textContent);
})

// Task 10 -

newItem = document.createElement('li');
newItem.textContent = 'new Item';
itemList.appendChild(newItem);

//------------------------------------------------
            // Day-10 task: completed
//------------------------------------------------