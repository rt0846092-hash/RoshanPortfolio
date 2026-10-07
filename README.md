# Roshan Tamang — Full-Stack Developer Portfolio

My personal portfolio, built with React and Vite. It shows the services I offer as a freelance full-stack developer, the projects I've built, and how to get in touch.

**Live site:** [roshan-portfolio-rho-three.vercel.app](https://roshan-portfolio-rho-three.vercel.app)

## Tech stack

- **This site:** React 19, Vite, CSS3 (no UI frameworks)
- **Skills shown:** React, Tailwind, Python, Django REST Framework, PostgreSQL, MySQL
- **Contact form:** [Web3Forms](https://web3forms.com), emails messages to my inbox
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

### Contact form

Messages from the contact form are emailed to rt0846092@gmail.com through [Web3Forms](https://web3forms.com). The access key lives in `src/components/Contact.jsx`; it is public by design and can only deliver mail to the inbox it was created for. A hidden honeypot field filters out spam bots.

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
