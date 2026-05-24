# WebSolution Pro: Animation Guide

This guide details the animations, keyframes, and transition mechanics used to deliver a premium user experience on the landing page and interactive workspace.

## 1. Custom Keyframes & Hover FX
We configured a suite of CSS animations inside [tailwind.config.js](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/tailwind.config.js):

- **Fade-In-Up (`fadeInUp`)**: Applied to titles and subtitles upon page load.
  - *Mechanism*: Starts with `opacity: 0` and `translateY(20px)`, easing out to full visibility over `0.6s`.
- **Pulse-Subtle (`pulseSubtle`)**: Applied to background radial glows and active status lights.
  - *Mechanism*: Cycles between `1.0` and `1.02` scaling and oscillates opacity down to `0.85` to avoid visually harsh pulses.

## 2. Hover Interactions & Accent Borders
All interactive cards in the features grid and dashboard list items use custom classes in [src/index.css](file:///c:/Users/Ashad/OneDrive/Desktop/landing%20page/src/index.css):

- **`.glow-card`**: Uses a hover pseudo-element (`::after`) with a gradient border (`indigo` to `purple`). The gradient fades in smoothly (`transition: opacity 0.3s ease`) rather than snapping.
- **Glassmorphism Transitions**: All `.glass-panel` components have standard Tailwind `transition-all duration-300` triggers to lift up (`-translate-y-1`) and intensify shadows when hovered.

## 3. Pure CSS Float Loops
For high-fidelity dashboard graphics:
- **`animate-float`**: Floating animation moving up and down by `10px` in a `6s` infinite sinus loop.
- **`animate-float-delayed`**: Identical floating cycle delayed by `3s` to create a natural, asynchronous breathing effect when multiple dashboard elements are side-by-side.
