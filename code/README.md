# Code Directory

## Purpose

All project implementation code goes here.

## Examples

### Web App

- Place the app source in `/code/web`.
- Keep framework files inside `/code`.

### Shopify

- Place theme or app files in `/code/shopify`.
- Keep store-specific notes outside code when possible.

### WordPress

- Place theme, plugin, or custom code in `/code/wordpress`.
- Keep uploads and generated files out of the repository.

## Rule

- Do not place application source code outside `/code`.

## Current Implementation

- Next.js app: `code/app`
- Static web prototype: `code/web/index.html`
- Run from the repository root with `python -m http.server 4173 --bind 127.0.0.1`
- Open `http://127.0.0.1:4173/code/web/index.html`
