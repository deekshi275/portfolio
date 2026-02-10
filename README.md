# Personal Portfolio — DEEKSHITH BH



---

## Theme of the Project (For Interview)

**If the interviewer asks: "What is the theme of this project?" or "How would you describe the design?" — you can say:**

> **"The theme is a terminal or hacker-style aesthetic.**  
> The whole site is designed to look like a developer’s terminal or command-line interface. The background is dark, the text uses a monospace font (JetBrains Mono), and the accent color is green — similar to classic terminal and coding environments.  
>  
> The hero section is laid out like a **terminal window**: there’s a title bar with a ‘CONNECTED’ status, and the content is shown as if it were terminal output — for example, **‘$ whoami’** followed by my name, and **‘$ cat ./summary.txt’** for the summary. My profile photo is in a separate pane with a label like **‘IDENTITY — click to view’**, so it feels like another terminal panel.  
>  
> Section headings are written as **commands** — like **‘$ cat about_me.txt’**, **‘$ skills --list’**, **‘$ ls ./projects’** — so the whole page feels like navigating through a terminal. The navigation uses paths such as **‘./home’**, **‘./about’** instead of plain ‘Home’ or ‘About’.  
>  
> So in one line: **the theme is a dark, terminal/hacker-style UI that presents my portfolio as if it were a live terminal session.**"

**Short one-liner you can use:**  
*"It’s a terminal or hacker-themed portfolio: dark background, monospace font, green accents, and the content is structured like terminal commands and output."*

---

## Why This Theme?

- **Shows technical identity** — Terminal/CLI style reflects a developer mindset.
- **Stands out** — Different from typical light, generic portfolios.
- **Still professional** — Readable, clear sections, and recruiter-friendly structure (About, Skills, Projects, Education, Contact).
- **Demonstrates front-end skills** — Custom layout, CSS variables, responsive design, and light JavaScript (e.g. lightbox, form validation) without relying on a framework.

---

## Tech Stack

| Part        | Technology / Approach                          |
|------------|-------------------------------------------------|
| Structure  | Semantic HTML5 (sections, nav, articles)       |
| Styling    | Vanilla CSS, mobile-first, CSS variables       |
| Fonts      | JetBrains Mono (Google Fonts)                  |
| Interactivity | Vanilla JavaScript (no jQuery/React)        |
| Features   | Sticky nav, mobile menu, smooth scroll, photo lightbox, contact form validation |

---

## Project Structure

```
portfolio/
├── index.html    # Single page: Hero, About, Skills, Projects, Education, Certifications, Resume, Contact
├── styles.css    # All styles — theme variables, layout, components
├── script.js     # Nav toggle, smooth scroll, photo lightbox, form validation, footer year
├── dd.jpeg       # Profile photo
├── resume.pdf    # Add your resume here (linked from page)
└── README.md     # This file
```

---

## How to Run

1. **Open in browser (simple):**  
   Double-click `index.html` or drag it into the browser.

2. **With a local server (recommended):**  
   ```bash
   npx serve .
   ```
   Then open the URL shown (e.g. `http://localhost:3000`).

---

## Customization

- **Content:** Edit `index.html` — name, role, summary, project links, education, certifications, contact details.
- **Resume:** Place your PDF as `resume.pdf` in the same folder so the “Download Resume” link works.
- **Profile photo:** Replace `dd.jpeg` with your photo (same filename) or update the `src` in `index.html`.
- **Colors/theme:** In `styles.css`, change the `:root` variables (e.g. `--accent`, `--bg`, `--text`) to adjust the look while keeping the terminal feel.

---

## Sections Overview

| Section         | Purpose                                      |
|----------------|-----------------------------------------------|
| **Hero**       | Name, role, one-line summary, CTAs, profile photo in terminal-style layout |
| **About**      | Short intro, education summary, career goal, strengths |
| **Skills**     | Technical skills, tools, soft skills (card layout) |
| **Projects**   | Project cards with problem, tech stack, features, GitHub/demo links |
| **Education**  | Timeline: degree, institute, year, CGPA/percentage |
| **Certifications** | Internship, courses, coding platforms (cards) |
| **Resume**     | Prominent “Download Resume (PDF)” button     |
| **Contact**    | Email, phone, location, LinkedIn, GitHub, optional contact form |

---

## Interview Tips

- **Theme:** Use the “Theme of the Project” section above to explain the terminal/hacker theme in 1–2 minutes.
- **Why vanilla?** You can say you wanted to show core HTML/CSS/JS skills and keep the site fast and dependency-free.
- **Challenges:** You can mention responsive layout, the terminal-style hero layout, or the photo lightbox as small challenges you solved.
