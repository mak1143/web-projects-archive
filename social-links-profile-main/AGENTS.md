# AGENTS.md - Repository Guidelines

This is a Frontend Mentor challenge project - a simple social links profile page built with vanilla HTML and CSS.

## Build Commands

**No build system configured.** This is a static HTML/CSS project.

To run locally:
```bash
# Option 1: Open index.html directly in browser
open index.html

# Option 2: Use Python's simple server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node's npx
npx serve .
```

## Test Commands

**No test framework configured.** This is a simple static site with no JavaScript unit tests.

To validate:
- Open `index.html` in browser and visually check all links work
- Test hover states on all interactive elements
- Verify responsive design at 375px (mobile) and 1440px (desktop)
- Check design matches files in `/design/` folder

## Lint Commands

**No linting configured.** Consider setting up:
```bash
# HTML validation
npx html-validate index.html

# CSS validation (via W3C or stylelint)
npx stylelint "*.css"
```

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper `lang` attribute on `<html>`
- Add descriptive `alt` text for images
- Use kebab-case for CSS classes: `profile-card`, `profile-img`
- Include viewport meta tag for mobile
- Prefer external stylesheets over inline styles

### CSS
- Use CSS custom properties (variables) in `:root` for:
  - Colors: `--green`, `--Grey-700`, `--Grey-800`, `--Grey-900`
  - Layout: `--mobile-design-layout`, `--desktop-design-layout`
  - Fonts: `--font-weight`
- Use rem units for sizing (base: 14px)
- Follow mobile-first approach (@media min-width breakpoints)
- Nest selectors moderately (use SCSS nesting style in comments)
- Reset styles: `box-sizing: border-box`, margin/padding resets

### Colors (from style-guide.md)
- Green: `hsl(75, 94%, 57%)`
- White: `hsl(0, 0%, 100%)`
- Grey 700: `hsl(0, 0%, 20%)`
- Grey 800: `hsl(0, 0%, 12%)`
- Grey 900: `hsl(0, 0%, 8%)`

### Typography
- Font family: Inter (use local files in /assets/fonts/ or Google Fonts)
- Weights: 400, 600, 700
- Base size: 14px

### Naming Conventions
- BEM-inspired classes: `.block__element--modifier`
- Current convention: `.profile-card`, `.profile-img`, `.links a`
- Descriptive element names over terse abbreviations

### Assets
- Store images in `/assets/images/`
- Store fonts in `/assets/fonts/`
- Include favicon at `/assets/images/favicon-32x32.png`
- Optimize images before committing

### Accessibility
- Ensure hover AND focus states for interactive elements
- Maintain WCAG contrast ratios
- Test responsive range: 320px to large screens
- Keyboard navigation support for all links

## Design Requirements

See `style-guide.md` and compare with designs in `/design/`:
- Mobile design: 375px
- Desktop design: 1440px
- All hover/focus states working
- Match visual design closely

## Project Structure

```
├── index.html              # Main HTML file
├── styles-social-links.css # Main stylesheet
├── style-guide.md          # Color/font design tokens
├── README.md               # Project documentation
├── design/                 # Design reference images
│   ├── active-states.jpg
│   ├── destkop-design.jpg
│   └── mobile-design.jpg
└── assets/
    ├── fonts/              # Inter font files
    └── images/             # Images and favicon
```

## Deployment

Recommended hosts:
- GitHub Pages
- Vercel
- Netlify

No `package.json` or build step required - deploy the raw files.




# snippets

```
```
``` /* 
body{
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--Grey-900);
}


.social-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 10px;
    border-radius: 10px;
    max-width: 500px;
    min-width: 300px;
    margin: 1rem;
    height: auto;
    background-color: var(--Grey-800);
}

img{
    max-width: 100%;
    border-radius: 50%;
    border: 2px double var(--green);
}

.social-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2;
    letter-spacing: 2px;


    & h1{
      color: white;
      font-weight: 900;
      font-size: 2rem;
    }

    & p{
        color: var(--green);
        font-weight: 600;
        font-size: 1rem;
    }
}

.social-links{
    display: flex;
    flex-direction: column;
     gap: 10px;

    & p{
        font-size: 16px;
        color: hsl(0, 3%, 85%);
    }
}



.social-links a {     
    text-align: center;
    font: inherit;
    background-color: var(--Grey-700);
    padding: 1rem;
    border: 0;
    border-radius: 5px;
    outline: none;
    width: 100%;
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover{
        background-color: var(--green);
        color: black;
    }

}

.social-links a.active{
    background-color: var(--green);
    color: black;
}
 */
```
```
