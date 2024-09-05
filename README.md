# Assessment project

## Overview

This project is a web application consisting of a frontend built with React.js and a backend using Express.js. The application is a search page

## Directory Structure

- **my-react-app/**: Contains the React.js application.
- **my-backend/**: Contains the Express.js server and API.

## Features

Features implemented:

- Search: Search items by keywords.
- Filter and Sort: Filter and sort items based on user's needs.
- Loadmore: Load more items if user want to see more items on the page.
- AutoRefresh: refresh all the items each every 60 seconds

If i had more time, maybe i would :

- Make the site more eye catching, better design
- Apply query with the filters to the items in the back-end not just on the front-end like right now.
- Add the filters and search to the url so when user refresh page the searching will be still available.
- Add a selection for user to decide how many items are displayed on the page.

## Installation

### Prerequisites

- Node.js (version 18)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Minh-NhatPham/assignment-app-tymex
   ```

2. **Install dependencies for both frontend and backend:**

   **Frontend:**

   ```bash
   cd my-react-app
   npm install
   ```

   **Backend:**

   ```bash
   cd my-backend
   npm install
   ```

## Usage

### Running the application

1. **Start the backend server:**

   ```bash
   cd my-backend
   npm run dev
   ```

   The backend server will start on `http://localhost:5175`.

2. **Start the frontend application:**

   ```bash
   cd my-react-app
   npm start
   ```

   The frontend will be available at `http://localhost:5173`.

### API Endpoints

- **GET /products**: Load items from the backend.
- **GET /search**: Search items based on user's input keyword.
- **GET /category**: Load categories for the left side filters.

## Contact

For questions or feedback, please contact [Nhat-Minh](mailto:minh.pn.dev@gmail.com).
