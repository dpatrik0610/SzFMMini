# Tree Simulator Project

## Project Description
The Tree Simulator project involves creating a web application where users can simulate the growth of trees. Users can register, log in, and manage their tree planting and growth. MongoDB Atlas is used as the database for storing user information and tree data.

## Project Structure
- **Backend and Frontend:** Separate folders for server and client-side code.
- **Backend:** Consists of controllers, models, and routes for user and tree-related functionality.
- **Database Connection:** A separate `db.js` file for connecting to MongoDB.
- **Authentication:** JWT tokens are used for user authentication.
- **Client-Side Storage:** Cookies are used to store JWT tokens on the client-side.
- **Middleware:** Protects routes that require authentication.
- **Controllers:** Handle user registration, login, tree management, and user data modification.
- **UtilController:** Contains utility functions like `totalUserCount`.
- **Models:** Define data schemas for users and trees.
- **API Routes:** Handle HTTP requests.

## Key Functionality
- User registration and login with JWT authentication.
- Tree planting, growth simulation, and management for each user.
- User-specific data modification and protection of others' data.
- User data retrieval by username or user ID.
- User count calculation and other utility functions.
- Logout functionality with token removal from cookies.

## Future Improvements
- Enhancing security measures.
- Adding error handling and validation.
- Improving the user experience.

## Summary
The Tree Simulator project is an ongoing web application that allows users to simulate tree growth. It offers user registration, login, and tree management features with user-specific data protection and JWT token-based authentication. The project structure is organized with separate backend components, including controllers, models, routes, and middleware. Future improvements can include frontend development and additional features to make the tree simulation more engaging.