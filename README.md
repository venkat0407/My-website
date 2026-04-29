# 🚀 Personal Portfolio Website

A clean, modern, and fully responsive personal portfolio website built with **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5**.

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML file — page structure & content
├── style.css        # External stylesheet — all custom styles & themes
├── script.js        # JavaScript — interactions, cursor, animations
└── README.md        # Project documentation (this file)
```

---

## ✨ Features

### 🎨 Design
- Dark theme with neon accent (`#c8ff00`)
- Animated gradient avatar ring
- Floating blob background animations
- Smooth page fade-in on load

### 🖱️ Custom Cursor
- Default: Outlined circle that follows the mouse with a smooth lag effect
- **On card hover** → cursor expands into a larger red circle
- **On button hover** → custom cursor hides and native hand pointer appears

### 🃏 Interactive Cards
- Clicking any card changes its **background color** (unique per card)
- A **ripple effect** fires from the center of the card on click
- Click again to **deselect** and revert the color

### 🔘 Button Interactions
- Nav buttons flash **bright yellow** on click
- Action buttons flash **red** on click, then revert

### 📜 Smooth Scrolling
- All navigation buttons scroll smoothly to their target section
- Active section is **highlighted in the navbar** as you scroll

---

## 🅱️ Bootstrap Components Used

| Component | Where Used |
|-----------|------------|
| **Navbar** (`navbar`, `navbar-expand-lg`, `navbar-toggler`) | Top navigation bar — collapses to hamburger on mobile |
| **Grid System** (`row`, `col-lg-*`, `col-sm-*`, `col-*`) | Skills section (4 columns), Hobbies section (6 columns) |
| **Badge** (`.badge`) | Skill tags inside each skill card (e.g. React, Python, AWS) |

---

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero / About** | Name, avatar, bio, and call-to-action buttons |
| 02 | **Skills** | 4 skill cards — Frontend, Backend, UI/UX, DevOps |
| 03 | **Education** | Timeline of degrees and certifications |
| 04 | **Hobbies** | 6 hobby cards with emoji icons |
| 05 | **Contact** | Email, LinkedIn, and GitHub buttons |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styling, animations, CSS variables |
| JavaScript (ES6+) | Interactivity, cursor, scroll behavior |
| Bootstrap 5.3 | Responsive grid, navbar, badges |
| Google Fonts | `Syne` (headings) + `DM Mono` (body text) |

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| **Desktop** (`≥ 992px`) | Full layout — side-by-side hero, 4-col skills, 6-col hobbies |
| **Tablet** (`576px – 991px`) | 2-col skills, 3-col hobbies, stacked hero |
| **Mobile** (`< 576px`) | Single column, hamburger nav, smaller avatar |

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

Or simply download the ZIP and extract it.

### 2. Open in Browser

Just open `index.html` in any modern browser — no build tools or server required.

```bash
# On Mac
open index.html

# On Windows
start index.html

# Or use VS Code Live Server extension
```

---

## ✏️ How to Customize

### Change Your Name
In `index.html`, find the hero section and update:
```html
<h1 class="hero-name">Your <span class="highlight">Name</span><br/>Here</h1>
```

### Add Your Photo
In `index.html`, inside `.avatar-ring`, comment out the initials div and use your image:
```html
<!-- Remove this: -->
<div class="avatar-initials" id="avatarInitials">YN</div>

<!-- Add this instead: -->
<img src="your-photo.jpg" alt="Your Name" class="avatar-photo"/>
```

### Update Your Bio
Find `.hero-bio` in `index.html` and replace the paragraph text.

### Change Avatar Initials
Update the two-letter text inside:
```html
<div class="avatar-initials" id="avatarInitials">YN</div>
```

### Change Accent Color
In `style.css`, update the CSS variable at the top:
```css
:root {
  --accent: #c8ff00;  /* Change this to any color */
}
```

### Change Card Click Colors
Each card has a `data-color` attribute. Update it to any hex color:
```html
<div class="card skill-card" data-color="#ff6b6b">
```

### Add/Edit Skills
Copy any `.col-lg-3` block inside the Skills section and update the icon, title, description, and badge tags.

### Update Contact Links
Find the contact buttons and replace the `alert(...)` with your actual URLs:
```html
<button onclick="window.open('mailto:you@email.com')">📧 Email Me</button>
<button onclick="window.open('https://linkedin.com/in/yourprofile')">🔗 LinkedIn</button>
<button onclick="window.open('https://github.com/yourusername')">🐙 GitHub</button>
```

---

## 📋 Requirements Checklist

- [x] Name displayed on the page
- [x] Photo / Avatar present in the hero section
- [x] Bio paragraph about yourself
- [x] External CSS file (`style.css`) linked and used
- [x] At least one JavaScript interaction (cursor, card clicks, button flashes, scroll spy)
- [x] At least one Bootstrap component (Navbar + Grid + Badges)
- [x] Responsive on both desktop and mobile

---

## 📄 License

This project is open source and free to use for personal portfolios.  
Feel free to modify and make it your own!

---

> Built with ❤️ using HTML, CSS, JavaScript & Bootstrap 5
