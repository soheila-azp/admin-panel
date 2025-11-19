# React Admin Panel

A modern, production-ready **Admin Panel** built with React, React Router, Redux, and React Query.  
The project includes a theming system, global state management, toast notifications, code highlighting, and a clean, scalable architecture suitable for dashboards, internal tools, and admin interfaces.

---

## 🚀 Features

- ⚛️ **React 18 + createRoot** – Modern React rendering API
- 🧭 **Client-side Routing** with `react-router-dom`
- 🧠 **Global State Management** using Redux Toolkit store
- 📡 **Server State Management** with `@tanstack/react-query`
- 🎨 **Theme System** via custom `ThemeContext`
- 🔔 **Toast Notifications** using `react-hot-toast`
- 💻 **Lazy-loaded App** with Suspense + custom Spinner fallback
- 🧾 **Code Highlighting** using PrismJS (`prism-tomorrow` theme)
- 🖱 **Smooth Scrolling Experience** via `react-perfect-scrollbar`
- 💅 **SCSS-based Styling** with core and custom styles
- 📱 **Responsive Layout** ready for dashboards and admin panels
- 🧩 **Modular Structure** for easy extension and maintenance
- 🔧 **Service Worker Setup** (currently unregistered, PWA-ready if needed)

---

## 🛠 Tech Stack

**Core:**

- React
- React DOM
- React Router DOM
- Redux (`@reduxjs/toolkit` / `react-redux`)
- @tanstack/react-query

**UI & Styling:**

- SCSS (`core.scss`, `style.scss`)
- Custom theme context (`ThemeContext`)
- PrismJS (syntax highlighting)
- React Perfect Scrollbar
- Custom Spinner / Fallback screen
- Feather Icons font

**UX & Utilities:**

- react-hot-toast
- Custom ripple-button component
- Service worker (configurable)

---

## 📁 Project Structure (High-Level)

```bash
src/
  ├─ App.jsx
  ├─ index.jsx
  ├─ redux/
  │   └─ store.js
  ├─ configs/
  │   └─ themeConfig.js
  ├─ utility/
  │   └─ context/
  │       └─ ThemeColors.jsx
  ├─ @core/
  │   ├─ components/
  │   │   ├─ spinner/
  │   │   │   └─ Fallback-spinner.jsx
  │   │   └─ ripple-button.jsx
  │   ├─ assets/
  │   │   └─ fonts/feather/
  │   └─ scss/
  │       └─ core.scss
  ├─ assets/
  │   └─ scss/
  │       └─ style.scss
  ├─ serviceWorker.js
  └─ ...
