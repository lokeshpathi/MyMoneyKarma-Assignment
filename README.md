Backend (Node.js + Express + MongoDB)
1. Clone the Repository
First, clone the project repository to your local machine:

bash
Copy code
git clone <repository-url>
cd financial-dashboard-backend
2. Install Dependencies
Ensure you're in the backend directory and run the following command to install the required npm packages:

bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the src directory and define your environment variables:

bash
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/financial_dashboard
Ensure you replace MONGODB_URI with your MongoDB connection string if you're using a cloud service like MongoDB Atlas.

4. Run MongoDB (if not using MongoDB Atlas)
If you're running MongoDB locally, ensure that your MongoDB server is running. You can start it with:

bash
Copy code
mongod
5. Start the Backend Server
Run the following command to start the Express server:

bash

Here are the execution steps to run the backend and frontend for the Full-Stack Financial Dashboard application. I'll provide instructions for both the backend (Node.js + MongoDB) and frontend (React.js) setup.

Backend (Node.js + Express + MongoDB)
1. Clone the Repository
First, clone the project repository to your local machine:

bash
Copy code
git clone <repository-url>
cd financial-dashboard-backend
2. Install Dependencies
Ensure you're in the backend directory and run the following command to install the required npm packages:

bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the src directory and define your environment variables:

bash
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/financial_dashboard
Ensure you replace MONGODB_URI with your MongoDB connection string if you're using a cloud service like MongoDB Atlas.

4. Run MongoDB (if not using MongoDB Atlas)
If you're running MongoDB locally, ensure that your MongoDB server is running. You can start it with:

bash
Copy code
mongod
5. Start the Backend Server
Run the following command to start the Express server:

bash
Copy code
npm start
The server should be running at http://localhost:5000.

Frontend (React.js)
1. Navigate to the Frontend Directory
Assuming the frontend code is located in a separate directory like financial-dashboard-frontend, navigate to that directory:

bash
Copy code
cd financial-dashboard-frontend
2. Install Dependencies
Run the following command to install the required npm packages:

bash
Copy code
npm install
3. Start the React Development Server
After installing the dependencies, you can start the development server with:

bash
Copy code
npm start
Copy code
npm start
The server should be running at http://localhost:5000.

