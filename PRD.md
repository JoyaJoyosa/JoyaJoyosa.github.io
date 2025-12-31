# Product Requirements Document: Omniverse Compendium

## 1. Project Overview
Omniverse Compendium is a modern, sleek, and immersive web application designed for worldbuilders, GMs, and writers to catalog their fictional universes. Inspired by tools like 5e Tools and LegendKeeper, it offers a centralized database for lore, mechanics, and entities, wrapped in a beautiful "Glass & Neon" aesthetic.

## 2. Pages & Routes
- **Home (`/`)**: Dashboard with global search, quick links, and "featured" lore.
- **Atlas (`/atlas`)**: Locations and maps (list view for now, maybe visual later).
- **Bestiary (`/bestiary`)**: Monsters and NPCs with stat blocks.
- **Grimoire (`/grimoire`)**: Spells, abilities, and technology.
- **Archives (`/archives`)**: General lore, history, and factions.
- **Settings (`/settings`)**: User preferences (theme, data management).

## 3. Features
- **Global Search**: Fast, accessible search bar to find any entity.
- **Interactive Stat Blocks**: Rich detail views for monsters/spells with clickable elements (e.g., roll dice).
- **Dynamic Tables**: Sortable and filterable lists for all data categories.
- **Responsive Sidebar**: Collapsible navigation for maximum screen real estate.
- **Dark Mode First**: A deep, immersive dark theme with neon accents.

## 4. Technical Requirements
- **Frontend**: React, Tailwind CSS, Framer Motion.
- **UI Library**: shadcn/ui (Radix Primitives).
- **State Management**: React Context or simple local state for now.
- **Data**: Mock JSON data initially, structured for easy migration to a DB later.
- **Icons**: Lucide React.

## 5. Design Guidelines
- **Theme**: "Void & Starlight". Backgrounds `#0a0a0a` to `#121212`. Accents: Cyan (`#22d3ee`), Purple (`#a855f7`).
- **Typography**: Sans-serif, clean, high readability (Inter or similar).
- **Components**: Glassmorphism effects (backdrop-blur), thin borders, subtle glows.

## 6. Assumptions
- We are building the frontend experience first with mock data.
- The user wants a "5e Tools" equivalent, meaning high information density is okay, but we will prioritize UX/UI polish.
