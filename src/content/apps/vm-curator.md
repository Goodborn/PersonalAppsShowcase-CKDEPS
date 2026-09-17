---
name: "VM Curator"
category: "System"
icon: "/icons/vm-curator.png"
screenshot: "placeholder"
website: "https://github.com/twqt/VM_CURATOR"
repo: "https://github.com/twqt/VM_CURATOR"
source: "AUR"
install: "https://aur.archlinux.org/packages/vm-curator-bin"
why: "A friendly terminal tool that creates, launches and manages QEMU VMs painlessly."
alternatives: ["virt-manager", "GNOME Boxes", "raw qemu flags"]
features:
  - "Easy CLI-based VM creation and management"
  - "Bundles well with QEMU and SDL"
  - "Keeps VMs organized without a heavy GUI"
tags: ["vm", "qemu", "virtualization"]
featured: false
---

## Why I chose VM Curator

Managing QEMU VMs on the command line normally means remembering long flag
incantations. VM Curator wraps that into a clean, guided workflow for creating
and launching VMs.

## The decider

It gives me the power of QEMU without a heavy GUI like virt-manager, and it
plays nicely with its QEMU-full and SDL dependencies out of the box.

## Signals that sealed it

- Simple, guided CLI for VM tasks
- Less overhead than a full GUI manager
- Clean and direct way to organize my VMs