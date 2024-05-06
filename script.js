"use strict"

// DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.

document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.getElementById('add-btn');
    const hideListButton = document.getElementsByTagName('button')[1]; //There are 2 buttons,and this returns the second button the document i.e. hide-button
    //Alternatively,you could have used document.getElementById('hide-btn');
    //OR  document.querySelectorAll('button')[1];

    // console.log(hideListButton);

    const itemInput = document.getElementById('item');
    const list = document.getElementById('list');
    const ul = document.querySelector('#list');
    

    addItemButton.addEventListener('click', function() {
        const newItemText = itemInput.value.trim();
        if (newItemText !== '') {
            const li = document.createElement('li');
            li.textContent = newItemText;
            list.appendChild(li);
            itemInput.value = ''; // Clear input field
            ul.classList.add('bordered');
            //OR  ul.style.border = '1px solid black';
        }
    });

    hideListButton.addEventListener('click', (event) => {
        if (list.style.display === "none") {
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    });
    
    // When an event occurs (e.g., a click, a keypress, a mouse movement), the browser creates an Event object and passes it to the appropriate event handler. The event.target property of this object points to the element where the event originated.

    // For example, if you click on a button, event.target will refer to the button element. If you click on a paragraph within a div, event.target will refer to the paragraph element.
    list.addEventListener('click', function(event) {
        console.log(event.target.tagName)
        if (event.target.tagName === 'LI') {
            event.target.remove();
            if (list.children.length === 0) {
                ul.classList.remove('bordered');
                //OR  ul.style.border =  "none"
            }
        }
    });

    // When a key is pressed while the focus is on the itemInput element, the event listener function is triggered.

    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItemButton.click();
        }
    });
});
