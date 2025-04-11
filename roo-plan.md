```markdown
# Roo Code Execution Plan: Simple To-Do List App

**Concise Goal:** Create a simple, client-side To-Do list web application using HTML5, CSS3, and Vanilla JavaScript. Implement core features: adding tasks via text input, viewing the task list, toggling task completion status (visually distinct), deleting tasks, and persisting the task list using the browser's Local Storage API. Ensure user input is sanitized to prevent XSS, target modern web browsers, and provide a basic, functional user interface.

1.  <switch_mode>lead-developer</switch_mode>

## Phase 1: Setup and Basic Structure

2.  <new_task>
    <mode>frontend-developer</mode>
    <message>
    {
        "goal": "Create initial project files (.gitignore, index.html, style.css, script.js, README.md) and implement the basic HTML structure and minimal CSS styling for the To-Do app UI.",
        "contextSummary": "Project requires a client-side To-Do app. Key UI elements needed: text input for new tasks, an 'Add Task' button, and an area to display the task list. Initial file structure: [.gitignore, index.html, style.css, script.js, README.md]. Basic styling needed for layout and usability.",
        "detailedInstructions": "1. Create a standard `.gitignore` file for Node/web projects.\n2. Create `index.html`:\n    - Basic HTML5 boilerplate.\n    - Include a `<title>` (e.g., 'Simple To-Do List').\n    - Link to `style.css` and `script.js`.\n    - Create main UI elements:\n        - An `<h1>` heading (e.g., 'My To-Do List').\n        - A `div` container for input: an `<input type=\"text\" id=\"task-input\" placeholder=\"Enter new task...\">` and a `<button id=\"add-task-btn\">Add Task</button>`.\n        - An unordered list element (`<ul id=\"task-list\"></ul>`) to hold the tasks.\n3. Create `style.css`:\n    - Add basic styling for body, input field, button, and the task list area for clarity and layout.\n    - Include a style rule for completed tasks (e.g., `.completed { text-decoration: line-through; color: grey; }`).\n4. Create an empty `script.js` file.\n5. Create an empty `README.md` file (content will be added later).\n6. Adhere to `.clinerules` and `.clinerules-code` development standards.",
        "toolNotes": "Use MCP filesystem tools for file creation and writing. Ensure HTML input/button elements have the specified IDs for JS interaction.",
        "completionCriteria": "All specified files (.gitignore, index.html, style.css, script.js, README.md) are created. index.html contains the basic structure. style.css contains basic rules including '.completed'. script.js and README.md are initially empty. Use `attempt_completion` with a summary like 'Initial project files and basic HTML/CSS structure created.'"
    }
    </message>
    </new_task>

## Phase 2: Core Feature Implementation (JavaScript)

3.  <new_task>
    <mode>frontend-developer</mode>
    <message>
    {
        "goal": "Implement the core JavaScript logic in `script.js` for the To-Do application, including task management (add, toggle, delete), local storage persistence, and DOM rendering/updates.",
        "contextSummary": "Core logic involves loading tasks from Local Storage, saving tasks, rendering tasks to the DOM (using `textContent` to prevent XSS), adding new tasks, toggling task completion, deleting tasks, and initializing the app on DOM load. Event delegation is recommended for task list interactions. Key functions outlined in analysis: `loadTasks`, `saveTasks`, `renderTasks`, `addTask`, `toggleTaskComplete`, `deleteTask`, Initialization.",
        "detailedInstructions": "1. Implement the `script.js` logic within a `DOMContentLoaded` event listener.\n2. Define the application state array (e.g., `let tasks = []`).\n3. Implement `loadTasks()`: Retrieve and parse task data from Local Storage (key: `todoAppTasks`). Handle cases where no data exists or data is invalid. Return an array.\n4. Implement `saveTasks(tasksArray)`: Stringify the provided task array and save it to Local Storage (key: `todoAppTasks`).\n5. Implement `renderTasks(tasksArray, taskListElement)`:\n    - Clear the existing list content (e.g., `taskListElement.innerHTML = '';`).\n    - Iterate through `tasksArray`.\n    - For each task, create list item (`<li>`) with a `data-task-id` attribute (use `task.id`).\n    - Add a checkbox (`<input type='checkbox'>`), task description (`<span>`), and delete button (`<button class='delete-btn'>Delete</button>`).\n    - **CRITICAL:** Set the task description using `element.textContent = task.description` to prevent XSS.\n    - Set checkbox state (`checked`) based on `task.isCompleted`.\n    - Add `.completed` class to `<li>` if `task.isCompleted`.\n    - Append the `<li>` to the `taskListElement`.\n6. Implement helper functions for adding, toggling, and deleting tasks based on the pseudocode provided in the analysis (e.g., `addTask_Helper`, `toggleTaskComplete_Helper`, `deleteTask_InPlace_Helper`). These functions should:\n    - Update the main `tasks` array.\n    - Call `saveTasks()`.\n    - Trigger a re-render by calling `renderTasks()` (or perform targeted DOM updates for toggle/add if optimizing).\n    - `addTask`: Get text from `#task-input`, trim it. If not empty, create a new task object { id: Date.now(), description: text, isCompleted: false }, add to `tasks`, save, render, and clear input.\n    - `toggleTask`: Find task by ID, flip `isCompleted` status, save, render (or update class).\n    - `deleteTask`: Find task by ID, remove from `tasks` array (e.g., using `filter` or `splice`), save, render.\n7. Set up event listeners:\n    - For the 'Add Task' button (`#add-task-btn`) on `click`.\n    - For the input field (`#task-input`) on `keypress`, check for 'Enter' key (`event.key === 'Enter'`).\n    - Use **event delegation** on the task list element (`#task-list`) to handle `click` events. Inside the handler:\n        - Identify the clicked element (`event.target`).\n        - Find the closest parent `<li>` and get its `data-task-id`.\n        - If a checkbox (`input[type=checkbox]`) was clicked, call the toggle helper.\n        - If a delete button (`.delete-btn`) was clicked, call the delete helper.\n8. Implement the initialization logic: Inside the `DOMContentLoaded` listener, call `loadTasks()` to populate the `tasks` state array, then call `renderTasks()` to display the initial list.\n9. Adhere strictly to `.clinerules` and `.clinerules-code`, including comments for clarity.",
        "toolNotes": "Use MCP filesystem tools to read/write `script.js`. Pay close attention to XSS prevention using `textContent` as noted in `renderTasks`. Implement event delegation as specified for efficiency. Ensure element IDs (`#task-input`, `#add-task-btn`, `#task-list`) match those in `index.html`. The helper functions should modify the shared `tasks` array.",
        "completionCriteria": "`script.js` successfully implements all required functionalities: loading from/saving to Local Storage, rendering tasks, adding new tasks (via button and Enter key), toggling completion status (visually and in storage), deleting tasks. App state persists across page reloads. XSS vulnerability via task description is prevented. Use `attempt_completion` with a summary like 'Core JS logic for To-Do app implemented, including state management, Local Storage, rendering, and event handling.'"
    }
    </message>
    </new_task>

