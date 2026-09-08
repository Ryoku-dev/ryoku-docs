# Ryoku documentation

The public documentation for [Ryoku Arch](https://github.com/ryoku-dev/ryoku-arch),
published to https://docs.ryoku.dev with [Mintlify](https://mintlify.com).

## Structure

- `docs.json` Mintlify config: theme, brand colors, logos, navigation.
- `index.mdx` the landing page.
- `docs/*.mdx` the documentation pages.
- `assets/brand/` brand logos and the favicon.

## Local preview

```bash
npm i -g mint
mint dev
```

Changes pushed to the connected branch deploy automatically. Keep the content in
step with the `ryoku-arch` repository: the desktop is the source of truth.
