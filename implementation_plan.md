# World Class Design Overhaul Plan

The goal is to transform the portfolio into a visually stunning, "world-class" experience by introducing advanced micro-interactions, 3D elements, and dynamic animations.

## User Review Required
- **Performance**: Some of these effects (3D, heavy animations) might impact performance on lower-end devices. I will optimize where possible.

## Proposed Changes

### 1. New UI Components (`components/ui`)
- **`tracing-beam.tsx`**: A timeline component with a glowing beam that follows the user's scroll position.
- **`3d-pin.tsx`**: A 3D perspective container that makes cards "pop" and float in 3D space on hover.
- **`text-generate-effect.tsx`**: A text animation that reveals words character by character with a "decoding" style.
- **`background-beams.tsx`**: A background effect with shooting light beams.
- **`magnetic-button.tsx`**: A button wrapper that adds a magnetic pull effect to the cursor.

### 2. Section Upgrades

#### `components/sections/experience-new.tsx`
- **Upgrade**: Wrap the experience list in the `TracingBeam` component.
- **Style**: Connect the cards visually with the beam.

#### `components/sections/projects-new.tsx`
- **Upgrade**: Replace standard Bento cards with `PinContainer` (3D Pin) for featured projects.
- **Interaction**: Cards will rotate and float when hovered, revealing more details.

#### `components/sections/hero-new.tsx`
- **Upgrade**: Use `TextGenerateEffect` for the main headline.
- **Background**: Add `BackgroundBeams` for a dynamic backdrop.

#### `components/sections/contact-new.tsx`
- **Upgrade**: Add a "Globe" or "World Map" visualization (using a lightweight SVG or canvas approach) to emphasize global connectivity.

### 3. Global Polish
- **Typography**: Fine-tune font weights and letter spacing.
- **Buttons**: Replace standard buttons with `MagneticButton` versions.

## Verification Plan

### Manual Verification
- **Performance**: Check FPS during scrolling.
- **Responsiveness**: Ensure 3D elements don't break mobile layout (fall back to simpler views if needed).
- **Visuals**: Verify that the "wow" factor is achieved without being overwhelming.
