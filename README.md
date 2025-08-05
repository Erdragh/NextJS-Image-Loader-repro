# NextJS Image Loader redirect behavior reproduction

This is a reproduction repo for an issue I've recently run into, I have made an issue report on NextJS' repo: https://github.com/vercel/next.js/issues/82357

There's a redirect setup in [`next.config.ts`](./next.config.ts) that redirects to the main hostname of a website.
This is done for websites that have multiple domains pointing to it.

The page itself loads perfectly fine, however images fail to load correctly when using NextJS's image loader, with a cryptic error.
