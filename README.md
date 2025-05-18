# PG Finder

A web application designed to help users easily find and connect with paying guest (PG) accommodations. This platform aims to simplify the search process for students and professionals looking for suitable PGs.

## Features

-   **Search Functionality**: Users can search for PGs based on location, city, or specific landmarks.
-   **Filtering Options**: Advanced filters for refining search results based on price range, amenities (e.g., Wi-Fi, food, AC), sharing type (single, double, etc.), and more.
-   **Detailed PG Listings**: Each listing provides comprehensive details including photographs, room types, available amenities, rules, and contact information of the PG owner/manager.
-   **User Reviews and Ratings**: Users can read and submit reviews and ratings for PGs they have stayed at.

## Tech Stack

### Frontend

-   **Framework/Library**: React.js (with Vite)
-   **Language**: JavaScript (JSX), HTML, CSS
-   **Styling**: (e.g., Tailwind CSS, Material-UI, or custom CSS - specify as appropriate)
-   **State Management**: (e.g., Redux, Zustand, Context API - specify as appropriate)
-   **Routing**: React Router

### Backend

-   **Framework/Library**: (e.g., Node.js with Express.js, Python with Django/Flask - specify as appropriate)
-   **Database**: (e.g., MongoDB, PostgreSQL, MySQL - specify as appropriate)
- **API**: RESTful API for communication between frontend and backend
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18.x or later recommended)
-   npm (v9.x or later) or yarn
-   (Specify any other prerequisites like database software)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Tanmay0215/pg-finder
    cd pg-finder
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd ../backend
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    Navigate to the `backend` directory and run:
    ```bash
    npm run dev
    ```
    The backend server will typically start on a port like `http://localhost:5000` (check your backend configuration).

2.  **Start the Frontend Development Server:**
    Navigate to the `frontend` directory and run:
    ```bash
    npm run dev
    ```
    The frontend development server will typically start on `http://localhost:5173` (for Vite).

Open your browser and navigate to the frontend URL to see the application.

## Project Structure

```
pg-finder/
├── backend/                # Backend application (e.g., Node.js/Express)
│   ├── package.json
│   └── ...                 # Other backend files and folders
├── frontend/               # Frontend application (e.g., React/Vite)
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...             # Components, assets, etc.
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── ...                 # Other frontend files
└── README.md               # This file
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please make sure to update tests as appropriate.

## License

Distributed under the MIT License. See `LICENSE` for more information. (You'll need to add a LICENSE file if you choose to include one).
