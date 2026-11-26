# 📝 To-Do List App

A simple, interactive, and user-friendly To-Do List web application built using **HTML, CSS, and JavaScript**. This application helps users organize their daily activities by allowing them to add, edit, delete, search, filter, and track their tasks.

Designed with a cozy study desk aesthetic, the application provides a clean and comfortable interface to make daily task management more enjoyable.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Application Preview](#-application-preview)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How to Use](#-how-to-use)
- [Application Functionalities](#-application-functionalities)
- [Data Storage](#-data-storage)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Author](#-author)

---

## 🎯 Project Overview

The **To-Do List App** is a mini web development project designed to help users manage their daily tasks efficiently.

Users can create new tasks, modify existing tasks, mark tasks as completed, and remove tasks that are no longer needed. The application also includes search and filtering functionalities to make it easier to locate and manage specific tasks.

To ensure that tasks are not lost when the webpage is refreshed or reopened, the application uses the browser's **Local Storage** to save task information.

This project was developed to practise fundamental front-end web development concepts, particularly DOM manipulation, event handling, JavaScript functions, and browser-based data storage.

## ✨ Features

The application includes the following features:

### 1. Add Tasks
- Users can enter a task into the input field.
- New tasks are dynamically added to the task list.
- Empty or whitespace-only tasks are not accepted.
- The input field is automatically cleared after adding a task.

### 2. Edit Tasks
- Users can modify the description of an existing task.
- An editing interface provides a text input field with Save and Cancel buttons.
- The Save button updates the task with the new description.
- The Cancel button restores the original task description.
- Empty task descriptions are not accepted.

### 3. Delete Tasks
- Users can remove unwanted tasks from the task list.
- Deleted tasks are immediately removed from the application.
- Changes are saved automatically.

### 4. Mark Tasks as Completed
- Users can mark tasks as completed using checkboxes.
- Completed tasks are visually distinguished using strikethrough text and reduced opacity.
- Users can also uncheck completed tasks to return them to the active task list.

### 5. Search Tasks
- Users can search for specific tasks using the search bar.
- Search results update dynamically while typing.
- The search functionality is case-insensitive.

### 6. Filter Tasks
Users can organize their tasks using three filter options:

| Filter | Description |
|---|---|
| All | Displays all tasks. |
| Active | Displays tasks that have not been completed. |
| Completed | Displays only completed tasks. |

### 7. Automatic Data Persistence
- Task information is saved automatically using browser Local Storage.
- Saved tasks remain available after refreshing or reopening the webpage in the same browser.
- Task descriptions and completion statuses are preserved.

### 8. Responsive User Interface
- The application uses CSS Flexbox for layout alignment.
- Media queries help adjust the interface for smaller screens.
- A clean and minimal design provides a comfortable user experience.

---

## 🛠️ Technologies Used

This project was developed using the following technologies:

| Technology | Purpose |
|---|---|
| HTML5 | Defines the structure and content of the application. |
| CSS3 | Handles styling, layout, colours, and responsive design. |
| JavaScript | Implements application logic and interactive functionalities. |
| DOM Manipulation | Dynamically creates, updates, and removes task elements. |
| Browser Local Storage | Stores task information locally in the browser. |

**No external frameworks or libraries are required.**

---

## 🖥️ Application Preview

The application features a warm study desk-inspired background with a clean task management interface.

![To-Do List App Preview](study-background.jpg)

---

## 📂 Project Structure

The project consists of three main source files and one background image:

```text
To-Do-List-App/
│
├── index.html          # Main HTML structure
├── style.css           # Application styling
├── script.js           # Application functionality
├── background.jpg      # Background image
│
└── README.md           # Project documentation
```

### File Descriptions

- **index.html** – Contains the webpage structure, task input section, search bar, filter buttons, and task list.
- **style.css** – Defines the visual appearance, layout, button styling, completed-task styling, and responsive design.
- **script.js** – Handles task management, event listeners, search, filtering, and Local Storage operations.
- **study-background.jpg** – Provides the study desk aesthetic background image.
- **README.md** – Documents the project and explains its features and usage.

---

## 🚀 Getting Started

Follow these instructions to run the application locally.

### Prerequisites

You will need:

- A modern web browser (Google Chrome, Microsoft Edge, Firefox, etc.).
- A code editor such as Visual Studio Code.
- Basic knowledge of HTML, CSS, and JavaScript (optional).

### Installation

**Step 1: Clone the repository**

Open your terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/To-Do-List-App.git
```

**Step 2: Navigate to the project folder**

```bash
cd To-Do-List-App
```

**Step 3: Open the project**

Open the project folder using Visual Studio Code.

**Step 4: Run the application**

Open `index.html` directly in your web browser, or use the Live Server extension in Visual Studio Code.

The application is now ready to use!

---

## 📖 How to Use

1. **Add a Task:** Enter your task in the input field and click the Add button.
2. **Edit a Task:** Click Edit beside the task you want to modify. Update the text and click Save to confirm, or Cancel to discard the changes.
3. **Delete a Task:** Click Delete to remove a task from the list.
4. **Complete a Task:** Tick the checkbox beside a task to mark it as completed.
5. **Search for a Task:** Enter a keyword into the search bar to find matching tasks.
6. **Filter Tasks:** Select All, Active, or Completed to display tasks according to their completion status.

---

## ⚙️ Application Functionalities

The application uses several JavaScript functions to manage its operations.

| Function | Responsibility |
|---|---|
| `addTask()` | Creates and adds a new task to the task list. |
| `saveTasks()` | Saves task information into Local Storage. |
| `loadTasks()` | Retrieves saved tasks from Local Storage when the webpage loads. |
| `filterTasks()` | Handles task searching and filtering based on the selected criteria. |

### Event Handling

The application uses JavaScript event listeners to respond to user interactions:

- `click` – Handles adding, editing, saving, cancelling, deleting, and filtering tasks.
- `input` – Detects changes in the search field and updates the displayed results.
- `change` / delegated click handling – Handles task completion through checkbox interaction.

### DOM Manipulation

JavaScript DOM methods are used to dynamically create and update HTML elements.

Some of the methods used include:

- `document.getElementById()`
- `document.createElement()`
- `appendChild()`
- `replaceWith()`
- `remove()`
- `querySelector()`
- `querySelectorAll()`

---

## 💾 Data Storage

This application uses the browser's **Local Storage API** to maintain task information.

Each task is stored as an object containing two properties:

```javascript
{
    text: "Reading",
    completed: false
}
```

All task objects are stored inside an array and converted into a JSON string using `JSON.stringify()` before being saved.

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the webpage is reopened, the saved JSON data is retrieved and converted back into a JavaScript array using `JSON.parse()`.

```javascript
const tasks = JSON.parse(savedTasks);
```

This allows the application to restore task descriptions and completion statuses without requiring a database or server.

**Note:** Local Storage is browser-specific. Clearing browser storage or switching browsers may result in the saved tasks becoming unavailable.

---

## 🔮 Future Improvements

The following enhancements could be considered for future versions:

- [ ] Add task deadlines and due dates.
- [ ] Implement task priority levels (High, Medium, Low).
- [ ] Add task categories or labels.
- [ ] Display the total number of active and completed tasks.
- [ ] Add a Clear All Completed Tasks function.
- [ ] Implement dark mode.
- [ ] Improve mobile responsiveness.
- [ ] Add confirmation messages before deleting tasks.
- [ ] Add task sorting functionality.

---

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Structuring web pages using HTML5.
- Styling web applications using CSS3.
- Implementing interactive features using JavaScript.
- Manipulating HTML elements through the DOM.
- Handling user interactions with JavaScript event listeners.
- Implementing CRUD operations (Create, Read, Update, Delete).
- Using Local Storage for client-side data persistence.
- Implementing real-time search and filtering functionality.
- Organizing a front-end project into separate files.
- Understanding basic responsive web design principles.

---

## 👨‍💻 Author

**Desmond Beh**

A student exploring web development and building practical projects to strengthen front-end programming skills.

---

## 📄 License

This project is created for educational and learning purposes.

Feel free to explore the source code and use it as a reference for your own learning journey.

---

⭐ If you find this project useful, feel free to give the repository a star!
