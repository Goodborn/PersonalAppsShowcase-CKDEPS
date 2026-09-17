---
name: "Zoxide"
category: "Terminal Tools"
icon: "/icons/zoxide.png"
screenshot: "/screenshots/zoxide.gif"
website: "https://github.com/ajeetdsouza/zoxide"
repo: "https://github.com/ajeetdsouza/zoxide"
source: "Pacman"
install: "https://archlinux.org/packages/search/?q=zoxide"
why: "A smarter cd command that learns where you go and jumps there instantly."
alternatives: ["cd + aliases", "autojump", "fasd", "z"]
features:
  - "Learns your most-used directories"
  - "Fuzzy matches directory names"
  - "Works in every shell"
tags: ["terminal", "navigation", "cd"]
featured: true
---

## Why I chose Zoxide

`cd` into deep paths was always the most tedious part of my workflow. Zoxide
remembers where I actually go, so I just type `z proj` and I'm there.

## The decider

It's effectively my `cd` replacement now — `z` + a fuzzy fragment of the path
beats typing or tabbing through `~/Documents/Projects/x/y/z` every time.

## Signals that sealed it

- Freakishly accurate ranking of where I want to go
- Works in bash, zsh, fish, and more
- Runs entirely locally, no daemon