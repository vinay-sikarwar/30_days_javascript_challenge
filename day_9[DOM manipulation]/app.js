// Activity 1 - Selecting and manipulating elements
//------------------------------------------------
// Task 1 - elect html element by its id and change its text content
const newBtn = document.getElementById('btn');
newBtn.textContent = 'I am new text and';

// Task 2 - select by class and change background color
document.querySelector('.old-bg').style.background = 'red';

// Activity 2 - Creating and Appending elements
//------------------------------------------------
// Task 3 - create a div and append to body
const newDiv = document.createElement('div');
newDiv.innerText = 'I was just created';
document.body.appendChild(newDiv);

// Task 4 - create li element and add it to ul
const newLi = document.createElement('li');
// newLi.id = 'Item3';
newLi.textContent = "Item 3";

const ul = document.querySelector(".list");
ul.appendChild(newLi);

// Activity 3 - Removing Elements
//------------------------------------------------
// Task 5 - select html element and remove from dom.
document.querySelector('.para').remove();

// Task 6 - remove last child
ul.lastChild.remove();

// Activity 4 - Modifying Attributes and classes
//------------------------------------------------
// Task 7 - 
const img = document.getElementById('Yt');
img.src = 'Gemini_Generated_Image_5l2siv5l2siv5l2s.jpg';

// Task 8 -
document.querySelector(".old-bg").style.background = 'purple';

// Activity 5 - Event Handling
//------------------------------------------------
// Task 9 -
const butn = document.querySelector('#butn');
butn.addEventListener("click", () => {
    document.querySelector('.newPara').innerHTML = 'I am a changed Paragraph';
});

// Task 10 -
butn.addEventListener('mouseover',() =>{
    butn.style.borderColor = 'red';
})
butn.addEventListener('mouseout',() =>{
    butn.style.borderColor = '';
})

//------------------------------------------------
            // Day-9 Task: completed
//------------------------------------------------
