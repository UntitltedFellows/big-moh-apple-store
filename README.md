# BIG MOH Apple Store

An immersive, buildless storefront for BIG MOH in Lawanson, Lagos. The site lists 34 iPhones from the October 2026 iPhone Duo back to the iPhone 11 family, offers eight catalog 3D previews, uses GSAP ScrollTrigger for stacked chapters, supports a saved quote bag, and routes buy, sell and swap conversations to WhatsApp.

## Run locally

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>.

## Product rules

- Prices and stock are confirmed by BIG MOH in WhatsApp.
- Only catalog items with verified GLB mappings are marked as 3D-ready.
- Model creators and the applicable source/license links are shown inside product dialogs.
- The current business address is Shop 4, D'yard Plaza, Lawanson Road, Lagos Mainland.

See `DESIGN.md` for the design system and `AGENTS.md` for the handoff and sourcing constraints.
