# React Form Experiments 🚀

This project contains two frontend experiments implemented using
**React** and **Material UI**.

------------------------------------------------------------------------

## 📌 Experiment 1: Handling Forms Using Controlled Components

### 🎯 Aim

To create and handle forms in a frontend application using controlled
components in React.

### 🧠 Theory

Controlled components are React components where form data is handled
using the component's state.\
This provides complete control over user input and form behavior.

------------------------------------------------------------------------

### 🛠 Features Implemented

-   First Name
-   Last Name
-   Date of Birth
-   Gender (Radio Buttons)
-   Skills (Checkboxes)
-   Address (Text Area)
-   State (Dropdown)
-   Submit and Cancel buttons
-   Alert showing submitted data

------------------------------------------------------------------------

### ⚙️ Implementation

-   Used `useState()` for managing form data
-   All inputs are controlled components
-   Form submission handled using `onSubmit`
-   Form reset functionality implemented using Cancel button

------------------------------------------------------------------------

# 📌 Experiment 2: Client-Side Form Validation

### 🎯 Aim

To validate form inputs on the client side before submission.

### 🧠 Theory

Client-side validation ensures correctness of user data and provides
immediate feedback without server interaction.

------------------------------------------------------------------------

## 🛠 Fields Implemented

-   Email ID
-   Password

------------------------------------------------------------------------

## 📧 Email Validation Rules

-   Must start with a letter
-   Can contain letters, numbers, dot (.) and underscore (\_)
-   Dot cannot appear at the beginning or consecutively
-   Must belong to one of the approved domains:

cumail.in\
cuchd.in\
google.in\
google.uk\
google.eu\
google.ca\
google.us\
cu.edu.in\
punjab.gov.in

------------------------------------------------------------------------

### 🔐 Email Regex Used

``` js
/^[A-Za-z][A-Za-z0-9]*([._][A-Za-z0-9]+)*@(cumail\.in|cuchd\.in|google\.in|google\.uk|google\.eu|google\.ca|google\.us|cu\.edu\.in|punjab\.gov\.in)$/
```

------------------------------------------------------------------------

## 🔐 Password Validation Rules

Password must:

1.  Start with a Capital Letter\
2.  Contain at least one lowercase letter\
3.  Contain at least one number\
4.  Contain at least one special character (!@#\$%\^&\*)\
5.  Be at least 5 characters long

------------------------------------------------------------------------

### 🔐 Password Regex Used

``` js
/^[A-Z](?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/
```

------------------------------------------------------------------------

## 🛠 Tech Stack

-   React JS
-   Material UI
-   JavaScript (ES6)
-   HTML5
-   CSS3

------------------------------------------------------------------------

##  Screenshots
### Exp 5.1
###  Dashboard Page
![Dashboard](./screenshots/Dashboard.png)

###  Loading State
![Dashboard-Loading](./screenshots/Dashboard-Loading.png)

### Exp 5.2
###  About-Loading Page
![About-Loading](./screenshots/About-Loading.png)
###  About Page
![About-Page](./screenshots/About-Page.png)
###  Contact-Loading Page
![Contact-Loading](./screenshots/Contact-Loading.png)
###  Contact Page
![Contact-Page](./screenshots/Contact-Page.png)
###  Home-Loading Page
![Home-Loading](./screenshots/Home-Loading.png)
###  Home Page
![Home-Page](./screenshots/Home-Page.png)


## 🚀 How To Run The Project

### 1️⃣ Clone the repository

git clone `<your-repository-link>`{=html}

### 2️⃣ Install dependencies

npm install

### 3️⃣ Start the project

For Vite: npm run dev

------------------------------------------------------------------------

## ✅ Learning Outcomes

-   Understanding controlled components in React
-   Managing form state using useState
-   Implementing client-side validation
-   Writing and understanding regular expressions
-   Restricting domain-based email validation

------------------------------------------------------------------------

## 👨‍💻 Author

Agampal Singh
