# Web Projects Archive

Consolidated collection of beginner vanilla HTML/CSS/JS practice projects. Originally separate repos, now merged for cleaner GitHub profile.

## Projects

| Project | Description | Live Demo |
|---------|-------------|-----------|
| [`animation-projects-01`](animation-projects-01/) | CSS/JS animation experiments | — |
| [`bmi-calculator`](bmi-calculator/) | BMI calculator (Frontend Mentor) | — |
| [`calculator-application`](calculator-application/) | Web calculator built with vanilla HTML/CSS/JS | — |
| [`contact-form-main-signup`](contact-form-main-signup/) | Frontend Mentor contact form signup page (vanilla HTML/CSS/JS) | — |
| [`efiep3.projects`](efiep3.projects/) | Project showcase / portfolio layout | — |
| [`flick-projects-website`](flick-projects-website/) | Multi-page site with sign-in/sign-up | — |
| [`social-links-profile-main`](social-links-profile-main/) | Social links profile card (Frontend Mentor) | — |
| [`theCodeReport.projects`](theCodeReport.projects/) | Project listing / blog-style layout | — |
| [`Time-CMOS-projects-01`](Time-CMOS-projects-01/) | Time/CMOS themed project page | — |
| [`todo-list-pwa-app`](todo-list-pwa-app/) | Todo list PWA with service worker | — |

10 projects total (8 consolidated 2026-11-12 + calculator-application + contact-form-main-signup).

## Structure

Each project is a self-contained static site in its own folder. No shared dependencies, no build step.

```bash
# Preview any project
cd <project-folder>
python3 -m http.server 5501
# or VS Code Live Server
```

## Notes

- `todo-list-pwa-app/` has a `package.json` — run `npm install && npm start` (serves `public/` on port 5500)
- All projects are vanilla HTML/CSS/JS unless noted
- Original individual repos: `mak1143/<project-name>` (now deprecated)

---

*Consolidated from 8 separate repos into this monorepo for portfolio hygiene.*