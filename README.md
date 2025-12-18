# Countdown Timer & Chronometer

A simple and modular **Countdown and Chronometer** web application built with JavaScript.  
The app allows the user to switch between a chronometer (stopwatch) and a countdown timer, with full control over the flow and display.

This project was developed with a strong focus on **code organization**, **separation of responsibilities**, and **clean application flow**.

---

## 🚀 Features

### Chronometer
- Start, pause, resume and cancel
- Reset and return to the home screen
- Clear and responsive display

### Countdown
- Countdown based on:
  - A specific date
  - A custom time (in minutes)
- Almost same controls as the chronometer:
  - Pause
  - Cancel
  - Go to Home
- Smooth navigation between screens

---

## 🛠️ Technologies

- **HTML** – Structure
- **CSS** – Styling and layout
- **JavaScript (ES Modules)** – Application logic
- **Bootstrap** – UI components and responsiveness

---

## 📁 Project Structure

The project is organized in a modular way, with each part having a clear responsibility:
countdown
├── logic
│ ├── controller
│ │ ├── chronometerController.js
│ │ ├── countdownController.js
│ │ └── logicController.js
│ ├── display
│ │ ├── handleRadioInputs.js
│ │ ├── navigation.js
│ │ └── updateScreen.js
│ ├── engine
│ │ ├── chronometer.js
│ │ ├── countdown.js
│ │ └── mainEngine.js
│ ├── events
│ │ └── events.js
│ ├── formaters
│ │ ├── dateFormaters.js
│ │ └── textFormaters.js
│ └── state
│ └── state.js
├── index.js
├── index.html
└── style.css

---

## 🧠 What I Learned

- How to design a **clean and predictable application flow**
- How to format and handle **time values** (minutes, seconds, milliseconds)
- Better **modularization** and separation of concerns
- How to reuse a single engine (`setInterval`) without duplication
- Improving UI design and visual identity
- Using AI as a productivity tool during development

---

## ⚠️ Challenges

- Organizing files and folders in a scalable way
- Defining the correct flow between controllers, engine and UI
- Managing state transitions between screens
- Designing the countdown logic for different input types (date vs time)

---

## 🔮 Possible Improvements

- Support for larger countdown values (hours, days, months, years)
- Background countdown using `localStorage`
- Automatic navigation to the display screen if a countdown is already running
- Keyboard shortcuts
- Optional hidden controls (display-only mode)
- Theme switching (dark / light mode)

---

## ▶️ How to Run

1. Clone the repository
2. Open the `index.html` file in your browser

No build step required.

---

## 📌 Project Status

✅ Finished and fully functional  
🔧 Open to future improvements

---

## 👤 Author

Developed by **Emanuel dos Santos Bim de Oliveira**
