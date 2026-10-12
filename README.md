# (///∇//) PQC - Portfolio

Welcome to my personal portfolio repository! This project is designed not just as a resume, but as an interactive web experience featuring cyberpunk-inspired aesthetics, custom CSS physics/animations...

## Features

- **Custom Animations:** Heavy use of native CSS keyframes for glitches, glass cracks, and floating shards without relying on heavy animation libraries.
- **Interactive Cursor FX:** A custom HTML5 Canvas-based cursor effect that spawns particles on click.
- **Performance Optimized:** Uses `prefers-reduced-motion` to disable heavy animations for users who prefer minimal movement.
- **Modular Architecture:** Clean React component structure with reusable UI elements and custom hooks.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4
- **Styling:** Pure CSS for complex animations & clip-paths
- **Icons:** React Icons, Lucide React
- **Deployment:** Vercel / GitHub Pages

## 📂 Project Structure

```text
src/
 ├─ components/
 │   ├─ layout/     # Core structure (Menu, Background, SideBand)
 │   ├─ fx/         # Visual effects (Cracks, Shards, CursorFX)
 │   └─ ui/         # Reusable UI (SectionCard, SectionHeader, etc.)
 ├─ context/        # Global state (Quality Settings)
 ├─ data/           # Portfolio content (Projects, Skills, Certificates)
 ├─ hooks/          # Custom React hooks (useScrollArrows, useMenuNavigation)
 └─ sections/       # Main pages (Profile, Projects, Skills, Contact)
```

## How to run locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sleepy1009/p3-portfolio.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd p3-portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```

## About Me

I'm **Pham Quoc Cuong**, a Software Engineering graduate specializing in Fullstack and MES development. I thrive on algorithmic challenges, efficient database design, and building AI-integrated web apps. 

📫 **Connect with me:**
- Email: Blockmine223@gmail.com
- GitHub: [@sleepy1009](https://github.com/sleepy1009)
- LeetCode: [My LeetCode Profile](https://leetcode.com/u/QLm76H3sZl/)