# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

`yarn deploy` publishes to GitHub Pages and is intended for a GitHub repository that is hosted there.
It is not the right command for a private workspace or a private repository.

For private/local use:

```bash
yarn build
```

This generates the static site in `build/`, which you can upload to any static host (for example Cloudflare Pages, Netlify, or your own server).
