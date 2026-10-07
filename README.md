# Portfolio - React + Vite

A personal Portfolio website built with React and Vite, using Bootstrap, custom CSS, and Font Awesome icons.

It is a single-page application (SPA) that contains the following sections: Home, About, Services, Featured, Bio, Client, Testimonials, Contact, and Footer.

---

## Features

- Fully responsive design.
- Reusable React components.
- Bootstrap 5 with custom CSS.
- Font Awesome icons bundled locally.
- Interactive map (MapView).
- Client and Testimonials sections.
- Contact form.
- Fast build and dev server with Vite.

---

## Tech Stack

- React 18 (JSX)
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- CSS3
- Font Awesome 6
- ESLint

---

## Project Structure

    reBuildWithvite
    ├─ eslint.config.js
    ├─ index.html
    ├─ package-lock.json
    ├─ package.json
    ├─ public/
    │  ├─ favicon.svg
    │  └─ icons.svg
    ├─ README.md
    ├─ src/
    │  ├─ App.css
    │  ├─ App.jsx
    │  ├─ assets/
    │  │  ├─ css/
    │  │  │  ├─ all.min.css
    │  │  │  ├─ bootstrap.min.css
    │  │  │  └─ style.css
    │  │  ├─ hero.png
    │  │  ├─ img/
    │  │  ├─ js/
    │  │  │  └─ bootstrap.bundle.min.js
    │  │  ├─ react.svg
    │  │  ├─ vite.svg
    │  │  └─ webfonts/
    │  ├─ components/
    │  │  ├─ About.jsx
    │  │  ├─ Bio.jsx
    │  │  ├─ Client.jsx
    │  │  ├─ Contact.jsx
    │  │  ├─ Featured.jsx
    │  │  ├─ Footer.jsx
    │  │  ├─ Header.jsx
    │  │  ├─ MapView.jsx
    │  │  ├─ Navbar.jsx
    │  │  ├─ Services.jsx
    │  │  └─ Testimonials.jsx
    │  ├─ index.css
    │  ├─ main.jsx
    │  └─ pages/
    │     └─ SPA.jsx
    └─ vite.config.js

---

## Getting Started

### 1. Install dependencies

    npm install

### 2. Start the development server

    npm run dev

### 3. Build for production

    npm run build

### 4. Preview the production build

    npm run preview

### 5. Lint the code

    npm run lint

---

## Available Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| npm run dev       | Start the development server    |
| npm run build     | Build for production            |
| npm run preview   | Preview the production build    |
| npm run lint      | Run ESLint to check code quality|

---

## Customization

- To change text or images: edit files in `src/components` and replace images in `src/assets/img`.
- To change colors or fonts: edit `src/assets/css/style.css`.
- To add a new section: create a component in `src/components`, then import it in `src/pages/SPA.jsx`.
- To change Vite settings: edit `vite.config.js`.

---

## License

This project is open-source and available for personal and commercial use.

---

## Contact

- Email: yazanabudoha@gmail.com
- GitHub: https://github.com/eng-yazandoha

---

Made with love using React + Vite.