# URL Shortener App

This project is a simple URL shortener application that allows users to shorten long URLs and retrieve them later. It consists of a backend built with Node.js and Express, and a frontend built with HTML, CSS, and JavaScript.

## Features

- Shorten long URLs
- Retrieve original URLs from shortened links
- Store shortened URLs in a MongoDB database

## Technologies Used

- Node.js
- Express
- MongoDB
- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running, or a MongoDB Atlas account

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/url-shortener-app.git
   ```

2. Navigate to the project directory:

   ```
   cd url-shortener-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Create a `.env` file to store your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Start the backend server:

   ```
   node server.js
   ```

### Frontend Setup

1. Open the `frontend/index.html` file in your web browser.

2. Use the form to input a URL you want to shorten.

## Usage

- Enter a long URL in the input field and click the "Shorten" button.
- The shortened URL will be displayed below the form.
- You can click on the shortened URL to be redirected to the original URL.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.