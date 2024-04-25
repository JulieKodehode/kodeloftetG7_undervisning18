  /*
  - An event listner listening for a click on a button
  - Event listener activates a function that runs everytime the button is clicked
  - Get value data from the HTML input and save it in an array
  - Loop through the array and make an li-element for each item in the array
  - Sends the filled li-elements back to the div-element in HTML
  - Created a button that deletes the todo when finished
  */
    
    // Array without content
    const todoTasks = [];

    function addTodoTask() {
    event.preventDefault();
    
    // Gets the content value from the input element
    const taskInput = document.querySelector("#taskInput").value;

    // Fills the array with content from taskInput
    todoTasks.push(taskInput);

    // Checks if todoTask have content
    console.log(todoTasks);

    // HOW TO SOLVE ARRAY ISSUE: Set this variable getting the taskListContainer(div) outside for loop
    // Getting the div-element from the HTML
    const taskListContainer = document.querySelector("#taskListContainer");
    console.log(taskListContainer);

    // HOW TO SOLVE ARRAY ISSUE: Set the textContent of the taskListContainer as empty string
    taskListContainer.textContent = "";

    // Loops through our array and checks for new data
    for (
        let index = 0;
        index < todoTasks.length;
        index = index + 1
    ) {
        // Gets data from our loop using index to run trough whats inside our array
        const newTodoTask = todoTasks[index]

        // Create a new HTML-element 'li'
        const newListItem = document.createElement("li");
        console.log(newListItem);

        // Add a class to the new li-element
        newListItem.classList.add("taskListItem");
        
        // Set that the element 'li' have content from our looped through data
        newListItem.textContent = newTodoTask;

        // Created a new HTML-element
        const deleteButton = document.createElement("button");
        console.log(deleteButton);

        // Given the new element some text content
        deleteButton.textContent = "Delete todo";
        deleteButton.classList.add("deleteButton")

        // Added function to the new button-element
        deleteButton.addEventListener("click", function () {
            console.log("Click?")
            newListItem.remove();
            deleteButton.remove();

            // HOW TO SOLVE ARRAY ISSUE: with the method splice we remove something from the array. So in this instance we wish to delete the li, the button and the content from the array.
            todoTasks.splice(index, 1);
        })

        // Returns the newly created li-element to the div-element
        taskListContainer.appendChild(newListItem);

        // Returns the newly created button-element to the li-element
        newListItem.appendChild(deleteButton);
    }
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodoTask);

