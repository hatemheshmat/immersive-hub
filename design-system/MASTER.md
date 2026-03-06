# Immersive Hub - Design System (Option B: Spatial Computing)

## 🎨 Global Philosophy
The VR "Spatial Computing" aesthetic relies heavily on the illusion of depth, modern minimalism, and frosted glass overlays (glassmorphism) layered atop vibrant, colorful backgrounds.

## 🌈 Global Colors
- **Primary Brand Color**: `hsl(270, 70%, 55%)` (Vibrant Electric Purple)
- **Secondary Gradient Accent**: `hsl(190, 80%, 50%)` (Cyan/Aqua for futuristic balance)
- **Primary Dark Background**: `#0F172A` (Slate 900 - DO NOT USE PURE BLACK)
- **Text Color (Primary)**: `#F8FAFC` (Slate 50)
- **Text Color (Muted)**: `#94A3B8` (Slate 400)

## 🪟 Materials & Depth (Glassmorphism)
The defining characteristic of this UI is heavy use of backdrop blurring over fixed/parallax background media.
- **Base Glass Card**: `bg-white/10` or `bg-slate-800/40`
- **Border Treatment**: `border border-white/10` or `border-white/20`
- **Blur Intensity**: `backdrop-blur-xl` or `backdrop-blur-2xl`
- **Shadow**: `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` (soft, dispersed depth shadows)

## ✍️ Typography
- **Primary Font**: `Inter` (geometric, highly legible, modern) or `SF Pro Display`.
- **Secondary Font (Headers)**: `Outfit` or `Plus Jakarta Sans` for a slightly wider, techy feel.
- DO NOT use serifs. All text should be tracking-normal to tracking-tight.

## 🎭 Animations & Transitions
- **Hover Transitions**: All glass cards should have `transition-all duration-300 ease-out` on hover, slightly increasing the `bg-white/x` opacity and pushing upwards via `hover:-translate-y-1`.
- **Media Loading**: VR screenshots and GIFs should fade in smoothly, preventing harsh pop-in via `opacity-0` to `opacity-100` transition.

## ⛔ Anti-Patterns (What to Avoid)
- **NO Emoji Icons**: Use `lucide-react` SVG icons consistently.
- **NO layout shifts on hover**: Avoid `scale-110` if it causes surrounding elements to jump. 
- **NO pure `#000` or `#FFF`**: Always use slate or tinted grays to prevent harsh contrast.
