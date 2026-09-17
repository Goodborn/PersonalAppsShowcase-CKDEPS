---
name: "TheFuck"
category: "Terminal Tools"
icon: "/icons/thefuck.png"
screenshot: "/screenshots/thefuck.gif"
website: "https://github.com/nvbn/thefuck"
source: "Pacman"
install: "https://archlinux.org/packages/search/?q=thefuck"
why: "The single most relatable terminal tool ever made — it fixes your commands so you don't have to."
alternatives: ["Being more careful when typing"]
features:
  - "Fixes command typos automatically"
  - "Catches missing sudo, wrong dirs, git typos"
  - "Fun to use — huge time saver"
tags: ["terminal", "fun", "bash", "fish"]
featured: false
---

## Why I chose TheFuck

Because we've all been there. You type `gti status` and instead of rage-typing
the whole thing again, you just... let the tool fix it. It's absurdly simple,
incredibly satisfying, and the moment I typed `fuck` and the command ran, I knew
it was staying forever.

## How it works

It matches your failed command against rules — typo in the executable, missing
sudo, wrong git command, forgot to cd into the directory — and pops the corrected
version. One keystroke later and you're back to work.

## Why no alternatives

There isn't really anything else like it. The only "alternative" is being more
careful with my typing, and that's not a real option for me.