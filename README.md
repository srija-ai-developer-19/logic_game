# 🍔 Food Memory Logic Game

A fun and interactive Food Emoji Memory Matching Game built with HTML, CSS, and JavaScript. Test your memory by matching same food pairs!

## 🎮 Demo

Match 8 pairs of food emojis - 🍔 🍕 🍟 🍩 🍦 🌮 🍣 🍰

## ✨ Features

- 🧠 **Memory Logic** - Match same food emojis
- 🔄 **Shuffle Logic** - Cards shuffle every time
- 🔢 **Moves Counter** - Counts how many moves you used
- ✅ **Match Tracker** - Shows 0/8 to 8/8 progress
- 🎨 **Purple Theme** - Same as FoodMunch
- 📱 **Responsive** - Works on mobile & desktop
- 🏆 **Win Alert** - Win message with moves
- 🔒 **Lock Logic** - Prevents double clicking bug

## 🛠️ Tech Stack

- **HTML5** - Game board structure
- **CSS3** - Card design, Grid, Animations
- **JavaScript (Vanilla JS)** - Game Logic
- **Bootstrap 4.5.2** - Layout

## 📁 Folder Structure

## 📂 VS Code File Names

| File | Save As |
|------|---------|
| HTML | `index.html` |
| CSS | `style.css` |
| JS | `script.js` |

> All 3 files in SAME folder!

## 🚀 How to Run

1. Create folder `memory-game`
2. Create 3 files inside
3. Paste respective codes
4. Right click `index.html` > Open with Live Server
5. Start Matching!

## 🧩 Game Logic Explained (JS)

### `shuffle()`
```js
array.sort(() => Math.random() - 0.5)
if(matched === 8) -> Win!
