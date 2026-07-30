# 🎓 Student Result Portal
### Web Application Frameworks Mini Project
### Server-Side Rendering (SSR) using Express.js & EJS

---

## 📖 Project Overview

The **Student Result Portal** is a Server-Side Rendering (SSR) web application developed using **Node.js**, **Express.js**, and **EJS**. It allows users to search for a student's result by entering the student's name.

The server processes the request, searches the student database, and dynamically generates an HTML page displaying the student's result. If the student is not found, an error message and the complete student list are displayed.

This project demonstrates the concept of **Server-Side Rendering (SSR)** where HTML pages are generated on the server before being sent to the client's browser.

---

# 🎯 Objectives

- Understand Server-Side Rendering (SSR)
- Learn Express.js Routing
- Learn EJS Template Engine
- Pass data from server to client
- Display dynamic HTML pages
- Implement search functionality
- Apply responsive CSS and Glassmorphism UI

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| EJS | Template Engine |
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Server Logic |

---

# 📁 Project Structure

```
Student-Result-Portal/
│
├── app.js
├── package.json
├── node_modules/
│
├── routes/
│   └── routes.js
│
├── data/
│   └── students.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── search.ejs
│   ├── result.ejs
│   ├── students.ejs
│   │
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
└── README.md
```

---

# ⚙️ Installation

## Step 1

Install Node.js

https://nodejs.org/

---

## Step 2

Open Terminal

```
npm init -y
```

---

## Step 3

Install Dependencies

```
npm install express ejs
```

(Optional)

```
npm install --save-dev nodemon
```

---

## Step 4

Run the project

```
node app.js
```

or

```
npm run dev
```

---

## Step 5

Open Browser

```
http://localhost:3000
```

---

# 🌐 Website Pages

## 🏠 Home Page

Purpose

- Welcome page
- Project introduction
- Navigation
- Buttons to Search and Student List

---

## 🔍 Search Page

Purpose

- Search student by name
- Input field
- Search button

---

## 📄 Result Page

Purpose

Displays

- Student Name
- Subject
- Grade
- Grade Comment

If student not found

Displays

```
Student Not Found

Please check the Student List.
```

---

## 👨‍🎓 Student List Page

Purpose

Displays all available students.

Each card contains

- Student Name
- Grade

---

# 🔄 Working Flow

```
User Opens Website
        │
        ▼
Home Page
        │
        ▼
Search Student
        │
        ▼
Express.js receives request
        │
        ▼
Search student from students.js
        │
 ┌──────┴─────────┐
 │                │
 ▼                ▼
Found         Not Found
 │                │
 ▼                ▼
Result Page    Error Message
 │                │
 ▼                ▼
Display Grade  Show Student List
```

---

# 📦 Student Data

The application stores **20 demo students** inside

```
data/students.js
```

Each student contains

```
{
    name: "Rithvik Nag",
    grade: "O",
    comment: "Outstanding Performance 🌟"
}
```

---

# 🎓 Grade Comments

| Grade | Comment |
|--------|----------|
| O | Outstanding Performance 🌟 |
| A+ | Excellent Work 🎉 |
| A | Very Good Performance 👍 |
| B+ | Good Job 👏 |
| B | Keep Improving 📚 |
| C | Average Performance |
| D | Needs Improvement |

---

# 🎨 UI Features

- Modern Glassmorphism Design
- Animated Gradient Background
- Responsive Layout
- Navigation Bar
- Search Box
- Grade Badges
- Student Cards
- Hover Effects
- Fade Animation
- Mobile Friendly

---

# 💡 Server-Side Rendering (SSR)

This application uses **Server-Side Rendering (SSR)**.

Instead of sending an empty HTML page and loading data later, the server performs the following steps:

1. Receives the user request.
2. Searches the student data.
3. Generates HTML using EJS.
4. Sends the complete HTML page to the browser.

Advantages

- Faster first page load
- Better SEO
- Secure data processing
- Dynamic content generation

---

# 📋 Features

✔ Home Page

✔ Search Student

✔ Student Result

✔ Student List

✔ Grade Comments

✔ Error Handling

✔ Navigation Bar

✔ Responsive Design

✔ Glassmorphism UI

✔ Server Side Rendering

---

# 🚀 Future Enhancements

- Login System
- Admin Dashboard
- Database Integration (MongoDB/MySQL)
- Add/Edit/Delete Student
- Student Image
- Result PDF Download
- Search Suggestions
- Grade Statistics Dashboard
- Dark/Light Theme
- Authentication

---

# 📚 Learning Outcomes

After completing this project, students will understand

- Express.js
- Routing
- Middleware
- EJS Templates
- Dynamic Rendering
- Server Side Rendering
- Form Handling
- CSS Styling
- Responsive Web Design
- Project Structure

---

# 👨‍💻 Developed By

**Name:** ______________________

**Course:** B.Tech CSE

**Subject:** Web Application Frameworks

**Technology:** Node.js, Express.js, EJS

**Project Type:** Mini Project (SSR)

---

# 📄 Conclusion

The Student Result Portal successfully demonstrates the concept of **Server-Side Rendering (SSR)** using **Express.js** and **EJS**. The application dynamically generates HTML pages on the server based on user input and provides a clean, responsive, and user-friendly interface for viewing student results.

This project serves as a practical implementation of Express.js routing, EJS templating, and server-side data rendering, making it an ideal academic project for learning modern web application development.