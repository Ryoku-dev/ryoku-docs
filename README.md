# Ryoku documentation

The public documentation for [Ryoku](https://github.com/Ryoku-dev/ryoku),
published to https://docs.ryoku.dev with [Mintlify](https://mintlify.com).

## Structure

- `docs.json` Mintlify config: theme, brand colors, logos, navigation.
- `index.mdx` the landing page.
- `docs/*.mdx` the documentation pages.
- `assets/brand/` the wordmark and the favicon.

## Local preview

```bash
npm i -g mint
mint dev
```

Changes pushed to `main` deploy automatically once the Mintlify GitHub app is
connected to this repository. Keep the content in step with the
[Ryoku repository](https://github.com/Ryoku-dev/ryoku): the desktop is the
source of truth.
