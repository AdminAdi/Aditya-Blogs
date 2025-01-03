# Aditya Blogs  
## Comprehensive Blog App Built with the MERN Stack and Firebase Authentication  

Welcome to the **Aditya Blogs** repository! This blog application empowers users to create, manage, and explore blogs while ensuring secure authentication through Google, powered by Firebase. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this app is designed to provide a seamless blogging experience.  

---

## 🚀 Features  

- **Google Authentication:**  
  Secure and hassle-free sign-in using Firebase Google Authentication.  
- **Create and Share Blogs:**  
  Write and publish engaging blogs effortlessly with an intuitive editor.  
- **Edit and Update:**  
  Modify your blogs as needed with the edit functionality.  
- **Delete Blogs:**  
  Remove outdated or unwanted blogs at your convenience.  
- **Explore Blogs:**  
  Discover blogs shared by other users and gain inspiration from their content.  
- **Responsive Design:**  
  A sleek and user-friendly interface optimized for all devices.  

---

## 📸 Screenshots  

![Home Page](./ss/Screenshot%202024-12-30%20210348.png)  
*Homepage showcasing the latest blogs.*  

![Login/Sign-Up](./ss/Screenshot%202024-12-30%20210403.png)  
*Blog creation interface with rich editing options.*  

![Footer](./ss/Screenshot%202024-12-30%20210417.png)  
*Explore page to discover blogs from other users.*  

---

## 🛠️ Tech Stack  

### Frontend  
- **React.js:** Frontend framework for building an interactive UI.  
- **CSS:** For styling and responsive design.  

### Backend  
- **Node.js:** JavaScript runtime for server-side logic.  
- **Express.js:** Backend framework to manage REST APIs.  

### Database  
- **MongoDB:** NoSQL database to store blog data securely.  

### Authentication  
- **Firebase:** Google Authentication for secure login functionality.  

---

## 📝 Getting Started  

Follow the steps below to set up **Aditya Blogs** on your local machine:  

### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/AdminAdi/Aditya-Blogs.git  
cd Aditya-Blogs  
```  

### 2️⃣ Install Dependencies  
#### Backend  
```bash  
cd server  
npm install  
```  

#### Frontend  
```bash  
cd client  
npm install  
```  

### 3️⃣ Configure Firebase Authentication  
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
- Enable Google Authentication in the project settings.  
- Replace the Firebase config details in the frontend code (`client/src/firebase.js`).  

### 4️⃣ Set Up MongoDB  
- Use MongoDB Atlas or install a local MongoDB server.  
- Add your MongoDB URI in the `.env` file located in the `server` folder:  
  ```env  
  MONGO_URI=your_mongodb_connection_string  
  ```  

### 5️⃣ Run the Application  
#### Start the Backend Server  
```bash  
cd server  
npm start  
```  

#### Start the Frontend Development Server  
```bash  
cd client  
npm start  
```  

### 6️⃣ Access the Application  
Visit [http://localhost:3000](http://localhost:3000) in your browser to explore the app.  

---

## 📂 Project Structure  

```
aditya-blogs  
├── client  
│   ├── public  
│   └── src  
│       ├── components  
│       ├── pages  
│       ├── firebase.js  
│       └── App.js  
├── server  
│   ├── controllers  
│   ├── models  
│   ├── routes  
│   └── app.js  
├── .env  
├── README.md  
└── package.json  
```  

---

## 🤝 Contributing  

We welcome contributions from the community to enhance the features and improve the app.  
- **Fork** the repository.  
- Create a new **branch** for your feature.  
- Submit a **pull request** for review.  

---

## 🌟 Acknowledgments  

A huge thanks to:  
- The **MERN** community for their excellent resources.  
- **Firebase** for its robust authentication services.  
- All contributors who have supported this project.  

---

Feel free to explore, enhance, and contribute to **Aditya Blogs**. Happy blogging! 🎉
