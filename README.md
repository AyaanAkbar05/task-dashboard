# Reflection

In this project, I built a Task Management Dashboard using React and TypeScript, focusing on creating a functional and responsive application. React components were used to structure the UI into reusable pieces, such as TaskForm for adding tasks, TaskList and TaskItem for displaying tasks, TaskFilter for filtering and sorting, and a Dashboard component to manage state and compose everything together. TypeScript helped ensure that all task data, props, and form inputs had clearly defined types, which made the code easier to read, maintain, and debug.

One of the main challenges was handling dates. When tasks were stored in localStorage, their date fields were saved as strings, which caused errors when trying to format them for display. This was solved by converting the date strings back into Date objects when loading data.

For component composition and state management, I lifted the main task state to the Dashboard component. This allowed all child components to access and update the tasks through props. The Dashboard also handled saving and loading tasks from localStorage, ensuring data persistence. Controlled forms were used for task input, and utility functions helped with filtering and sorting. This approach kept the components modular and the state predictable.

Overall, this project helped reinforce my understanding of React component structure, TypeScript typing, state management, and practical data handling in a real-world application.
