# BIG MOH design system

## Brief

- Subject: BIG MOH Apple Store, a buy, sell and swap phone shop at Shop 4, D'yard Plaza, Lawanson Road, Lagos.
- Audience: Lagos buyers who want to inspect a phone, compare options, trade an existing device and reach the store quickly.
- Job: make the shop feel trustworthy before a visit, help a customer shortlist a model and move that shortlist into WhatsApp.
- Assets: 34 model records, Apple product imagery, six local 3D files, two externally hosted GLBs and the real business details in `AGENTS.md`.
- Constraints: prices and stock stay unconfirmed; eight models currently have verified 3D mappings; never use the user's laptop portrait.
- Stack: the existing buildless HTML, CSS and JavaScript. Keeping the current stack preserves the catalog and makes the storefront cheap to host.

## Concept candidates

| Concept | Territory | Signature moment | Emotion | Anchor | O / F / Fe / P |
|---|---|---|---|---|---|
| The inspection docket | Process | A real 3D phone sits on a ruled counter mat while a physical shop docket records the exact model, preview status and Lawanson inspection path | Assured, tactile, specific | BIG MOH sells trust through in-person inspection at Shop 4 | 5 / 5 / 5 / 1 |
| Lawanson night shelf | Place | Phones arrive on a deep black shelf like illuminated storefront stock after dark | Local, energetic, cinematic | The physical Lawanson shop and its black-gold identity | 4 / 5 / 4 / 2 |
| The upgrade ladder | Product journey | Scroll advances one device generation at a time and compares the change | Curious, informed, progressive | Customers are usually moving from one iPhone generation to another | 3 / 4 / 3 / 3 |

Chosen: **The Lawanson editorial counter**. A deterministic GPT Taste pass selected an editorial split, Cabinet Grotesk, inline typography imagery, a horizontal service accordion, an infinite marquee, GSAP pinning and GSAP card stacking. The direction keeps the physical inspection ritual but removes the receipt/stamp styling from the hero so the message and real 3D device have more authority.

## Concept card

Idea: BIG MOH presents the latest phones like an editorial product launch, then grounds the experience in the real Shop 4 inspection process.

Metaphor: a premium product editorial meeting a working Lawanson phone counter.

Signature: a two-line statement contains a miniature product image while a live 3D phone rotates beside it; the next chapter opens into four gapless Buy, Sell, Swap and Inspect slices.

Emotion: the first three seconds should feel precise, assured and unmistakably BIG MOH.

Motion verb: **reveal and stack**. The phone rotates, the marquee advances, comparison copy pins and the counter actions stack as the customer scrolls.

Screenshot: “Your next iPhone. Inspected in Lawanson.” beside the interactive iPhone Duo in a dark gold-lit product stage.

## Art direction

- Ground, counter black: `#080806`
- Raised surface, smoked black: `#11100d`
- Ink, warm ivory: `#f6f0e5`
- Muted, stone: `#aaa295`
- Line, soft gold: `rgb(225 180 99 / 22%)`
- Accent, BIG MOH gold: `#e1b463`
- Hot accent, pale gold: `#ffe1a3`
- Curtain: `#050504`

Type: Cabinet Grotesk for display and body. Display text uses 400 and 800 weights together, tight tracking and a 0.86 to 0.94 line height. Product metadata remains smaller but never carries decorative section numbering.

Grid: 12 columns at desktop and 4 columns on phones. Outer margin is the fluid gutter. Major content aligns on columns 1, 5 and 9. Section spacing alternates between compact controls, normal product content and full-viewport theatre.

Shape: rounded rectangles use one family from 14 px controls to 28 px large panels. Pills are reserved for compact actions and filters.

Motion: one `cubic-bezier(.16,1,.3,1)` family plus GSAP ScrollTrigger for the pinned comparison chapter and scrubbed counter-card stack. Interface feedback runs 220 to 800 ms. The marquee, 3D rotation and ScrollTriggers stop or simplify under reduced motion.

## Composition

```text
NAV       [mark + name]                [Buy Sell Swap Visit] [Bag]

HERO      [two-line editorial statement]     [live 3D product stage]
          [two actions only]                 [four-model switcher]

INTEREST  [service marquee]
          [BUY] [SELL] [SWAP] [INSPECT] — gapless expanding slices

SHELF     [title + filter/search]      [catalog grid across 12 columns]

COMPARE   [how it works / result]      [scrolling quote table]

COUNTER   [section statement]
          [BUY tray, sticky]
          [SELL tray, sticky]
          [SWAP tray, sticky]

FOOTER    [slapped fact stickers]
          [large BIG MOH wordmark]
          [address] [WhatsApp] [call] [directions]
```

## Genericness test

The initial white navigation, blush field and centered product image could belong to any phone reseller. The redesign names Lawanson in the main statement, makes sourced 3D inspection the hero interaction, and turns BIG MOH's four real customer paths into the dominant visual system.

## Honest limitations

- Stock and prices are confirmed only in WhatsApp.
- Eight catalog entries have verified 3D mappings. The remaining models use model-specific Apple product imagery and are explicitly labelled as image previews.
- Two verified model files still load from an external GitHub source. The local four remain the most reliable previews.
