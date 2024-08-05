# Twitter-like Backend System

## Assignment Overview
This is a simplified Twitter-like backend system designed using Node.js and MongoDB. It includes user registration, login, posting tweets, and fetching user timelines.

## How to Run the Application

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps
1. Clone the repository
    ```bash
    git clone https://github.com/avinash-18-art/Twitter-Like-Backend-Assignment.git
    cd twitter-backend
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start MongoDB
    ```bash
    mongod
    ```
4. Run the application
    ```bash
    npm run start
    ```

## API Endpoints

### User Registration
- `POST /api/users/register`
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```

### User Login
- `POST /api/users/login`
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```

### Post a Tweet
- `POST /api/tweets`
    - Requires Authorization header with Bearer token
    ```json
    {
        "text": "your_tweet_text"
    }
    ```

### Fetch User Timeline
- `GET /api/users/:userId/timeline`
    - Optional query parameter: `cursor` for pagination
    - Requires Authorization header with Bearer token

## Dependencies
- express
- mongoose
- bcryptjs
- jsonwebtoken
- body-parser
- nodemon (dev dependency)

## Contact Information
For any queries, please contact [your email].

## Project Structure :- 
twitter-backend/
├── src/
│   ├── controllers/
│   │   ├── tweet.js
│   │   └── user.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Tweet.js
│   │   └── User.js
│   ├── routes/
│   │   ├── tweet.js
│   │   └── user.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
