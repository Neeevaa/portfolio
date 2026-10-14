# Design & Implementation Standards
## Digital Journal & Engineering Notebook

**Author:** Neeva Sunish Mathew  
**Discipline:** AI/ML Systems & Software Engineering  
**Version:** 1.0 (Standard Architecture & Design Specification)  
**Status:** Canonical Reference

---

## 1. Core Identity & Tone

The portfolio is structured as an interactive **Digital Journal & Engineering Notebook** that balances high technical rigor with warm personal reflection.

### 1.1 The Five Blended Dimensions
1. **Editorial Magazine:** High typographic discipline, spacious layout pacing, drop caps, and thoughtful hierarchy.
2. **Personal Diary:** Authentic first-person reflections, dated field entries, handwritten marginal notes, and intellectual curiosity.
3. **Pastel Scrapbook:** Tactile washi tape accents, paper clips, layered specimen cards, stamps, and page bookmarks.
4. **Annotated Engineering Notebook:** Hardware telemetry, architectural diagrams, KV-cache benchmarks, trade-offs, and failure analysis.
5. **Developer's Portfolio:** Verifiable code repositories, shipped systems, demonstrable metrics, and clear collaboration channels.

### 1.2 Personality & Tone
- **Keywords:** Creative, curious, warm, intelligent, ambitious, quietly confident.
- **Sophisticated Aesthetic:** Subtle and refined styling throughout. Avoid decorative clutter, excessive pink, cartoonish heart doodles, loud neon gradients, and juvenile illustrations. The visual language should evoke high-grade Japanese stationery, an architect’s drafting journal, and a rigorous research notebook.

---

## 2. Standardized Color Palette & Tokens

All surfaces and accents are strictly governed by this cohesive palette. **No dark mode or saturated neon colors may be introduced.**

### 2.1 The Standard Tokens

| Token Name | Hex Code | Semantic Role | Usage Rules |
| :--- | :--- | :--- | :--- |
| **Ivory Paper** | `#FCFAF5` | Primary folio paper surface | Default background for readable content pages, cards, and modal sheets. |
| **Cream Paper** | `#F7F2E7` | Secondary paper / contrast panels | Gutter margins, header/footer chrome, index panels, code block mats. |
| **Desk Canvas** | `#F4EFE6` | Surrounding desk background | Full viewport background texture upon which the book rests. |
| **Ink** | `#2D2A28` | Primary text, comic lines & shadows | Headings, body text, 1.5–2px outlines, sharp 3px drop shadows (`#2D2A28`). |
| **Dusty Blue** | `#7EA8BE` | Technical accent / systems tag | Architecture diagrams, pipeline markers, primary navigation active state. |
| **Lavender** | `#A799B7` | Reflective accent / research tag | Literature notes, experimental hypothesis badges, secondary cards. |
| **Sage** | `#9AB89E` | Verification / benchmark accent | Shipped status, pass indicators, positive metrics, natural science notes. |
| **Peach** | `#E8998D` | Core callout / focus accent | Primary CTA ("Open Journal"), flagship case study highlights, washi strips. |
| **Butter Yellow**| `#F7DF94` | Sticky note / marginalia accent | Table of contents tags, issue stamps, key takeaway callout boxes. |

### 2.2 Inking & Contrast Rules
- **Outlines:** All cards, plates, and buttons use crisp `border: 2px solid #2D2A28` or `border: 1.5px solid #2D2A28`.
- **Shadows:** Hard, tactile comic offset shadows (`3px 3px 0 #2D2A28` or `2px 2px 0 #2D2A28`), never blurred diffuse shadows.
- **Text Contrast:** Body prose is rendered in `#2D2A28` against `#FCFAF5` / `#F7F2E7` to guarantee AAA accessibility compliance. Avoid low-contrast text on pastel accents.

---

## 3. Typography Hierarchy & Strict Font Roles

Four distinct font families work in synergy. Each family has a non-overlapping functional responsibility.

```
+--------------------------------------------------------------------------+
| NEWSREADER (Editorial Serif)                                             |
| -> Folio titles, major essay headlines, chapter headings, pull quotes    |
+--------------------------------------------------------------------------+
| PLUS JAKARTA SANS / INTER (Clean Humanist Sans)                          |
| -> Long-form paragraphs, abstract prose, milestone details, summaries    |
+--------------------------------------------------------------------------+
| CAVEAT / PATRICK HAND (Handwritten Cursive)                              |
| -> Marginal notes, brief sticky annotations, author remarks, footnotes   |
+--------------------------------------------------------------------------+
| JETBRAINS MONO (Technical Monospace)                                     |
| -> Telemetry values, code blocks, math formulas, timestamps, folio nos.   |
+--------------------------------------------------------------------------+
```

### 3.1 Strict Font Rules & Anti-Patterns
- **Rule 1:** *Never use handwritten fonts (`font-hand` / `font-comic`) for multi-sentence body text, technical explanations, code blocks, or mathematical formulas.*
- **Rule 2:** *Never use serif fonts (`Newsreader`) for telemetry metrics, terminal outputs, or system status labels.*
- **Rule 3:** *Always use `font-mono` (`JetBrains Mono`) for numbers in benchmark tables, latency measurements, timestamps, equations, and page counters (`FOLIO 03 / 15`).*
- **Rule 4:** *Body text must always maintain `leading-relaxed` (1.65–1.75 line-height) for comfortable reading.*

---

## 4. Visual Details & Decorative Guidelines

Decorative elements provide tactile joy without compromising legibility or navigation.

