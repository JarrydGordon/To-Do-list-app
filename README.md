# To-Do List Application

A simple, clean, and efficient to-do list application built with HTML5, CSS3, and JavaScript. The application allows users to manage their tasks with a persistent storage solution using the browser's Local Storage API.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persistent storage (tasks remain after page reload)
- Clean and responsive user interface
- Cross-browser compatibility
- Secure input handling (XSS prevention)

## Getting Started

Simply open `index.html` in your web browser to start using the application. No additional installation or setup is required.

## How to Use

1. **Adding Tasks**
   - Type your task in the input field
   - Click "Add Task" or press Enter to add it to your list
   - Empty tasks or whitespace-only tasks will not be added

2. **Managing Tasks**
   - Click the checkbox next to a task to mark it as complete/incomplete
   - Click the "Delete" button to remove a task
   - All changes are automatically saved to your browser's local storage

## Technical Details

- Built with vanilla JavaScript (ES6+)
- Uses Local Storage for data persistence
- Implements BEM methodology for CSS organization
- Features event delegation for efficient event handling
- Includes input validation and XSS prevention
- Responsive design that works on all screen sizes

## Browser Support

Tested and compatible with:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Security Features

- User input is properly sanitized to prevent XSS attacks
- Data validation for Local Storage operations
- Secure DOM manipulation practices
