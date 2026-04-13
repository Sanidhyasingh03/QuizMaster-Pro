# 🎯 QuizMaster Pro 

**QuizMaster Pro** is an interactive quiz management system built as an Object-Oriented Programming in Java (OOPJ) project. It features a robust Java-based Command Line Interface (CLI) and a sleek, modern Web Graphical User Interface (GUI) designed with a glassmorphism aesthetic. 

---

## ✨ Features

* **🛠️ Create Custom Quizzes:** Easily add new quizzes with customizable multiple-choice questions and define the correct answers.
* **📝 Take Quizzes:** Test your knowledge! Answer questions and receive an instant, calculated score at the end.
* **🔍 View Quiz Details:** Review all the questions, options, and correct answers for any created quiz.
* **🗂️ List Quizzes:** Quickly view a directory of all available quizzes in the system.
* **Dual Interface:** * **Java Console App:** Fast, lightweight, and demonstrates core OOP principles (Encapsulation, Collections, Object Mapping).
  * **Web Dashboard:** A highly interactive, fully responsive UI built with pure HTML, CSS, and JS.

---

## 💻 Tech Stack

### Core Logic (OOPJ)
* **Java:** Utilizes standard Java utilities, `Scanner` for input handling, and `HashMap`/`ArrayList` for fast data storage and retrieval.

### Web Frontend
* **HTML5:** Semantic structure.
* **CSS3:** Custom styling, flexbox/grid layouts, keyframe animations, and a modern dark theme with blur effects.
* **JavaScript:** DOM manipulation, event handling, and state management.

---

## 🚀 How to Run the Project

### Option 1: Run the Java CLI Application
To run the terminal-based application, make sure you have the Java Development Kit (JDK) installed.

1. Open your terminal or command prompt.
2. Navigate to the directory containing the `QuizGame.java` file.
3. Compile the Java file:
   ```bash
   javac QuizGame.java
4. Run the compiled application:
   java QuizGame
5. Follow the on-screen prompts to create, take, view, list, or exit.

🏗️ Core Project Structure
Java Classes
QuizGame: The main driver class that handles the CLI menu loop and stores all quizzes.

Quiz: Represents a single quiz, containing a name and a list of Question objects.

Question: Represents a single question, encapsulating the question text, multiple choices, and the correct answer index.

Web Files
index.html: The main layout, dashboard cards, and dynamic sections.

style.css: Contains the dark gradient theme, responsive media queries, and layout styling.

script.js: The brain of the frontend, managing active sections, appending dynamic HTML, and checking correct answers.

🎓 Academic Info
This project was developed as part of an Object-Oriented Programming in Java (OOPJ) curriculum. It demonstrates the practical application of classes, objects, standard data structures, and user-driven logic flow.