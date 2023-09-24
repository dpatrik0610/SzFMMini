### User Register
![User Registration](https://www.plantuml.com/plantuml/svg/TP713e8m38RlUueUzK1GZnmCXfCd2SW3BAmn99EPhc1yUzT49Clq04cRx__R_YizQ-BfRfNksH5q7ad93x8ZdEfp0VMblK8-XLPEU1iy8maxp9fH21K-WKLKkP79MOjKG4yO2EbkHBnTHJ6fudAnQl3X_11MUaLM8pwxr6s5LLn2ziEkrJE2x0H6iquLwIqD-icoClXdQdB34fxqF-kRI1xn4k5tRW67tHwgL2DPbpWQUQmt)

**Description:**
- The User initiates the registration process by providing registration information on the client-side, including a username and password.
- The Client sends a POST request to the `/user/register` endpoint of the Server, sending the registration data.
- The Server receives the registration request and checks if the provided username is available.
- If the username is available, the Server hashes the password and creates a new user account in the database.
- The Server generates a JWT token containing user information and sends it back to the Client.
- The Client stores the JWT token in a secure manner for future authenticated requests.
- The user is now registered and logged in, able to access protected resources.
---
### User Login
![User Login](https://www.plantuml.com/plantuml/svg/ZPB1JiCm38RlUGeVkyF4nB47DDW9WRHfi0Um6jD5fF7ak4DxUp2KqaXKSAXLk__tDtQypegYVHSTDie2XqpYBC3o1cvtzpNija_FS1Mv3SaquOnAziLzF2OoyOQJ2iT8KiEdqefL8-GfQS2O5pzegNTb-csufnFde2oN6bfIAzrTB2RigEg7by9r2haoXUKljdjI2NGcC3Vmg3X35TqTHh6d-P-NBGsJ_69Vk4--W0lrt5GtHsfUuOGvlx7uVqzplCG1X0wrET8V1nWxh-5wjOBj0rIFtBRa8QJ55BKrM5FojZ_l)

**Description:**
- The User initiates the login process by entering their username and password on the client-side.
- The Client sends a POST request to the `/login` endpoint of the Server, including the user's credentials.
- The Server receives the request and validates the user's credentials.
- If the credentials are valid, the Server generates a JWT token containing user information and sends it back to the Client.
- The Client stores the JWT token in cookies for future authenticated requests.
- The user is now logged in and can access protected resources.
---
### Logout
![Logout](https://www.plantuml.com/plantuml/svg/TO_12i8m38RlVOeSjuCuFFOWavr4OGFr0OeDPL0RI3EVtuKAPOSTMaZo_Nn9dyMnB9zet5k8uPMHZNvmECDbkbgOniSJZf42BQBG_7M2EZBhKqhfWP8mnOXieQ3QRTeQs59cKrRP4D4nPCnvfcGyxiIB-k-sSEew66_Gt2a4zB3QsvAjk_QOl5xv0m00)

**Description:**
- The User initiates the logout process, typically by clicking a "Logout" button on the client-side.
- The Client sends a POST request to the `/logout` endpoint of the Server.
- The Server, protected by a middleware (JWT verification), receives the request.
- The Server invalidates the user's JWT token on the server-side, ensuring that it can no longer be used for authentication.
- The Client removes the JWT token from storage.
- The user is now logged out and cannot access protected resources until they log in again.