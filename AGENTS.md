# AI Agent Guide: Sergio Carracedo's GitHub Profile Maintenance

> **For AI agents working on this repository**  
> This document provides comprehensive guidelines for maintaining and updating the README.md while preserving style, structure, and automated functionality.

---

## 📖 Table of Contents

1. [Purpose & Scope](#purpose--scope)
2. [README.md Structure Overview](#readmemd-structure-overview)
3. [Critical: Protected Regions](#critical-protected-regions)
4. [Style Guidelines](#style-guidelines)
5. [Content Guidelines by Section](#content-guidelines-by-section)
6. [Common Maintenance Tasks](#common-maintenance-tasks)
7. [Dos and Don'ts](#dos-and-donts)
8. [Verification Checklist](#verification-checklist)
9. [Quick Reference](#quick-reference)

---

## Purpose & Scope

### What This Document Is

This guide ensures AI agents can make changes to the README.md while maintaining:
- **Structural consistency** - Preserving section organization and hierarchy
- **Writing style & tone** - Matching the established professional, technical voice
- **Automated functionality** - Never breaking the GitHub Actions workflow
- **Content coherence** - Adding new information in the right places with proper formatting

### When to Use This Guide

- Adding new projects or achievements
- Updating dates, numbers, or status changes
- Fixing typos or improving descriptions
- Updating broken links
- Reorganizing content within a section
- Reviewing changes made to the profile

---

## README.md Structure Overview

The README serves as the GitHub profile landing page. It is organized into distinct sections, each with a specific focus and consistent formatting.

### Current Structure (Line-by-Line)

```
Lines 1-6:   Header Section (Name, title, tagline)
Line 7:     Horizontal rule separator
Lines 8-9:  AI & Innovation Section
Lines 10-16: AI project list
Lines 17:   Horizontal rule separator
Lines 18-19: Design Systems & UX Section
Lines 20-24: Design system project list
Lines 25:   Horizontal rule separator
Lines 26-27: IoT & Open Source Section
Lines 28-31: IoT and OSS project list
Lines 32-33: Horizontal rule separator
Lines 34-35: Community & Talks Section
Lines 36-39: Community involvement and talks list
Line 40:    Horizontal rule separator
Lines 41-43: Connection & Stats Section
Lines 44-48: Protected stats region (auto-generated)
Lines 49-53: Social badges
```

### Section Purposes

#### Header Section (Lines 1-6)
```markdown
# Hi, I'm Sergio Carracedo 👋

### Senior Fullstack Engineer | AI Implementation | DX & Design Systems

With 20+ years of experience—from my first **Amstrad CPC464** to building modern **AI-driven architectures**—I solve problems by blending clean archictectures with practical automation.
```

**Purpose:** Immediate identification and professional positioning  
**Contains:**
- H1 title with name and greeting emoji
- H3 subtitle listing key expertise areas (pipe-separated)
- Tagline paragraph establishing experience and approach

**Style Notes:**
- Tagline uses em-dash (—) for dramatic pause
- Specific references to technology (**Amstrad CPC464**, **AI-driven architectures**)
- Years of experience stated as "20+ years"

#### AI & Innovation Section (Lines 8-16)
```markdown
## 🤖 AI & Innovation

I don't just chat with AI; I build systems that integrate it into the development lifecycle.

- **[Work Diary](https://github.com/sergiocarracedo/work-diary):** An open-source CLI tool to automate daily work summaries using **Gemini/OpenAI** and GitHub activity.
- **[Sireno AI](https://sergiocarracedo.es/blog/sireno-ai-assistant/):** A browser extension that brings LLM-powered text correction and translation to any web form.
- **Computer Vision:** Early PoC of webcam virtual backgrounds using **TensorFlow.js** (`tfjs-bodypix`).
- **AI for CAD:** Using LLMs to assist in designing 3D-printed physical items.
```

**Purpose:** Showcase AI/ML work and technical expertise  
**Contains:**
- Section emoji: 🤖
- Introductory statement (present tense, active voice)
- 4-5 project entries as bullet list

**Entry Format:**
- GitHub repo links: `- **[Project Name](URL):** Description with **tech stack**.`
- Blog post links: Same format, points to external site
- Non-linked projects: `- **Project Name:** Description...`

**Key Elements:**
- Always mention technology stack (**Gemini/OpenAI**, **TensorFlow.js**)
- Backticks for code/tech identifiers: `tfjs-bodypix`
- Balance between completed projects and PoC/experiments

#### Design Systems & UX Section (Lines 18-24)
```markdown
## 🏗️ Design Systems & UX

Expert in creating scalable UI libraries and complex data visualizations.

- **Factorial `f0`:** Core contributor and tech lead (until March 2026) to the **Factorial Zero Design System**, building robust React/TypeScript components.
- **[SirenoGrid](https://github.com/sergiocarracedo/sireno-grid):** Creator of a lightweight CSS Grid framework with flexbox fallbacks.
- **Data Viz:** Advanced implementation of **ECharts** for machine learning and analytical products.
```

**Purpose:** Demonstrate UI/UX expertise and design system work  
**Contains:**
- Section emoji: 🏗️
- Expertise statement
- 2-4 project entries

**Entry Format:**
- Role and timeframe: "Core contributor and tech lead (until March 2026)"
- Tech stack emphasized: **React/TypeScript**, **ECharts**
- Company context when relevant: "Factorial Zero Design System"

#### IoT & Open Source Section (Lines 26-31)
```markdown
## 🏠 IoT & Open Source

I enjoy bridging the gap between software and the physical world.

- **[Home Assistant Cards](https://github.com/sergiocarracedo/sc-custom-cards):** Creating custom, minimalist area cards with integrated temperature/humidity Sparklines.
- **NPM Veteran:** Maintaining 26+ packages, including `vue-use-model-helpers` and `git-publish`.
```

**Purpose:** Show hardware integration skills and OSS contributions  
**Contains:**
- Section emoji: 🏠
- Passion statement
- 2-3 project entries

**Entry Format:**
- Specific platform mentions: Home Assistant, NPM
- Backticks for package names: `vue-use-model-helpers`
- Numbers with plus sign: "26+ packages"

#### Community & Talks Section (Lines 34-39)
```markdown
## 🎤 Community & Talks

- **Ex Co-organizer:** [PHPVigo](https://phpvigo.com/) & [PulpoCon](https://pulpocon.es).
- **VigoTech Alliance:** Ex member supporting the Galician tech ecosystem.
- **Speaker:** 15+ talks on topics like "Building UI Libraries from Scratch", "Clean Architecture.", "Microfrontends"
```

**Purpose:** Highlight community involvement and thought leadership  
**Contains:**
- Section emoji: 🎤
- No introductory paragraph (bullet list directly)
- 3 entries covering different types of involvement

**Entry Format:**
- **Bold role label** with status: "Ex Co-organizer", "Ex member", "Speaker"
- Organization names as links when available
- Talk topics in quotes: "Building UI Libraries from Scratch"
- Approximate numbers with +: "15+ talks"
- Past roles marked as "Ex" (Ex Co-organizer, Ex member)

#### Connection & Stats Section (Lines 41-53)
```markdown
## 📊 Connection & Stats

<!-- GITHUB_STATS:START -->
<!-- This section is auto-updated by GitHub Actions -->
<!-- GITHUB_STATS:END -->

<p align="left">
<a href="https://www.linkedin.com/in/sergiocarracedo/"><img src="https://img.shields.io/badge/-Linkedin-0077B5?style=flat-square&logo=LinkedIn&logoColor=white" /></a>
<a href="https://sergiocarracedo.es"><img src="https://img.shields.io/badge/-sergiocarracedo.es-004262?style=flat-square&logo=Astro&logoColor=white" /></a>
<a href="https://bsky.app/profile/sergiocarracedo.es"><img src="https://img.shields.io/badge/-Bluesky-0085ff?style=flat-square&logo=bluesky&logoColor=white" /></a>
</p>
```

**Purpose:** Provide contact links and showcase GitHub statistics  
**Contains:**
- Section emoji: 📊
- **PROTECTED REGION** (auto-generated stats)
- Social badges (LinkedIn, website, Bluesky)

**Entry Format:**
- Badges use shields.io with flat-square style
- Consistent color scheme per platform
- Logo from Simple Icons or brand-specific

---

## Critical: Protected Regions

### ⚠️ NEVER MODIFY THESE MARKERS

```markdown
<!-- GITHUB_STATS:START -->
... everything here is auto-generated ...
<!-- GITHUB_STATS:END -->
```

### Why These Markers Are Protected

The region between `<!-- GITHUB_STATS:START -->` and `<!-- GITHUB_STATS:END -->` is **automatically managed by a GitHub Actions workflow** (`.github/workflows/update-stats.yml`).

**What happens in this region:**
- Daily fetch of GitHub statistics (stars, repos, forks, followers, languages, commits)
- Generation of badge table with shields.io badges
- Generation of ASCII commit activity chart (last 12 months)
- Timestamp of last update

**What happens if you modify it:**
- The workflow will overwrite your changes within 24 hours
- The README will be inconsistent between manual edits and automated updates
- The workflow might fail if markers are corrupted

### Rules for Protected Regions

**✅ ALLOWED:**
- View the content
- Reference the content in discussions
- Add content BEFORE the `<!-- GITHUB_STATS:START -->` marker
- Add content AFTER the `<!-- GITHUB_STATS:END -->` marker

**❌ NEVER:**
- Delete or modify the markers themselves
- Add content between the markers
- Change the marker format or spacing
- Remove the comment that says "This section is auto-updated by GitHub Actions"

### How to Verify Markers Are Intact

Before committing any changes, verify:

```bash
# Check markers exist
grep -n "GITHUB_STATS:START" README.md
grep -n "GITHUB_STATS:END" README.md

# Should output lines 45 and 47 (or nearby)
```

**Good output:**
```
45:<!-- GITHUB_STATS:START -->
47:<!-- GITHUB_STATS:END -->
```

**Bad output (missing markers):**
```
# No output = markers deleted or modified
```

---

## Style Guidelines

### A. Structural Rules

#### Heading Hierarchy

```markdown
# H1 - Title only (Line 1)

### H3 - Subtitle (Line 3)

## H2 - Section headers (every section)

# NEVER use H4 or deeper
```

**Requirements:**
- Only ONE H1 in the entire document (the name/title)
- H3 used ONLY for subtitle line 3
- All sections use H2 (##) with emoji prefix
- No subsections beyond H2

#### Section Separators

```markdown
Section content ends here.

---

## Next Section
```

**Rules:**
- Use three dashes `---` on their own line
- One blank line before and after
- Between every major section
- NO separator after the final section (Connection & Stats)

#### Line Spacing

```markdown
Paragraph one.

Paragraph two.  # Two blank lines before new section

---

## New Section  # Two blank lines after separator

First bullet.   # One blank line after heading

Second bullet.  # One blank line between items
```

**Guidelines:**
- One blank line between paragraphs
- One blank line between bullet list items
- Two blank lines before section separators
- Two blank lines after section separators

### B. Emoji Usage

#### Section Emoji Mapping (NEVER CHANGE)

| Section | Emoji | Line |
|---------|-------|------|
| AI & Innovation | 🤖 | 9 |
| Design Systems & UX | 🏗️ | 19 |
| IoT & Open Source | 🏠 | 27 |
| Community & Talks | 🎤 | 35 |
| Connection & Stats | 📊 | 43 |

**CRITICAL:** These emoji-section associations are fixed. Never:
- Change a section's emoji
- Remove the emoji
- Add emojis to section headers
- Use different emojis for the same concept

#### Inline Emoji Guidelines

**✅ Use sparingly for:**
- Greeting in title: `# Hi, I'm Sergio Carracedo 👋`
- Emphasis in descriptions (limit 1-2 per section)

**❌ Never:**
- Add emojis to every bullet point
- Use emojis in tech stack mentions (use bold instead)
- Include emojis in URLs or code blocks

### C. Writing Style & Tone

#### Professional Voice Examples

**Before (Too casual):**
```markdown
I work with design systems and made some React stuff.
```

**After (Professional):**
```markdown
Expert in creating scalable UI libraries and complex data visualizations.
```

**Key patterns:**
1. **Action-oriented verbs:** "Building", "Creating", "Expert in", "Maintaining"
2. **Specific technologies:** Always mention exact tech names (**React**, **TypeScript**, **TensorFlow.js**)
3. **Impact language:** "scalable", "robust", "advanced", "automation"
4. **Numbers when possible:** "20+ years", "26+ packages", "15+ talks"

#### Technical Specificity

**❌ Vague:**
```markdown
- Built a grid system
- Work with AI
- Made some components
```

**✅ Specific:**
```markdown
- **[SirenoGrid](URL):** Creator of a lightweight **CSS Grid** framework with **flexbox** fallbacks
- **[Work Diary](URL):** CLI tool using **Gemini/OpenAI** and GitHub activity
- **Factorial `f0`:** Core contributor building robust **React/TypeScript** components
```

**Rules:**
- Always specify the technology stack in **bold**
- Include code identifiers in backticks: `tfjs-bodypix`, `f0`
- Mention specific frameworks/tools: ECharts, TensorFlow.js, Home Assistant
- Avoid vague terms like "various", "some", "etc."

### D. Link Formatting

#### Project Links

**Standard format:**
```markdown
- **[Project Name](URL):** Description with **tech stack**.
```

**Rules:**
1. Project name in bold within brackets: `**[Name]**`
2. Colon after closing parenthesis
3. Description follows immediately
4. Tech stack in bold within description
5. Period at end
6. **Always use direct GitHub URLs for repos** (not npm, not blog posts)

**Examples:**
```markdown
✅ Good:
- **[SirenoGrid](https://github.com/sergiocarracedo/sireno-grid):** Creator of a lightweight CSS Grid framework with flexbox fallbacks.
- **[Work Diary](https://github.com/sergiocarracedo/work-diary):** CLI tool using Gemini/OpenAI and GitHub activity.

❌ Bad:
- SirenoGrid - A grid framework
- [SirenoGrid](URL) (no colon or description)
- **[sireno grid](URL):** (wrong capitalization)
```

#### Organization Links

**Format:**
```markdown
- **Ex Co-organizer:** [PHPVigo](https://phpvigo.com/) & [PulpoCon](https://pulpocon.es).
```

**Rules:**
- Role in bold, then colon
- Organization name is the link text
- Link to official site (not social media unless that's the main presence)

#### Badge Links (Connection & Stats Section)

**Standard format:**
```markdown
<a href="URL"><img src="https://img.shields.io/badge/-Label-COLOR?style=flat-square&logo=LOGO&logoColor=white" /></a>
```

**Current badges:**
```markdown
<a href="https://www.linkedin.com/in/sergiocarracedo/"><img src="https://img.shields.io/badge/-Linkedin-0077B5?style=flat-square&logo=LinkedIn&logoColor=white" /></a>
<a href="https://sergiocarracedo.es"><img src="https://img.shields.io/badge/-sergiocarracedo.es-004262?style=flat-square&logo=Astro&logoColor=white" /></a>
<a href="https://bsky.app/profile/sergiocarracedo.es"><img src="https://img.shields.io/badge/-Bluesky-0085ff?style=flat-square&logo=bluesky&logoColor=white" /></a>
```

**Badge rules:**
- Use shields.io API
- Always use `flat-square` style
- Label uses title case (Linkedin, not linkedin)
- Color should match brand (LinkedIn blue: 0077B5, Astro: 004262, Bluesky: 0085ff)
- Logo from Simple Icons (auto-matched by name)
- Logo color always white
- Leading dash in label field: `-Label`

**Adding new badges:**
1. Get brand color from brand guidelines or simpleicons.org
2. Get logo name from simpleicons.org
3. Insert in `<p align="left">` block
4. Maintain consistent spacing

### E. List Formatting

#### Bullet Points

**Use `-` (hyphen) only:**
```markdown
✅ Good:
- First item
- Second item
- Third item

❌ Bad:
* First item
+ Second item
• Third item
```

#### Text Emphasis

**Bold for:**
- Project names: `**[Work Diary]**`
- Technology stacks: `**React/TypeScript**`
- Role labels: `**Ex Co-organizer**`
- Key terms: `**Amstrad CPC464**`

**Backticks for:**
- Code/package names: `tfjs-bodypix`, `vue-use-model-helpers`
- Commands: Not currently used, but would be `npm install`
- File names: `README.md`

**NEVER bold + backticks together:** `**`code`**` ❌

#### Indentation

**No nested bullets:**
```markdown
❌ Bad:
- First item
  - Nested item
  - Another nested

✅ Good:
- First item
- Second item (separate bullet)
```

All list items are top-level only. If you need hierarchy, use separate sections or rewrite as a single item.

---

## Content Guidelines by Section

### A. AI & Innovation Section

**Focus:** AI/ML projects, LLM integrations, computer vision experiments

**Project types to include:**
- AI-powered tools and applications
- LLM integrations (OpenAI, Gemini, Anthropic, etc.)
- Machine learning experiments
- Computer vision projects
- AI-assisted workflows

**Entry format:**
```markdown
- **[Project Name](GitHub_URL):** Description using **tech stack** and **key features**.
```

**Description patterns:**
- Mention the AI model/provider: "using **Gemini/OpenAI**"
- Describe the automation/integration aspect
- Include technical details: "LLM-powered", "browser extension", "CLI tool"

**Examples from current README:**
```markdown
- **[Work Diary](https://github.com/sergiocarracedo/work-diary):** An open-source CLI tool to automate daily work summaries using **Gemini/OpenAI** and GitHub activity.
- **[Sireno AI](https://sergiocarracedo.es/blog/sireno-ai-assistant/):** A browser extension that brings LLM-powered text correction and translation to any web form.
- **Computer Vision:** Early PoC of webcam virtual backgrounds using **TensorFlow.js** (`tfjs-bodypix`).
```

**Note:** Even for blog posts (like Sireno AI), use the same format but point to the blog URL instead of GitHub.

**Where to add new entries:**
- **Top of list** for newest/most significant projects
- **Chronological order** if emphasizing timeline
- Currently has 4 items, can expand to 5-6 before needing subsection consideration

### B. Design Systems & UX Section

**Focus:** UI libraries, design systems, data visualization, component architecture

**Project types to include:**
- Design system contributions
- Component libraries
- CSS frameworks
- Data visualization work
- UX/UI tooling

**Entry format:**
```markdown
- **Company/Project `code`:** Role and timeframe to the **System Name**, building **tech stack**.
- **[Project Name](URL):** Creator of **description** with **features**.
- **Domain:** Implementation of **technology** for **purpose**.
```

**Description patterns:**
- Include role and timeframe: "Core contributor and tech lead (until March 2026)"
- Mention the design system/product name
- Specify component tech: **React/TypeScript**
- For frameworks: emphasize "lightweight", "robust", specific features

**Examples:**
```markdown
- **Factorial `f0`:** Core contributor and tech lead (until March 2026) to the **Factorial Zero Design System**, building robust React/TypeScript components.
- **[SirenoGrid](https://github.com/sergiocarracedo/sireno-grid):** Creator of a lightweight CSS Grid framework with flexbox fallbacks.
- **Data Viz:** Advanced implementation of **ECharts** for machine learning and analytical products.
```

**Dates format:**
- "until March 2026" for ending dates
- "March 2024 - present" for ongoing (if needed)
- Keep dates updated if role ends

### C. IoT & Open Source Section

**Focus:** Hardware integration, smart home, npm packages, open source contributions

**Project types to include:**
- Home Assistant integrations
- IoT devices/software
- npm packages
- Open source tools
- Physical computing projects

**Entry format:**
```markdown
- **[Project Name](URL):** Description with **features**.
- **Package Manager:** Maintaining **count+ packages**, including `package-name` and `package-name`.
```

**Description patterns:**
- Mention specific platforms: Home Assistant, npm
- For packages: use backticks: `vue-use-model-helpers`
- Keep package count updated
- Mention specific protocols/hardware when relevant

**Examples:**
```markdown
- **[Home Assistant Cards](https://github.com/sergiocarracedo/sc-custom-cards):** Creating custom, minimalist area cards with integrated temperature/humidity Sparklines.
- **NPM Veteran:** Maintaining 26+ packages, including `vue-use-model-helpers` and `git-publish`.
```

**Maintaining package count:**
- Check npm profile periodically
- Update from "26+" to "30+" etc. as count grows
- Verify listed packages still maintained

### D. Community & Talks Section

**Focus:** Conference organizing, community leadership, speaking engagements

**Entry types:**
- Conference/Meetup organization roles
- Community group memberships
- Speaking engagements
- Mentorship or teaching

**Entry format:**
```markdown
- **Status Role:** [Organization Name](URL) & [Organization](URL).
- **Organization:** Status membership supporting **mission**.
- **Speaker:** **count+ talks** on topics like "Talk Title", "Talk Title", "Talk Title"
```

**Status indicators:**
- **Current:** "Co-organizer", "Member", "Speaker"
- **Past:** "Ex Co-organizer", "Ex member"
- Use "Ex" prefix consistently for ended roles

**Talk format:**
- Number with +: "15+ talks"
- Titles in quotes: "Building UI Libraries from Scratch"
- Comma-separated list
- Topics separated by commas within quotes (or separate quoted items)

**Examples:**
```markdown
- **Ex Co-organizer:** [PHPVigo](https://phpvigo.com/) & [PulpoCon](https://pulpocon.es).
- **VigoTech Alliance:** Ex member supporting the Galician tech ecosystem.
- **Speaker:** 15+ talks on topics like "Building UI Libraries from Scratch", "Clean Architecture.", "Microfrontends"
```

**Updating roles:**
- When role ends, change "Co-organizer" → "Ex Co-organizer"
- When count increases, update "15+" → "16+"
- Add new organizations at top or bottom depending on significance

### E. Connection & Stats Section

**Focus:** Contact information and automated GitHub statistics

**Structure:**
1. Section header with emoji
2. **PROTECTED REGION** (stats)
3. Social badges in paragraph block

**Protected region:**
```markdown
<!-- GITHUB_STATS:START -->
<!-- This section is auto-updated by GitHub Actions -->
<!-- GITHUB_STATS:END -->
```

**NEVER modify anything between these markers.**

**Social badges current setup:**
- LinkedIn (professional network)
- Personal website (blog/portfolio)
- Bluesky (social media)

**Adding new badges:**
1. Add to `<p align="left">` block
2. Follow shields.io format
3. Use brand-appropriate colors
4. Link to active profile
5. Place in logical order (professional → personal → social)

---

## Common Maintenance Tasks

### A. Adding a New Project

**Step 1: Determine the correct section**

| Project Type | Section |
|--------------|---------|
| AI tool, LLM integration, ML experiment | AI & Innovation (🤖) |
| UI library, design system, component work | Design Systems & UX (🏗️) |
| npm package, Home Assistant, IoT device | IoT & Open Source (🏠) |
| Not fitting above | Consider if it belongs or create new category |

**Step 2: Follow the entry format**

```markdown
- **[Project Name](GitHub_URL):** Description with **tech stack** and **key feature**.
```

**Step 3: Insert in logical order**

**Option A: Newest first (recommended)**
```markdown
## 🤖 AI & Innovation

I don't just chat with AI; I build systems that integrate it into the development lifecycle.

- **[NEWEST PROJECT](URL):** Description...          ← ADD HERE
- **[Work Diary](URL):** ...
- **[Sireno AI](URL):** ...
- **Computer Vision:** ...
```

**Option B: By significance**
- Keep most impressive/current at top
- Move older/less significant projects down
- Maintain roughly 4-6 items per section

**Step 4: Verify formatting**

Checklist:
- [ ] Project name in bold brackets: `**[Name]**`
- [ ] GitHub URL (not blog, not npm unless no GitHub)
- [ ] Colon after closing parenthesis
- [ ] Description includes **bold** tech stack
- [ ] Period at end
- [ ] One blank line before next item

**Example transformation:**

```markdown
Before (adding new project):
## 🤖 AI & Innovation

I don't just chat with AI; I build systems that integrate it into the development lifecycle.

- **[Work Diary](https://github.com/sergiocarracedo/work-diary):** An open-source CLI tool to automate daily work summaries using **Gemini/OpenAI** and GitHub activity.
- **[Sireno AI](https://sergiocarracedo.es/blog/sireno-ai-assistant/):** A browser extension that brings LLM-powered text correction and translation to any web form.
- **Computer Vision:** Early PoC of webcam virtual backgrounds using **TensorFlow.js** (`tfjs-bodypix`).
- **AI for CAD:** Using LLMs to assist in designing 3D-printed physical items.

After (adding new project):
## 🤖 AI & Innovation

I don't just chat with AI; I build systems that integrate it into the development lifecycle.

- **[New AI Agent Tool](https://github.com/sergiocarracedo/new-tool):** An **OpenAI-powered** CLI tool for automating code reviews with **LangChain** integration and **GitHub Actions** support.
- **[Work Diary](https://github.com/sergiocarracedo/work-diary):** An open-source CLI tool to automate daily work summaries using **Gemini/OpenAI** and GitHub activity.
- **[Sireno AI](https://sergiocarracedo.es/blog/sireno-ai-assistant/):** A browser extension that brings LLM-powered text correction and translation to any web form.
- **Computer Vision:** Early PoC of webcam virtual backgrounds using **TensorFlow.js** (`tfjs-bodypix`).
- **AI for CAD:** Using LLMs to assist in designing 3D-printed physical items.
```

### B. Updating Existing Information

**Updating dates:**

```markdown
Change:
(until March 2026)

To:
(March 2020 - March 2026)

Or:
(since 2020)

When role ends:
- **Factorial `f0`:** Core contributor and tech lead (until March 2026) →
- **Factorial `f0`:** Ex core contributor and tech lead (2020 - 2026)
```

**Updating status (role ended):**

```markdown
Before:
- **Co-organizer:** [PHPVigo](https://phpvigo.com/)...

After:
- **Ex Co-organizer:** [PHPVigo](https://phpvigo.com/)...
```

**Updating statistics:**

```markdown
Before:
- **NPM Veteran:** Maintaining 26+ packages...

After (count increased):
- **NPM Veteran:** Maintaining 30+ packages...

Before:
- **Speaker:** 15+ talks...

After (gave more talks):
- **Speaker:** 18+ talks...
```

**Updating descriptions:**

Only update descriptions when:
- Technology stack changed significantly
- Project scope expanded
- Incorrect information needs correction

```markdown
Before:
- **[SirenoGrid](URL):** A CSS Grid framework.

After:
- **[SirenoGrid](URL):** Creator of a lightweight CSS Grid framework with flexbox fallbacks.
```

### C. Fixing Typos and Grammar

**Simple fixes (safe):**
- Spelling errors
- Punctuation issues (missing periods, extra spaces)
- Capitalization of proper nouns (TypeScript not Typescript)
- Technology names (React, not react)

**Style fixes (use judgment):**
- Improve awkward phrasing
- Make descriptions more specific
- Enhance action verbs

**Example transformations:**

```markdown
❌ Before (typo):
I solve problems by blending clean archictectures...

✅ After (fixed):
I solve problems by blending clean architectures...
```

```markdown
❌ Before (vague):
I work with AI and build tools.

✅ After (specific):
I build systems that integrate AI into the development lifecycle.
```

### D. Updating Links

**When URLs change:**

1. **Verify the new URL works** (visit it)
2. **Update the link text if organization renamed:**
   ```markdown
   Before:
   - [OldName](https://oldname.com/)
   
   After:
   - [NewName](https://newname.com/) (formerly OldName)
   ```
3. **Keep description consistent** unless the project fundamentally changed

**When adding new social badges:**

```markdown
Current block:
<p align="left">
<a href="https://www.linkedin.com/in/sergiocarracedo/"><img src="https://img.shields.io/badge/-Linkedin-0077B5?style=flat-square&logo=LinkedIn&logoColor=white" /></a>
<a href="https://sergiocarracedo.es"><img src="https://img.shields.io/badge/-sergiocarracedo.es-004262?style=flat-square&logo=Astro&logoColor=white" /></a>
<a href="https://bsky.app/profile/sergiocarracedo.es"><img src="https://img.shields.io/badge/-Bluesky-0085ff?style=flat-square&logo=bluesky&logoColor=white" /></a>
</p>

Adding X (Twitter):
<p align="left">
<a href="https://www.linkedin.com/in/sergiocarracedo/"><img src="https://img.shields.io/badge/-Linkedin-0077B5?style=flat-square&logo=LinkedIn&logoColor=white" /></a>
<a href="https://sergiocarracedo.es"><img src="https://img.shields.io/badge/-sergiocarracedo.es-004262?style=flat-square&logo=Astro&logoColor=white" /></a>
<a href="https://bsky.app/profile/sergiocarracedo.es"><img src="https://img.shields.io/badge/-Bluesky-0085ff?style=flat-square&logo=bluesky&logoColor=white" /></a>
<a href="https://x.com/username"><img src="https://img.shields.io/badge/-X-000000?style=flat-square&logo=x&logoColor=white" /></a>
</p>
```

**Link verification checklist:**
- [ ] URL is accessible (not 404)
- [ ] Points to canonical location
- [ ] Uses HTTPS
- [ ] Link text matches destination
- [ ] Badge colors match brand guidelines

### E. Reorganizing Content Within a Section

**Reasons to reorder:**
- Newer projects should be prominent
- More impressive work should be visible first
- Chronological progression (earliest → latest or vice versa)

**Where to reorder:**

**✅ ALLOWED:** Within the same section only

**❌ NEVER:** Move items between sections (AI project should stay in AI section)

**Example reordering:**

```markdown
Before (chronological):
## 🤖 AI & Innovation

- **AI for CAD:** Using LLMs...
- **Computer Vision:** Early PoC...
- **[Work Diary](URL):** ...
- **[Sireno AI](URL):** ...

After (newest first):
## 🤖 AI & Innovation

- **[Sireno AI](URL):** ...
- **[Work Diary](URL):** ...
- **Computer Vision:** Early PoC...
- **AI for CAD:** Using LLMs...
```

**Maintain spacing:**
- Keep one blank line between items
- Preserve section separators
- Don't add subsections

---

## Dos and Don'ts

### ✅ DO

#### Structure & Formatting
- **DO** use H2 (##) for all section headers with emoji prefix
- **DO** maintain horizontal rules (---) between sections
- **DO** use `-` for bullet points exclusively
- **DO** include one blank line between list items
- **DO** preserve the protected region markers
- **DO** use bold for project names and technology stacks
- **DO** use backticks for code/package identifiers

#### Content
- **DO** mention specific technologies (**React**, **TypeScript**, **OpenAI**)
- **DO** include GitHub URLs for all projects (use blog URLs only if no GitHub)
- **DO** update package/talk counts when they change
- **DO** change "Role" to "Ex Role" when positions end
- **DO** keep dates current and formatted consistently
- **DO** verify all links work before committing

#### Style
- **DO** use action-oriented language: "Building", "Creating", "Expert in"
- **DO** include impact metrics: "26+ packages", "15+ talks"
- **DO** capitalize proper nouns (TypeScript, GitHub, OpenAI)
- **DO** maintain professional, technical tone
- **DO** format tech stack in **bold** within descriptions

#### Social Badges
- **DO** use shields.io with `flat-square` style
- **DO** match brand colors (LinkedIn: 0077B5, Astro: 004262, etc.)
- **DO** use Simple Icons logo names
- **DO** keep logoColor white

### ❌ DON'T

#### Structure & Formatting
- **DON'T** edit content between `<!-- GITHUB_STATS:START -->` and `<!-- GITHUB_STATS:END -->` markers
- **DON'T** change section emojis (🤖, 🏗️, 🏠, 🎤, 📊)
- **DON'T** use H4 or deeper headings
- **DON'T** use `*` or `+` for bullets (use `-` only)
- **DON'T** create nested bullet lists
- **DON'T** remove horizontal rule separators

#### Content
- **DON'T** remove the H1 title or subtitle
- **DON'T** link to social media profiles in project descriptions (use social badges instead)
- **DON'T** use vague terms without specifics ("various tools" → list the tools)
- **DON'T** change "Ex" prefix for ended roles (keep historical accuracy)
- **DON'T** include emojis in technology names

#### Style
- **DON'T** use casual language ("I made", "I work") → use professional voice ("Building", "Expert in")
- **DON'T** mix heading styles within sections
- **DON'T** use both bold and backticks together: `**`code`**` ❌
- **DON'T** add trailing whitespace or extra blank lines
- **DON'T** capitalize common words unnecessarily

#### Social Badges
- **DON'T** use different badge styles (keep flat-square consistent)
- **DON'T** remove existing badges without replacement
- **DON'T** use wrong brand colors

### Example Transformations

#### ❌ BAD vs ✅ GOOD

**Project Entry:**
```markdown
❌ Bad:
* sireno grid - a css grid thing

✅ Good:
- **[SirenoGrid](https://github.com/sergiocarracedo/sireno-grid):** Creator of a lightweight **CSS Grid** framework with **flexbox** fallbacks.
```

**Section Header:**
```markdown
❌ Bad:
## Innovation and AI Stuff

✅ Good:
## 🤖 AI & Innovation
```

**Description:**
```markdown
❌ Bad:
I work with design systems and made some components.

✅ Good:
Expert in creating scalable UI libraries and complex data visualizations.
```

**Technology Mention:**
```markdown
❌ Bad:
Built with react and typescript.

✅ Good:
Building robust **React/TypeScript** components.
```

**List Format:**
```markdown
❌ Bad:
+ First item
* Second item
  - Nested item

✅ Good:
- First item

- Second item

- Third item
```

**Link Format:**
```markdown
❌ Bad:
[Project Name] (URL) - description

✅ Good:
- **[Project Name](URL):** Description with **tech stack**.
```

---

## Verification Checklist

After making any changes to README.md, verify the following:

### Critical Checks (Must Pass)

- [ ] **Protected markers intact:**
  ```bash
  grep "GITHUB_STATS:START" README.md && echo "✓ START marker found" || echo "✗ START marker MISSING!"
  grep "GITHUB_STATS:END" README.md && echo "✓ END marker found" || echo "✗ END marker MISSING!"
  ```

- [ ] **All section emojis present:**
  - [ ] 🤖 AI & Innovation
  - [ ] 🏗️ Design Systems & UX
  - [ ] 🏠 IoT & Open Source
  - [ ] 🎤 Community & Talks
  - [ ] 📊 Connection & Stats

- [ ] **H1 title unchanged:**
  - Verify line 1: `# Hi, I'm Sergio Carracedo 👋`

### Formatting Checks

- [ ] **Bullet style:** All bullets use `-` (not `*` or `+`)
- [ ] **Heading hierarchy:** H1 → H3 (subtitle) → H2 sections (no H4+)
- [ ] **Spacing:** One blank line between list items
- [ ] **Horizontal rules:** Present between all major sections
- [ ] **No trailing whitespace** at end of lines

### Content Checks

- [ ] **All links functional:** Click each link to verify
- [ ] **Tech names capitalized:** TypeScript, React, OpenAI (not typescript, react, openai)
- [ ] **Bold usage:** Project names and tech stacks in **bold**
- [ ] **Backtick usage:** Package names in `backticks`
- [ ] **Badge format:** All badges use `flat-square` style

### Style Checks

- [ ] **Professional tone:** Action verbs present (Building, Creating, Expert in)
- [ ] **Specificity:** Technologies named explicitly
- [ ] **Consistency:** Same format used across similar entries
- [ ] **Dates updated:** Role dates current and accurate

### Markdown Validation

```bash
# Check for common issues
grep -n "^\*" README.md && echo "⚠️  Found asterisk bullets" || echo "✓ No asterisk bullets"
grep -n "^\+" README.md && echo "⚠️  Found plus bullets" || echo "✓ No plus bullets"
grep -n "GITHUB_STATS" README.md
```

### Visual Preview

Before committing, preview the README to ensure:
- Sections render correctly
- Links appear as clickable
- Badges display properly
- Emojis show correctly
- No broken formatting

---

## Quick Reference

### Section Emoji Map

| Emoji | Section | Lines |
|-------|---------|-------|
| 🤖 | AI & Innovation | 9 |
| 🏗️ | Design Systems & UX | 19 |
| 🏠 | IoT & Open Source | 27 |
| 🎤 | Community & Talks | 35 |
| 📊 | Connection & Stats | 43 |

### Link Format Templates

**Project with GitHub repo:**
```markdown
- **[Project Name](https://github.com/username/repo):** Description with **tech stack**.
```

**Project with blog post:**
```markdown
- **[Project Name](https://username.es/blog/post-name/):** Description with **tech stack**.
```

**Non-linked project:**
```markdown
- **Project Name:** Description with **tech stack**.
```

**Organization/Role:**
```markdown
- **Status Role:** [Organization Name](https://org.com/).
```

### Badge URL Template

```markdown
<a href="PROFILE_URL"><img src="https://img.shields.io/badge/-Label-COLOR?style=flat-square&logo=LOGO&logoColor=white" /></a>
```

**Current badges:**
- LinkedIn: `0077B5`, `LinkedIn`
- Personal site: `004262`, `Astro`
- Bluesky: `0085ff`, `bluesky`

### Common Tech Names (Exact Capitalization)

- **TypeScript** (not Typescript)
- **JavaScript** (not Javascript)
- **React** (not react)
- **OpenAI** (not Openai)
- **GitHub** (not Github)
- **TensorFlow.js** (not Tensorflow.js)
- **ECharts** (not Echarts)
- **Home Assistant** (not Home assistant)
- **NPM** (not npm when referring to the company/platform)
- **npm** (lowercase when referring to the command/tool)

### Date Format Examples

- Ongoing role: "(since 2020)" or "(2020 - present)"
- Ending role: "(until March 2026)"
- Completed role: "(2020 - 2026)" or "Ex Role (2020 - 2026)"

### Numbers with Plus Sign

- "26+ packages"
- "15+ talks"
- "20+ years"
- "100+ commits" (if added)

### Protected Region Markers

```markdown
<!-- GITHUB_STATS:START -->
<!-- This section is auto-updated by GitHub Actions -->
<!-- GITHUB_STATS:END -->
```

**Location:** Lines 45-47  
**Status:** NEVER MODIFY  
**Purpose:** Auto-updated stats region

---

## Summary

This README.md is a **GitHub profile page** that showcases professional work across AI/ML, design systems, IoT, and community involvement. It balances technical specificity with accessibility, using consistent formatting and professional tone.

**Key Principles:**
1. **Protected region is sacred** - Never touch the stats markers
2. **Consistency is key** - Follow established patterns for structure, formatting, and style
3. **Specificity matters** - Always name technologies explicitly
4. **Professional tone** - Action-oriented language, impact metrics
5. **Visual consistency** - Emoji-section mapping, badge styles, spacing

**When in doubt:**
- Refer to existing examples in the current README
- Check the Dos and Don'ts section
- Use the Verification Checklist before committing
- Follow the patterns established in similar entries

---

*Last updated: This guide was created to help AI agents maintain README consistency while preserving Sergio Carracedo's professional brand and automated functionality.*