### 4.1 Approved Decorative Accents
- **Washi Tape:** Semi-transparent colored tape strips (`.washi-tape-yellow`, `.washi-tape-peach`, `.washi-tape-blue`, `.washi-tape-sage`) with subtle dashed borders pinning cards or photos.
- **Wire Paper Clips:** Minimalist vector clips (`.paper-clip`) anchoring sticky notes to card edges.
- **Folded Corners:** Small paper corner folds (`.paper-corner-fold`) indicating bookmarking or index cards.
- **Issue Stamps & Folio Badges:** Enclosed pill stamps (`★ VOL. 01 — RUNTIME & REASONING`) at the top of spreads.
- **Highlighter Underlines:** Subtle yellow or peach background highlights (`.hand-underline`, `.hand-underline-peach`) on key phrases.
- **Restrained Doodles:** Clean asterisk stars (`★`, `✦`), directional arrows (`➔`), and hand-drawn divider strokes.

### 4.2 Restraint Invariants
- Decorations must **never** overlap clickable buttons or hide text.
- Maximum of **one** prominent visual plate/illustration per page spread.
- No floating animated clutter that distracts from reading.

---

## 5. Three Distinct Page Archetypes

Every page belongs to one of three specialized archetypes while maintaining the shared paper & ink design system:

```
+---------------------+---------------------+---------------------+
| 1. PERSONAL SPREAD  | 2. TECHNICAL NOTE   | 3. RESEARCH LOG     |
+---------------------+---------------------+---------------------+
| • Diary entries     | • Pipeline traces   | • Abstract boxes    |
| • Thought quotes    | • VRAM & latency    | • Hypotheses        |
| • Analog photos     | • Trade-off tables  | • Formulations      |
| • Human reflections | • Kernel specs      | • Empirical findings|
| • Warm marginalia   | • Diagnostic logs   | • Literature themes |
+---------------------+---------------------+---------------------+
```

### 5.1 Personal & Diary Spreads
- **Purpose:** Chronicle origins, values, creative pursuits outside the terminal, and mentorship.
- **Components:** Drop-cap editorial paragraphs, thought quotes in speech-bubble panels, pinned photo plates with washi tape, and dated field notes.

### 5.2 Engineering Notebook Spreads
- **Purpose:** Present systems built with engineering rigor, architectural decisions, and performance metrics.
- **Components:**
  - Multi-stage execution flow strips with directional step cards.
  - Metric gauge cards with `JetBrains Mono` telemetry values and unit indicators.
  - Diagnostic console panels simulating verified execution traces.
  - Technical specification matrices (e.g., protocol, memory bandwidth, latency).

### 5.3 Research Note Spreads
- **Purpose:** Document empirical experiments, literature synthesis, and open theoretical questions.
- **Components:**
  - Structured abstract callout boxes in pale butter yellow.
  - Numbered empirical findings with explicit quantitative conclusions.
  - Mathematical formulation cards using `font-mono` equations.
  - Experimental setup metadata describing dataset size and testbeds.

---

## 6. Frontend-Only Architecture Invariants

This portfolio is strictly a **zero-overhead, static client-side application**.

1. **Zero Backend / Serverless:** No Express/FastAPI servers, no Node runtime dependencies for serving, no microservices.
2. **Zero Database / Auth:** No PostgreSQL, MongoDB, Supabase, Firebase Auth, or session management.
3. **Zero AI API Interaction:** No runtime API calls to OpenAI, Claude, or local Ollama instances from the client browser. All telemetry and metrics are verified static specimens.
4. **Local Data Source of Truth:** All portfolio chapters, projects, research logs, and timeline milestones reside in local, version-controlled JavaScript/TypeScript modules ([src/journal/data/journalData.js](file:///c:/Projects/portfolio/src/journal/data/journalData.js)).
5. **Direct Correspondence:** No server-side contact form endpoints. Contact is facilitated through direct, accessible links (`mailto:neevasunishmathew@gmail.com`, GitHub, LinkedIn).

---

## 7. Navigation & Interaction Invariants

All navigation mechanisms must remain preserved, responsive, and tactile.

| Navigation Control | Mechanism | Shortcut / Trigger |
| :--- | :--- | :--- |
| **Ribbon Bookmark** | Top-right hanging ribbon tab | Click to open Table of Contents |
| **Cover CTA** | Large peach button | Opens Journal to Table of Contents |
| **Table of Contents Modal** | Full-screen modal with chapter cards | Click "INDEX ☰" or press `M` |
| **Linear Folio Navigation**| Previous / Next footer buttons | `ArrowLeft` / `ArrowRight`, `ArrowUp` / `ArrowDown` |
| **Direct Chapter Scrubber**| Circular numbered pills `01` – `10` | Instant jump to chapter start |
| **Cover Quick-Return** | `CVR` button in footer | Press `0` key |
| **Mobile Gestures** | Horizontal touch swipe on page container | Swipe left (next) / right (prev) |

---

## 8. Summary of Standardized File Locations

- **Design System Styles:** [src/journal/journal.css](file:///c:/Projects/portfolio/src/journal/journal.css)
- **Tailwind Tokens:** [tailwind.config.js](file:///c:/Projects/portfolio/tailwind.config.js)
- **Book Navigation Controller:** [src/journal/Journal.jsx](file:///c:/Projects/portfolio/src/journal/Journal.jsx)
- **Data & Content Architecture:** [src/journal/data/journalData.js](file:///c:/Projects/portfolio/src/journal/data/journalData.js)
- **Layout Renderers:** [src/journal/layouts/](file:///c:/Projects/portfolio/src/journal/layouts/)
- **Reusable Specimen Components:** [src/journal/components/](file:///c:/Projects/portfolio/src/journal/components/)