## Phase 3: Testing and Documentation

4.  <new_task>
    <mode>ui-tester</mode>
    <message>
    {
        "goal": "Create an automated UI test script using the `browser_action` tool to verify the core functionalities of the To-Do application based on the provided test plan.",
        "contextSummary": "An automated test is needed to verify adding, completing, deleting tasks, and checking persistence using Local Storage. The analysis provides a detailed step-by-step test plan using `browser_action` commands.",
        "detailedInstructions": "1. Create a test script (e.g., `todo_test.json` or similar format compatible with `browser_action` tool).\n2. Implement the following test sequence using `browser_action` commands:\n    a. `navigate`: Open `index.html`.\n    b. `assert`: Verify the task list (`#task-list`) is initially empty (assuming clean local storage). Select `#task-list` and assert it has 0 `li` children or empty `innerText`.\n    c. `type_text`: Enter 'Test Task 1' into `#task-input`.\n    d. `click`: Click `#add-task-btn`.\n    e. `assert`: Verify an `li` element containing a `span` with text 'Test Task 1' exists within `#task-list`. Verify `#task-input` value is empty.\n    f. `click`: Click the checkbox (`input[type=checkbox]`) inside the `li` containing 'Test Task 1'.\n    g. `assert`: Verify the parent `li` of the clicked checkbox now has the class `completed`.\n    h. `reload`: Reload the page.\n    i. `assert`: Verify 'Test Task 1' still exists in an `li` within `#task-list`. Assert the `li` still has the `completed` class AND its checkbox (`input[type=checkbox]`) is checked.\n    j. `click`: Click the delete button (`button.delete-btn`) within the 'Test Task 1' `li`.\n    k. `assert`: Verify the `li` containing 'Test Task 1' is no longer present in `#task-list`.\n    l. `reload`: Reload the page.\n    m. `assert`: Verify `#task-list` does not contain any `li` with 'Test Task 1'.\n3. Ensure selectors used in the script accurately target the elements in `index.html` (e.g., `#task-input`, `#add-task-btn`, `#task-list`, `li`, `input[type=checkbox]`, `button.delete-btn`, `span`). Use specific selectors to target elements within the correct list item when necessary.\n4. Adhere to `.clinerules`.",
        "toolNotes": "This task requires the `browser_action` tool. The output should be a script file runnable by `browser_action`. Ensure assertions are specific enough to confirm the state changes (e.g., class changes, element removal, checkbox state).",
        "completionCriteria": "A functional `browser_action` script is created that successfully executes the specified test plan, verifying add, complete, delete, and persistence functionalities. Use `attempt_completion` with a summary like 'Automated UI test script created using browser_action.'"
    }
    </message>
    </new_task>

5.  <new_task>
    <mode>docs-writer</mode>
    <message>
    {
        "goal": "Populate the `README.md` file documenting the To-Do list application.",
        "contextSummary": "The project requires a simple README file explaining the application. It's a client-side To-Do list using HTML, CSS, Vanilla JavaScript, and Local Storage. The `README.md` file was created in Phase 1.",
        "detailedInstructions": "1. Open the existing `README.md` file.\n2. Write content including:\n    - A brief title/description (e.g., '# Simple To-Do List Application').\n    - How to Run: Explain that the user just needs to open the `index.html` file in a modern web browser.\n    - Features: Briefly list the core features (Add tasks, View tasks, Mark tasks complete/incomplete, Delete tasks, Persistence via Local Storage).\n3. Keep the documentation concise and clear.\n4. Adhere to `.clinerules`.",
        "toolNotes": "Use MCP filesystem tools to read and write `README.md`.",
        "completionCriteria": "`README.md` file is populated with the required sections (description, run instructions, features). Use `attempt_completion` with a summary like 'README.md updated with project documentation.'"
    }
    </message>
    </new_task>

## Conclusion

The `lead-developer` mode will monitor the progress of the delegated tasks. Upon successful completion of all tasks, the To-Do list application should be functional, tested, and documented according to the requirements.
```