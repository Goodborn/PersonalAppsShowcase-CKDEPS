---
name: "FZF"
category: "Terminal Tools"
icon: "/icons/fzf.png"
screenshot: "/screenshots/fzf.png"
website: "https://github.com/junegunn/fzf"
repo: "https://github.com/junegunn/fzf"
source: "Pacman"
install: "https://archlinux.org/packages/search/?q=fzf"
why: "A command-line fuzzy finder that makes searching anything in a terminal actually pleasant."
alternatives: ["find + grep", "fzy", "sk"]
features:
  - "Blazing-fast fuzzy matching"
  - "Works with files, history, anything"
  - "Extremely scriptable and composable"
tags: ["terminal", "fuzzy-finder", "search"]
featured: true
---

## Why I chose FZF

FZF is the glue that holds my terminal workflow together. It gives instant,
fuzzy-matched search over files, command history, git branches, processes —
anything I pipe into it.

## The decider

It's the single most used tool in my shell after the shell itself. Ctrl-R
search, file jumping, process killing — all become one keystroke.

## Signals that sealed it

- Instant results even in huge directories
- Composes perfectly with other CLI tools
- Massive ecosystem of integrations and bindings