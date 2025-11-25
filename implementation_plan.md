# UI/UX Redesign: Bento Grid & Cyber-Minimalism

The goal is to create a visually striking, non-traditional portfolio experience that differs significantly from the standard vertical scroll layout.

## Design Concept: "The Digital Workspace"
- **Layout**: A **Bento Grid** architecture where content (About, Skills, Projects) is organized into a mosaic of interactive cards.
- **Navigation**: A **Floating Dock** at the bottom of the screen, replacing the traditional top navbar.
- **Aesthetics**: High contrast, "Cyber-minimalism", heavy use of glassmorphism, glow effects, and fluid animations.
- **Hero**: A full-screen, immersive introduction that transitions into the grid.

## Proposed Changes

### 1. Navigation Overhaul
- **Remove**: Standard top `Navbar`.
- **Add**: `FloatingDock` component at the bottom center of the screen.
- **Features**: Magnification effect on hover (like macOS dock).

### 2. Hero Section Revamp
- **Style**: Large, bold typography with a "Spotlight" effect.
- **Animation**: Text reveal animations and a dynamic background (keeping the 3D stars but tweaking them, or adding a gradient mesh).

### 3. Main Content: The Bento Grid
- **Structure**: A responsive CSS grid wrapper.
- **Components**:
  - `ProfileCard`: Large card with photo and bio.
  - `TechStackCard`: Marquee or grid of icons.
  - `ProjectCard`: Featured projects with preview images/videos.
  - `StatsCard`: GitHub stats or years of experience.
  - `SocialCard`: Quick links to socials.
  - `MapCard`: stylized location map.

### 4. Typography & Colors
- **Font**: Stick with Geist but use heavier weights (800/900) for headers.
- **Colors**: Deep dark background (`#0a0a0a`) with vibrant accent glows (Cyan/Purple).

## Implementation Steps

1.  **Create `FloatingDock`**: A new navigation component.
2.  **Create `BentoGrid` Layout**: A container component for the grid.
3.  **Refactor Sections**: Break down existing sections into "Bento Cards".
4.  **Update `page.tsx`**: Assemble the new layout.
5.  **Update `globals.css`**: Add necessary utility classes for the grid and glow effects.

## Verification
- Check responsiveness (Bento grids need careful mobile handling).
- Verify performance of multiple animations.
