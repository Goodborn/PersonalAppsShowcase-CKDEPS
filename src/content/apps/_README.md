# Welcome!

To add an app to this collection, create a new file in `src/content/apps/`:

```
src/content/apps/my-app.md
```

## Required frontmatter

```markdown
---
name: "My App"
category: "Productivity"           // One of the existing categories
icon: "☆"                          // Single char emoji/symbol, OR a URL/path to an image
screenshot: "placeholder"          // URL to screenshot, or "placeholder" for auto-generated
website: "https://example.com"     // Optional
repo: "https://github.com/..."     // Optional
why: "One sentence on why you chose it"
alternatives: ["Other App", "Another App"]
tags: ["tag1", "tag2"]
featured: true                     // Featured apps appear first
---

Longer markdown description goes here...
```

## Placeholder screenshots

When `screenshot` is not a URL, the site renders a beautiful gradient placeholder
with the app's first letter. Drop screenshots into `public/screenshots/` and
reference them as `/screenshots/your-app.png`.