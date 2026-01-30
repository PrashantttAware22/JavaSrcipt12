# Calculator App

A simple and responsive **Calculator Web Application** built using **HTML, CSS (Grid), and JavaScript**. This project demonstrates DOM manipulation, event handling, and basic input validation without using any external libraries.

---

## 🚀 Features

* Basic arithmetic operations: `+`, `-`, `*`, `/`, `%`
* Clear all (`AC`) and delete last character (`Del`)
* Prevents invalid inputs like multiple operators in a row
* Responsive layout using **CSS Grid**
* Clean and minimal UI
* Uses JavaScript for dynamic calculations

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the calculator
* **CSS3 (Grid Layout)** – Responsive and clean layout
* **JavaScript (ES6)** – Calculator logic and DOM handling

---

## 📂 Project Structure

```
calculator/
│
├── index.html        # Calculator UI structure
├── style.css         # Styling using CSS Grid
├── calculator.js     # Calculator logic
└── README.md         # Project documentation
```

---

## 📌 How It Works

1. All calculator buttons are selected using a common class.
2. When a button is clicked, its value is read using `innerText`.
3. JavaScript handles:

   * Clearing the input
   * Deleting the last character
   * Evaluating expressions
   * Preventing invalid operator usage
4. The result is displayed in a read-only input field.

---

## 🧠 Key Logic Used

```js
let lastChar = string.slice(-1);
if (operators.includes(lastChar) && operators.includes(value)) return;
```

This prevents entering two operators consecutively (e.g., `++`, `**`).

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. Start calculating 🎉

---

## 📷 Preview

> You can add a screenshot of the calculator UI here for better presentation.

---

## 📚 Learning Outcomes

* Understanding **CSS Grid** for layouts
* Handling user events in JavaScript
* Basic input validation logic
* DOM manipulation

---

## 🔒 Note

* The project uses `eval()` for simplicity. In production-level applications, a custom parser is recommended for security reasons.

---

## 🙌 Author

**Prashant**
Computer Science Student
Learning Web Development & DSA

---

## ⭐ Feedback

If you find this project helpful, feel free to star it and suggest improvements!
