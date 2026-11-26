# Escape Room – Final Access System

A cinematic, monochromatic 3D web experience for the Escape Room Final Access System.

## Features

- **Dual-Zone Key Validation**:
  - **BOX 01–04**: Room 01 destination code (validates against 33 Room 01 destination keys).
  - **BOX 05–08**: Room 02 destination code (validates against 6 Room 02 destination keys).
  - Any valid Room 01 code pairs with any valid Room 02 code (e.g. `HACKADKU`, `JAVAHSDP`, `MASKXVUY`, `CODEMIBC`).
  - Automatic uppercase conversion and keyboard navigation (auto-advance, backspace navigation, paste support).
- **Cinematic 3D Unlock Sequence**:
  - **Stage 1**: Status verified, 8 character illumination, 100% progress indicator.
  - **Stage 2**: Deep black transition, 8 floating 3D metallic blocks, glowing energy lines, 3D mechanical vault disengagement.
  - **Stage 3**: Concentric rotating 3D metallic rings, camera dolly zoom, floating geometric particles, and dimensional gateway aura.
  - **Stage 4**: Floating 3D game access card with `LAUNCH GAME` button opening [Level Devil](https://poki.com/en/g/level-devil) in a new tab.
- **Audio Synthesizer**: Web Audio API sci-fi audio effects with mute toggle.
- **Strict Black & White Design**: Premium cyberpunk monochromatic palette (#000000, #FFFFFF, and shades of grey).

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The production assets will be generated in the `dist` directory.

## License

MIT
