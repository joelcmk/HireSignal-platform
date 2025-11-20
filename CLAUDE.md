# HireSignal Platform

A job search platform built with Next.js, React, and TypeScript.

## Technologies Used

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Google Autocomplete** - Location autocomplete

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── JobSearchForm.tsx    # Main search form component
|   |   ├── Footer.tsx           # Footer component 
|   |   ├── Navbar.tsx           # Navbar component 
|   |   ├── SearchBar.tsx        # SearchBar component 
|   |   ├── Footer.tsx           # ThemeSwitch component 
|   |   ├── ThemeSwitch.tsx      # Theme swith component 
│   │   └── logo.tsx             # Logo component
│   ├── globals.css              # Global styles and CSS variables
│   └── page.tsx                 # Home page
└── ...
```

## Color Scheme

- **Primary Color**: `#8D51FF` (defined as CSS variable `--primary-color`)
- **Background**: White/Light gray
- **Text**: Dark gray/black

## Key Features

- Job search with title/skills/company input
- Location autocomplete using Google Maps API
- Quick filter buttons (Remote, Tech, Healthcare, Marketing)
- Responsive design
- Focus states with primary color theme

## Development Notes

- Uses CSS custom properties for consistent theming
- All buttons have cursor pointer on hover
- Form includes accessibility features with proper labels and icons
- Google Maps API key required for location autocomplete functionality