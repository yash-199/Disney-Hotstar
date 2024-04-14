# Hotstar-Disney Clone
This project is a clone of the Hotstar-Disney platform, built using React.js, JavaScript, Firebase for authentication, Tailwind CSS for styling, and various other libraries for specific functionalities.

# Technologies Used
**React.js
JavaScript
Firebase (Authentication)
Tailwind CSS
React Icons (for sidebar icons)
React Phone Input-2 (for phone number verification)
React Toastify (for alerts)
Modal (for opening modals)
YouTube API (for playing trailers)
React Router DOM (for navigation)**


# bash
Copy code
git clone https://github.com/your-username/hotstar-disney-clone.git
cd hotstar-disney-clone
Install dependencies:

# bash
Copy code
npm install
Create a Firebase project and set up Firebase Authentication. Update the Firebase configuration in src/firebase/firebase.js with your Firebase project's configuration.

# Install React Icons:

# bash
Copy code
npm install react-icons
Install React Phone Input-2:

# bash
Copy code
npm install react-phone-input-2 --save
Install React Toastify:

# bash
Copy code
npm install react-toastify --save
Install Modal:

# bash
Copy code
npm install react-modal
Install YouTube:

# bash
Copy code
npm install react-youtube
Install React Router DOM:

# bash
Copy code
npm install react-router-dom
Usage
Start the development server:

# bash
Copy code
npm start
# Open http://localhost:3000 to view it in your browser.

The main page will be displayed. Clicking on the "Watch" button without logging in will show a warning to please log in.

After logging in, when you click the "Watch" button, a modal will open to allow you to watch the trailer of the selected movie or show.

# Project Structure
src/components: Contains all React components.
src/firebase: Firebase configuration and setup.
src/pages: Different pages of the application (e.g., Home, Login, Watch).
src/App.js: Main component rendering the application.
