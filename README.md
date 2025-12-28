# Basic Blog MVP
Basic Blog MVP is a functional, single-user blogging platform designed to provide a seamless interface for creating and viewing visual content with data persistence. This project serves as a Minimum Viable Product (MVP) for individual bloggers.

## 🛠️ Technical Stack

### **Frontend**
- **Framework**: React.js (Functional Components & Hooks)
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS v3 (Responsive UI)
- **Development Port**: `localhost:3000`

### **Backend**
- **Environment**: Node.js
- **Framework**: Express.js (RESTful API Design)
- **Database**: MongoDB with Mongoose (Document-based storage)
- **Development Port**: `localhost:5000`

### **Utilities & Tools**
- **CORS**: Handles cross-origin resource sharing between Frontend and Backend.
- **Dotenv**: Manages sensitive environment variables (API Keys, DB URIs).
- **Nodemon**: Provides a smooth development workflow with automatic server restarts.
- **Axios**: For making asynchronous HTTP requests from the frontend.

## 🏗️ System Architecture & Folder Structure
The project is organized into separate folders for the frontend (client) and the backend (server).
<pre>
├── client/                 # Frontend: React application
│   ├── public/ 
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Home.js, CreatePost.js, PostDetail.js
│       ├── services/       # api.js for backend communication
│       ├── App.js          
│       ├── index.js        
│       └── tailwind.config.js 
├── server/                 # Backend: Node.js & Express application
│   ├── config/             # db.js for database connection
│   ├── controller/         # postController.js for business logic
│   ├── Model/              # postModel.js for MongoDB schema
│   ├── routes/             # postRoutes.js for API endpoints
│   └── index.js            # Server entry point
└── README.md 
</pre>

## ✨ Features (Scope of Work)
### 🚀 Core Features
- **Post Feed**: A homepage that fetches and displays a list of all blog posts.
- **Single Post View**: Navigation to a detailed view of an individual post.
- **Content Management (CRUD)**:
  - **Create**: A form to add new posts with a Title and Content.
  - **Update**: Ability to edit existing post titles.
  - **Delete**: A button to remove posts from the feed and database.
- **Responsive UI**: A layout that adapts seamlessly to mobile and desktop views.

## 📡** API Endpoints**
### The backend provides the following essential routes:
```bash
- **GET**	/api/getAllPosts	      ### Retrieve all blog posts`
- **GET**	/api/getSinglePost/:id	### Retrieve a single post by ID`
- **POST**	/api/createPost	      ### Create a new blog post
- **PUT**	/api/updatePost/:id	    ### Update an existing post
- **DELETE**	/api/deletePost/:id	### Remove a post from the database
```

## ⚙️ Installation & Setup

### 1. Prerequisites
* **Node.js**: [Download and install](https://nodejs.org/) (LTS version recommended).
* **MongoDB**: A running instance (Local MongoDB Community Server or MongoDB Atlas).

---

### 2. Backend Setup
The backend serves as the core API, handling database interactions and business logic.

```bash
### Navigate to server directory
cd server
### Install specific dependencies
npm install express mongoose cors dotenv
# Install development dependency
npm install -D nodemon
# Create a .env file and add your credentials
# PORT=your_port
# MONGO_URI=your_mongodb_connection_string
# Start the server using nodemon
npm start
```
### 3. Frontend & Tailwind CSS v3 Setup
```bash
To ensure the responsive UI functions correctly, follow these precise commands to install and initialize Tailwind CSS v3:
### Navigate to client directory
cd client

# Install Tailwind CSS, PostCSS, and Autoprefixer
npm install -D tailwindcss@3 postcss autoprefixer

# Generate tailwind.config.js and postcss.config.js
npx tailwindcss init -p

**# Configure Template Paths Open tailwind.config.js and update the content array to scan your React files:**
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

**# Add Tailwind Directives to CSS Open src/index.css and add the following lines at the very top:**
@tailwind base;
@tailwind components;
@tailwind utilities;

# Start the React development server
npm start 
```
