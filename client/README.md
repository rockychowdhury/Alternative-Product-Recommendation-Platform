# AltRec - Product Recommendation Platform

AltRec is a web-based platform designed to help users share and explore product recommendations. Users can post queries about alternative products, recommend better options, and engage with a growing community. The platform emphasizes simplicity, responsiveness, and a visually appealing design to ensure an excellent user experience.

## 🔗 Live Site URL
[https://altrec-68fe1.web.app/](#)  

---

## 🎯 Purpose
The purpose of AltRec is to provide users with a centralized platform where they can:
- Share queries about products they wish to replace or avoid.
- Explore alternative recommendations made by others.
- Engage in discussions to make informed product choices.

AltRec is designed to evaluate and demonstrate your skills in building a responsive, feature-rich web application while implementing modern development practices like JWT authentication, secure environment configurations, and seamless deployment.

---

## 🏆 Key Features
### User Features
1. **Authentication:**
   - Email/Password-based login and registration.
   - Google Sign-in option.
   - JWT-based authentication for secure private routes.

2. **Query Management:**
   - Add, update, and delete queries.
   - View all user-specific queries in a private section.
   - Search for queries by product name.
   - Recent queries displayed dynamically on the homepage.

3. **Recommendations:**
   - Add recommendations for specific queries.
   - View all recommendations for a query in a comment-style layout.
   - Manage personal recommendations (delete only).
   - Explore recommendations made for your queries.

4. **Responsive Design:**
   - Fully responsive on desktop, tablet, and mobile devices.
   - Conditional navigation menus for logged-in and non-logged-in users.

### Administrative Features
- **Secure Configuration:**
  - Firebase configuration and MongoDB credentials are secured using environment variables.
  
- **Error Handling:**
  - Comprehensive error handling for routes, reloading, and authentication.
  
- **Dynamic Layouts:**
  - Toggle between different grid layouts on the "All Queries" page.

### Animative Sections
- **Home Page:**
  - Hero slider with strong imagery explaining the website's purpose.
  - Recent queries dynamically loaded in a card layout.
  - Additional engaging and animated sections for user trust and engagement.

- **404 Error Page:**
  - A custom error page with a button redirecting users to the homepage.

---

## 🚀 Deployment
AltRec has been deployed to ensure a seamless experience:
- Server is hosted on [vercel].
- Client is deployed on [firebase].
- Domain is configured for Firebase authentication.

---

## ⚙️ Technologies Used
### Client
- **Frameworks/Libraries:**
  - React.js
  - Tailwind CSS
  - React Router
- **Other Packages:**
  - Firebase Authentication
  - Axios for API calls
  - React Icons for icons and UI enhancements

### Server
- **Environment:**
  - Node.js with Express.js
- **Database:**
  - MongoDB
- **Authentication:**
  - JSON Web Tokens (JWT)

### Deployment
- **Hosting:**
  - [firebase] for client-side
  - [vercel] for server-side

---

