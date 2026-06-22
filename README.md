
# Smart Expense Tracker

A simple and modern web-based Expense Tracker built using HTML, CSS, and JavaScript.  
It helps users track income, expenses, balance, and manage budget limits efficiently using local storage.

## Features

1-User Login & Signup (localStorage based)
2-Add, delete, and manage expenses
3-Dashboard with income, expense, and balance
4-Expense history table
5-Search expenses in real time
6-Budget limit warning system
7-Data saved in browser (localStorage)
8-Responsive design for mobile and desktop

## Tech Stack

- HTML5
- CSS3
- JavaScript 
- Google Fonts (Poppins)
- LocalStorage API

## Project Structure


Smart-Expense-Tracker/
│
├── index.html        # Main dashboard
├── login.html        # Login page
├── signup.html       # Signup page
│
├── style.css         # All styling
├── app.js            # Main JavaScript logic
│
└── README.md         # Project documentation




## Login System

* User enters email and password
* Username is extracted from email
* Saved using localStorage


This project uses browser localStorage for:

* User information
* Income
* Expenses
* Budget limit

Example:


localStorage.setItem("expenses", JSON.stringify(expenses));


## Budget Limit Feature

* User can set a monthly budget limit
* If expenses exceed the limit, a warning is displayed

## Future Improvements

* Real authentication system (Firebase or Node.js backend)
* Data visualization with charts (Chart.js)
* Mobile app version
* Cloud database support
* Multi-user system

