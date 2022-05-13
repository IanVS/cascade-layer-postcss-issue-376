# Reproduction for postcss-cascade-layers issue

Steps to reproduce:

In a browser that supports native cascade layers:

1. npm i
2. npm run dev

Note that the button font is small.  This happens because layers are working.  The `defaults` layer has a lower priority than `components`, so even though the `.btn` styles occur lower in the import order than the css module (see `App.tsx`), it is overridden by the css module styling.

However, if you uncomment `postcssCascadeLayers()` in `postcss.config.js` (and then stop and restart the dev server), you'll see this is no longer the case.  The `.btn` styles are applied, and the text size of the button is larger.
