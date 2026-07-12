# 🎨 Color Palette Picker

A simple and interactive Color Palette Picker web application built using **React, Vite, and CSS**.  
It allows users to pick colors from a list, preview them instantly inside a dynamic box container, track active selections with a border ring, and reset the palette view.

---

## 🚀 Features

- 📱 Responsive grid layout of colored button pills
- ✔️ Dynamic checkmark status icon on the active button
- ⭕ Precise outline rings that match each button color perfectly
- 🖥️ Center-aligned visual preview box that changes colors in real-time
- 🔍 Placeholder graphic inside the box when no color is selected yet
- 🔄 Instant state restart button featuring a custom reload icon

---

## 📸 Screenshot

![Color Picker Screenshot](screenshots/screenshot_loclahost.png)

---

## 🛠️ Tech Stack

- React (Functional Components & Hooks)
- Vite Build Engine
- Custom CSS3 Layouts
- React Icons (Material Design package)

---

## 📂 Project Structure

```text
color-palette-app/
├── src/
│   ├── components/
│   │   ├── ColorButton.jsx
│   │   └── ColorPreview.jsx
│   ├── screenshots/
│   │   └── screenshot_localhost.png
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html

```

---

## 📌 How It Works

Colors are stored in a JavaScript array of strings:

```js
["Red", "Blue", "Green", "Yellow", "Purple"]
```

The application uses a centralized React state hook to watch user choices:

```js
const [color, setcolor] = useState(null);
```

Whenever a button is pressed, the state updates, triggering the preview box background color and text to match immediately.

---

## 🎯 Learning Goals

This project helps practice:

* Component modularization and custom props
* React `useState` state hook mechanics
* Array iterating inside JSX elements using `.map()`
* Conditional class naming and style values in React

---

## 📄 License

This project is open-source and free to use.
