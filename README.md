# Roshan Tamang — Full-Stack Developer Portfolio

My personal portfolio, built with React and Vite. It showcases my full-stack and frontend projects, the technologies I work with, and a way to get in touch.

**Live site:** _add your deployed link here_

## Tech stack

- **This site:** React 19, Vite, CSS3 (no UI frameworks)
- **Skills shown:** React, Tailwind, Python, Django REST Framework, PostgreSQL, MySQL
- **Contact form:** [Formspree](https://formspree.io) (optional; falls back to email)
- **Fonts:** Syne and DM Sans via Google Fonts

## Features

- Dark and light themes that remember your choice and follow your system setting on first visit
- Responsive layout for mobile, tablet, and desktop
- Smooth-scroll navigation with active-section highlighting
- Project cards with live demo and source links
- Working contact form with sending, success, and error states

## Getting started

```bash
git clone https://github.com/rt0846092-hash/RoshanPortfolio.git
cd RoshanPortfolio
npm install
npm run dev
```

### Contact form setup (optional)

1. Create a free form at [formspree.io](https://formspree.io) and copy its ID (the part after `/f/`).
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`.
3. When deploying, add the same variable in your Vercel or Netlify project settings.

Without an ID, the form opens the visitor's email app with the message filled in.

## Project structure

```
src/
├── App.jsx            # Layout and theme state
├── components/        # Navbar, Hero, About, Projects, Contact, Footer
└── assets/            # Profile photo
```

## Contact

- Email: rt0846092@gmail.com
- LinkedIn: [roshan-tamang-663015283](https://www.linkedin.com/in/roshan-tamang-663015283)
- GitHub: [rt0846092-hash](https://github.com/rt0846092-hash)
