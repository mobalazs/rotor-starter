# Rotor Starter Project

## Project Overview

This is a **Rotor Framework** starter project for building Roku applications using BrighterScript.

## Rotor Framework Documentation

**IMPORTANT**: Full Rotor Framework documentation for AI learning is available here:

🌱 **[Token-effective Rotor Framework Documentation Index](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/index.yaml)**

### Core Documentation (MUST READ)

1. **[Framework Overview & Quick Start](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/readme.opt.yaml)**
   - ViewModel-first UI framework for Roku
   - Declarative view construction without XML
   - Quick start examples

2. **[Framework Initialization](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/framework-initialization.opt.yaml)**
   - Configuration options (rootNode, tasks, callbacks)
   - 10-step lifecycle process
   - Node pool setup and optimization

3. **[Cross-Thread MVI Architecture](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/cross-thread-mvi.opt.yaml)**
   - Model-View-Intent pattern for Roku
   - State flow: Render Thread → Task Thread → Render Thread
   - Dispatcher, Reducer, Middleware concepts
   - Thread-safe state management rules

### ViewBuilder System

4. **[ViewBuilder Overview](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-overview.opt.yaml)**
   - Three-layer architecture (Engine, Virtual Tree, Plugins)
   - Widget and ViewModel concepts
   - Rendering lifecycle and HID system

5. **[Widget Reference](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-widget-reference.opt.yaml)**
   - Widget configuration properties (id, nodeType, fields, children)
   - Lifecycle hooks (onMountWidget, onUpdateWidget, onDestroyWidget)
   - Navigation methods (getWidget, findWidgets, getSiblingWidget)
   - State management methods (getDispatcher, createDispatcher)

6. **[ViewModel Reference](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-viewmodel-reference.opt.yaml)**
   - Props and viewModelState concepts
   - template() method for defining UI structure
   - Lifecycle hooks (onCreateView, onTemplateCreated, onUpdateView, onDestroyView)
   - Manual re-render control

### Plugin System

7. **[Fields Plugin](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-fields-plugin.opt.yaml)**
   - Declarative field management
   - @ operator for viewModelState references
   - String interpolation with backticks
   - Function expressions for dynamic values

8. **[Focus Plugin](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-focus-plugin.opt.yaml)**
   - Navigation strategies (Bubbling, Capturing, Spatial)
   - FocusItem and FocusGroup configuration
   - Direction overrides (up/down/left/right/back)
   - Callbacks (onFocusChanged, onFocus, onSelected)

9. **[Observer Plugin](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-observer-plugin.opt.yaml)**
   - Field observation patterns
   - Single/multiple observers per widget
   - Configuration (fieldId, callback, once, until, parsePayload)
   - Automatic lifecycle management

10. **[FontStyle Plugin](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/view-builder-fontstyle-plugin.opt.yaml)**
    - Typography configuration

### Features

11. **[i18n Support](https://github.com/mobalazs/rotor-framework/blob/main/docs/ai/i18n-support.opt.yaml)**
    - Internationalization system

### Key Concepts Summary

**MVI Pattern:**
- **Model**: State container with initial state
- **Reducer**: Transforms state synchronously on task thread
- **Dispatcher**: Bridge for dispatch(), getState(), addListener()
- **Middleware**: Async operations before reducer execution

**ViewBuilder:**
- **Widget**: Smallest UI unit, represents single SceneGraph node
- **ViewModel**: Groups widgets with shared props/state, eliminates prop drilling
- **Virtual Tree**: Abstraction layer with HID system for efficient updates
- **Plugins**: Extensible modules (Fields, Focus, Observer, FontStyle)

**State Management:**
- All mutations happen in reducers on task thread
- Render thread uses listeners for updates
- Never mutate state directly in render thread
- Use getState() with mapStateToProps for efficiency

## Project Structure

```
rotor-starter/
├── src/
│   ├── components/
│   │   ├── scene/              # Main scene components
│   │   │   ├── MainScene.bs
│   │   │   └── MainScene.xml
│   │   └── tasks/              # Background tasks
│   │       ├── appTask/
│   │       └── common/
│   ├── assets/
│   │   └── generated/          # Auto-generated theme/translations
│   └── source/
│       ├── Main.brs            # App entry point
│       └── roku_modules/       # Rotor framework modules
├── assetsJs/
│   ├── theme.js                # Material Design inspired theme
│   └── translation.js          # i18n translations (5 languages)
└── scripts/
    └── generateBsConstFromJs.ts # Build-time code generation

```

## Technology Stack

- **Rotor Framework** (v0.3.6) - MVI framework for Roku
- **BrighterScript** (v1.0.0-alpha.48) - Enhanced BrightScript compiler
- **roku-requests** (v1.2.0) - HTTP request library

## Theme System

**Material Design 3 (MD3)** dynamic theming system at `assetsJs/theme.js`:

### Dynamic Color Generation
- Uses `@material/material-color-utilities` for algorithmic color generation
- Only requires **seed colors** (primary, secondary, tertiary) as input
- Automatically generates full color palette with tonal variants
- All MD3 color roles: primary, secondary, tertiary, surface, error, outline, etc.
- State layers (hover, focus, pressed, dragged) with MD3 opacity values

### CTV/Roku Optimized
- **Calculated elevation**: Uses overlay alpha blending instead of shadows (CTV-compatible)
- Pre-computed elevation surfaces (level0-level5) for dark mode
- Roku hex color format (0xRRGGBBAA) for optimal SceneGraph compatibility
- Native Roku Animation easing functions for motion

### Features
- **Colors**: Full MD3 color roles with hover/pressed states
- **Typography**: Material Design Type Scale (Display, Headline, Title, Body, Label)
- **Motion**: Duration and easing configurations (standard, decelerate, accelerate, emphasized)
- **Elevation**: Six elevation levels using white overlay tinting
- **Layout**: Safe area and design resolution settings
- **Components**: Theme tokens for menuBar, settings, etc.

## Translations

Multi-language support at `assetsJs/translation.js`:

- English (en_US)
- Spanish (es_ES)
- French (fr_FR)
- Hungarian (hu_HU)
- Dutch (nl_NL)

## Build Commands

```bash
npm install              # Install dependencies
npm run watch            # Watch assetsJs/ for changes and auto-regenerate UI constants
npm run precompiler      # Manually generate UI constants from assetsJs/
npm run build-dev        # Development build
npm run build-prod       # Production build
npm run build-tests      # Tests build
npm run lint             # Lint code
npm run coverage         # Coverage report
```

### Development Workflow

Use `npm run watch` during development to automatically regenerate theme and translation files when you modify `assetsJs/theme.js` or `assetsJs/translation.js`. The watch process monitors these files and runs the precompiler automatically on changes.

## Development Notes

- This project uses the Rotor framework's MVI (Model-View-Intent) pattern
- Components are written in BrighterScript (.bs) with SceneGraph XML
- Theme uses Material Design 3 with dynamic color generation from seed colors
- Theme and translations are generated at build time from JS files (`assetsJs/`)
- Use `npm run watch` during development to auto-regenerate UI constants
- Elevation is calculated using overlay alpha blending (no shadows, CTV-compatible)
- Native Roku Animation easing functions are used for motion
