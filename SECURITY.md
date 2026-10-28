# Security Policy

## How Neat handles your text

Neat is a single static HTML page. Everything happens in your browser:

- No text, file or clipboard content is ever sent anywhere. There is no server, no account, no analytics and no telemetry.
- The page sets a strict Content-Security-Policy (`connect-src 'none'`, `default-src 'none'`), so the browser itself blocks any network request after the page loads.
- There are no third-party scripts, fonts or libraries. All code is in `index.html` and can be read in full.
- Only two preferences are stored, in your browser's `localStorage`: the theme (`dr-theme`) and the language (`dr-lang`). Your text is never stored.
- The clipboard is read only when you click **Paste** or press paste yourself, and written only with the cleaned result.

## Supported versions

Only the latest version on the `main` branch, and the site published from it, is supported.

## Reporting a vulnerability

Please report security problems privately through GitHub:
[Report a vulnerability](https://github.com/CDAVIO/Diacritics-remover/security/advisories/new).

Please do not open a public issue for a security problem. Include what you found, how to reproduce it and the browser you used. You will get an answer as soon as possible, and a fix will be published on `main` once it is confirmed.

For bugs that are not security related, open an issue: [Report a bug](https://github.com/CDAVIO/Diacritics-remover/issues/new).
