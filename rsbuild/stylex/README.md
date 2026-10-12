# Rsbuild + StyleX

Minimal example of using [StyleX](https://stylexjs.com/) with Rsbuild via [`unplugin-stylex`](https://github.com/eryue0220/unplugin-stylex).

StyleX emits a `stylex.css` asset. This example disables StyleX `runtimeInjection` and links that file from `public/index.html`, so styles work for both `pnpm dev` and `pnpm build` / `pnpm preview`.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
