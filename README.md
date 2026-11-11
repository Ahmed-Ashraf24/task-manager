# TaskFlow – Task Management Dashboard

A responsive task management dashboard built with React. TaskFlow helps users organize their work, track progress, and manage tasks through a simple Kanban-style interface.

## Features

- **Task Management:** Create, edit, and delete tasks.
- **Kanban Board:** Organize tasks into three columns:
  - To Do
  - In Progress
  - Done
- **Task Priorities:** Assign High, Medium, or Low priority to tasks.
- **Due Dates:** Set deadlines and display task dates.
- **Search:** Find tasks by title or description.
- **Local Storage:** Automatically save tasks in the browser so they remain available after refreshing the page.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Empty States:** Clear feedback when a column has no tasks or a search returns no results.

## Tech Stack

- React
- JavaScript (ES6+)
- CSS3
- Browser Local Storage

## Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── TaskCard/
│   │   ├── TaskCard.jsx
│   │   └── TaskCard.css
│   └── TaskForm/
│       ├── TaskForm.jsx
│       └── TaskForm.css
├── pages/
│   ├── TasksPage.jsx
│   └── TasksPage.css
├── App.js
├── App.css
└── index.js
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the application at:

   ```text
   http://localhost:3000
   ```

## Data Persistence

TaskFlow uses the browser's Local Storage to persist tasks. No backend or database is required.
