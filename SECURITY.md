# Security

Bridge Tutor is a static web app: it runs entirely in your browser, has no server side and no
accounts, and keeps your progress only in your browser's local storage. The site is served by
Cloudflare Pages with a content security policy (`public/_headers`).

## Reporting a vulnerability

Please report security problems privately through GitHub: on the repository's **Security** tab,
choose **Report a vulnerability**. Don't open a public issue for them.

Useful to include: what an attacker could do, the steps or a shared deal link that shows it, and
the browser you used. You can expect a first answer within a week.

## Scope

In scope: anything that lets a shared link, an imported deal (code, PBN, LIN) or a restored backup
run script, read or change data it shouldn't, or break the app for the person who opens it; and
problems with the site's headers or service worker.

Out of scope: the bots' bidding and play (please open a normal issue when they are wrong), and
denial of service by deliberately huge input pasted into your own browser.
