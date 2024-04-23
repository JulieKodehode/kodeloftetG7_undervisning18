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
        
        // Set that the element 'li' have content from our looped through data
        newListItem.textContent = newTodoTask;
    }
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodoTask);

