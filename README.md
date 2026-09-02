# Dicky Afandi Portfolio v4

Premium dark portfolio built with React + Vite.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Main ideas
- Reference-inspired premium dark hero
- Hanging developer ID card
- Interactive 3D mouse-follow tilt + click-and-drag badge motion with inertia
- Jessie Collection featured case study
- Responsive layout
- Real contact email: dickyafandi86@gmail.com


## React Bits Lanyard

The hero uses the official React Bits Lanyard physics component. It requires the official
`card.glb` and `lanyard.png` assets in `src/assets/lanyard/`.

Install:

```bash
npm install
npm run dev
```

Note: React Bits currently marks Lanyard dependency resolution as manual, and its source uses
`@react-three/drei`, `@react-three/fiber`, `@react-three/rapier`, `meshline`, and `three`.


Fix: CSS3 uses `FaCss3Alt` from `react-icons/fa6` for compatibility with current React Icons exports.


Icon compatibility fix: Playwright uses a fallback icon so Vite does not fail on `SiPlaywright` export mismatches.


v10: enlarged React Bits Lanyard and expanded WebGL viewport to avoid edge clipping while dragging.


v11: drag target is constrained to the camera viewport so the 3D badge cannot be clipped by the WebGL framebuffer at the edges.


v12: tech marquee now shows real React Icons logos next to each technology label.
