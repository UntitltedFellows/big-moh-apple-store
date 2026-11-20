# BIG MOH local development

Repository: https://github.com/UntitltedFellows/big-moh-apple-store
Production: https://big-moh-apple-store.vercel.app/

## Run locally

From this directory run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173/ in Brave. Keep the server process running while previewing. The application is currently buildless HTML/CSS/JavaScript in index.html with four local GLB assets. Some images, the model-viewer library, and two GLBs still load from external hosts.

## Business and design

BIG MOH Apple Store buys, sells, and swaps phones at Shop 4, D’yard Plaza, Lawanson Road, Lagos. WhatsApp: +2348137016992. The initiative is UntitledFellows, building 20 business websites for free. The exact GitHub organization spelling is UntitltedFellows.

Use the installed relevant UI/design skills, including awwwards and jury, and inspect their instructions before applying them. Reference resources include PanelUI, Anatomy, diagram-design, Hyperframes, and 21st.dev. The latest accepted landing reference has white navigation, a blush product hero, prominent iPhone imagery, and a smaller promotion card. Earlier references include a perspective-tunnel hero, product shelf, liquid-glass navigation, and sticker footer.

Never use the user's laptop portrait. Use real, model-specific licensed 3D assets with creator attribution. The requested experience includes an automatically loading phone shelf, animated large product dialogs with rotatable models and model-specific specifications, cart, comparison, scroll stacks, and responsive motion.

## Verified state and outstanding work

- Latest imported commit: da667b1. All 33 catalog entries and their model-specific Apple technical data are in index.html.
- Six models have GLB mappings: iPhone 11, 12 Pro, 13, 14 Plus, 17 Pro, and 17 Pro Max. The first four are repository files, and the last two use external GitHub URLs.
- Twenty-seven models still need matching 3D assets. Existing photos are fallbacks. Source listings from earlier research require license and visual accuracy checks before use.
- Current specification extraction filters headings and short numeric text. Audit completeness against each original Apple technical page before describing it as exhaustive. The 18 Pro Max has separate user-supplied GSMArena data.
- Prices and stock require BIG MOH confirmation. Cart checkout sends a shortlist to WhatsApp. Price comparison uses customer-entered quotes.
- Check actual visible rendering and interactions in Brave. A Vercel READY state or a model load event alone is insufficient proof of visual quality.

Work locally and provide a reviewable result. Push or deploy when the user requests it. Preserve user changes and inspect git status before editing.
