# Development Portfolio - Site Plan

## Project Overview
A code-inspired developer portfolio showcasing CLI tools, frameworks, and development projects with a dark theme aesthetic.

---

## Information Architecture

### Site Structure
```
Home (index.html)
├── Hero Section
├── Featured Projects Preview
└── CTA to Projects

Projects (projects.html)
├── Project Grid/List
├── Filter by Category (CLI Tools, Frameworks, Other)
└── Individual Project Cards with Details

About (about.html)
├── Personal Introduction
├── Skills & Tech Stack
├── Experience/Background
└── Contact Links

Project Detail (project-detail.html)
├── Project Title & Metadata
├── Description & Problem Statement
├── Screenshots/Demo
├── Tech Stack
├── Links (GitHub, Live Demo)
└── Related Projects
```

---

## Page Breakdown

### 1. Home (index.html)
**Purpose**: Introduce the portfolio, establish design tone, encourage exploration

**Sections**:
- **Header/Navigation**: Fixed or sticky nav with logo, links to Projects, About
- **Hero Section**: 
  - Developer tagline/title
  - Brief intro (1-2 sentences)
  - CTA button → "View My Work"
- **Featured Projects Preview**:
  - 2-3 highlighted projects (CLI tool, framework, other)
  - Project card snippets: title, description, tech tags, link
- **Footer**: Social links, copyright

---

### 2. Projects (projects.html)
**Purpose**: Showcase all development work with filtering capability

**Sections**:
- **Header/Navigation**: Same as home
- **Page Title**: "My Projects"
- **Filter/Category Buttons**:
  - All
  - CLI Tools
  - Frameworks
  - Other
- **Project Grid** (responsive):
  - Individual project cards displaying:
    - Project thumbnail/icon
    - Project title
    - Short description (1-2 lines)
    - Tech stack tags (languages, frameworks)
    - Category badge
    - "View Details" link
- **Footer**: Same as home

---

### 3. About (about.html)
**Purpose**: Build connection, showcase expertise and background

**Sections**:
- **Header/Navigation**: Same as home
- **About Me**:
  - Personal intro paragraph
  - Professional background
  - What drives your work
- **Skills & Tech Stack**:
  - Languages (Python, JavaScript, Go, Rust, etc.)
  - Frameworks & Tools
  - Databases, DevOps, etc.
- **Experience Timeline** (optional):
  - Key milestones or roles
- **Contact Section**:
  - Email link
  - GitHub profile link
  - LinkedIn, Twitter, or other social
- **Footer**: Same as home

---

### 4. Project Detail (project-detail.html)
**Purpose**: Deep dive into individual projects

**Sections**:
- **Header/Navigation**: Same as home
- **Back Button**: Link back to Projects
- **Project Hero**:
  - Project title
  - Category badge
  - One-liner description
- **Project Metadata**:
  - Status (Active, Archived, Maintained)
  - Year/Date
  - Role (Author, Contributor, Creator)
- **Problem Statement**:
  - What problem does it solve?
  - Why was it built?
- **Solution**:
  - How it works (overview)
  - Key features
- **Tech Stack**:
  - Languages, frameworks, dependencies
  - Displayed as tags or list
- **Visual Content**:
  - Screenshots or demo GIF
  - Code snippet (optional)
- **Links**:
  - GitHub repository
  - Live demo or documentation link
  - NPM/PyPI package link (if applicable)
- **Related Projects**:
  - 2-3 similar projects for discovery
- **Footer**: Same as home

---

## Content Strategy

### Project Information Structure
Each project should include:
1. **Title**: Clear, descriptive name
2. **Category**: CLI Tool, Framework, or Other
3. **Description**: 1-2 sentence summary
4. **Long Description**: Paragraph explaining purpose and functionality
5. **Tech Stack**: Array of technologies used
6. **Links**: GitHub URL, live demo URL, documentation
7. **Status**: Active/Maintained/Archived
8. **Year**: Release or last updated year

### Example Projects
- **CLI Tool**: Command-line utility (e.g., build tool, data processor, deployment helper)
- **Framework**: Reusable library or framework (e.g., web framework, utility library)
- **Other**: Any other development project (games, experiments, integrations)

---

## Design System (Code-Inspired)

### Color Palette
- **Primary Background**: Dark (e.g., #0d1117 or #1a1a1a)
- **Secondary Background**: Slightly lighter (e.g., #161b22)
- **Accent Color**: Neon/electric (e.g., #58a6ff, #79c0ff - GitHub blue/cyan)
- **Text Primary**: Light gray (e.g., #c9d1d9)
- **Text Secondary**: Dimmed gray (e.g., #8b949e)
- **Accent/Success**: Green (e.g., #3fb950)
- **Warning/Secondary**: Orange/Yellow (e.g., #d29922)

### Typography
- **Headers**: Monospace or geometric sans-serif (e.g., JetBrains Mono, Space Mono, IBM Plex Mono)
- **Body**: Clean sans-serif (e.g., Inter, Roboto, -apple-system)
- **Code**: Monospace (e.g., Courier New, Consolas)

### Components
- **Project Cards**: Bordered, hover effect with accent color highlight
- **Code Blocks**: Dark theme with syntax highlighting
- **Buttons**: Clean with accent color, hover states
- **Tags**: Small badges with tech names
- **Navigation**: Minimal, possibly with accent underline on active state

---

## Responsive Design
- **Desktop** (1024px+): Multi-column layouts
- **Tablet** (768px-1023px): 2-column grids
- **Mobile** (< 768px): Single column, touch-friendly buttons

---

## Navigation Flow
```
Home → Projects → Project Detail
     ↓
    About → Contact
```

---

## Success Metrics
- Easy discovery of projects
- Clear understanding of tech stack
- Simple access to GitHub repositories
- Professional impression
- Mobile responsiveness
