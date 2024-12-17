# ToDo List Project - Frontend Application

This project is a frontend application for managing tasks, built with Next.js

## Getting Started

### 1. Install Dependencies

First, install the required dependencies by running:

```bash
npm install
# or
yarn install
```

This will install all the necessary packages from the `package.json` file.

### 2. Run the Development Server

Once dependencies are installed, you can start the development server:

```bash
npm run dev
# or
yarn dev
```

The server will run on [http://localhost:3000](http://localhost:3000), where you can view the app in your browser.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the development server in development mode.

### `npm run build`

Builds the app for production to the `./.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the production server after building the app with `npm run build`.

## Project Structure

- `src/` - Contains the main application files.
    - `app/` - Main app logic.
    - `components/` - Reusable React components.
    - `constants/` - Application constants.
    - `services/` - API services.

## API Endpoints

This application connects to a backend API that manages tasks. The following endpoints are available:

### **GET /tasks**

- **Description**: Fetches a list of all tasks.
- **Response**: A list of task objects containing `id`, `title`, `description`, `status`, `createdAt`, and `updatedAt`.

### **GET /tasks/:id**

- **Description**: Fetches a specific task by its ID.
- **Response**: A task object containing `id`, `title`, `description`, `status`, `createdAt`, and `updatedAt`.

### **POST /tasks**

- **Description**: Creates a new task.
- **Request Body**: 
  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```
- **Response**: The created task object with `id`, `title`, `description`, `status`, `createdAt`, and `updatedAt`.

### **PATCH /tasks/:id**

- **Description**: Updates an existing task by its ID.
- **Request Body**: 
  ```json
  {
    "title": "string",
    "description": "string",
    "status": "string"
  }
  ```
- **Response**: The updated task object with `id`, `title`, `description`, `status`, `createdAt`, and `updatedAt`.

### **DELETE /tasks/:id**

- **Description**: Deletes a task by its ID.
- **Response**: A status message indicating success or failure.

## Architecture Overview

- **Frontend (Next.js)**: This application uses Next.js to render pages dynamically, fetch data from the backend, and manage the application state. It relies heavily on React and hooks to manage component lifecycle and state.
- **State Management**: The application uses local state and effect hooks to manage and update the UI based on user actions.
- **Routing**: Next.js uses file-based routing to automatically handle navigation between pages.
- **API Calls**: API calls are made to the backend API (such as `GET /tasks` or `POST /tasks`) using `fetch` or any preferred HTTP client (like Axios).
