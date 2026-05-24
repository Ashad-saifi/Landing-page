# Three-Panel Workspace Architecture

This document describes the design layout, coordinate frames, and state flows of the interactive three-panel developer console.

## Layout Grid
The console uses a responsive Tailwind CSS grid that stacks vertically on tablet/mobile views and splits into three distinct blocks on desktops (`grid lg:grid-cols-12 gap-6`):

```
┌────────────────────────┬─────────────────────────────┬────────────────────────┐
│  Panel 1: Customizer   │  Panel 2: Live Viewport     │  Panel 3: Leads Console │
│  (lg:col-span-3)       │  (lg:col-span-5)            │  (lg:col-span-4)        │
└────────────────────────┴─────────────────────────────┴────────────────────────┘
```

## Panel Specifications

### 1. Panel 1 (Left): Configurator Customizer
- **Purpose**: Binds properties to React state variables (`previewConfig`).
- **Elements**: Contains input boxes for custom brand titles, color highlights toggles, template selectors, and interactive feature flags.

### 2. Panel 2 (Center): Viewport Simulator
- **Purpose**: Scales responsive layouts interactively.
- **Elements**: Device wrapper that scales using CSS dimension attributes (`width`, `height`) dynamically mapping to `desktop` (100%), `tablet` (450px), and `mobile` (280px).

### 3. Panel 3 (Right): Database leads & Logs
- **Purpose**: Provides CRUD interfaces to the Express endpoint database.
- **Elements**: Inquiry tracker displaying message cards with patch/delete triggers, and a console log stream displaying system operation events.
