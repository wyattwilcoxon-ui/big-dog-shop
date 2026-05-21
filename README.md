# Big Dog Life™

**Big Dogs. Bigger Energy. Zero Apologies.**

The only brand that gives a $h!t. Oversized, leak-proof poop bags for big dogs — built by big dog owners in Bellefontaine, Ohio.

This repository is the design and development home for the brand's web experience. It's a [Base44](https://base44.com) app that we're using to prototype, polish, and pressure-test the storefront before it ships to Shopify, where the brand will actually live and sell.

---

## What we're building

A direct-to-consumer storefront for the Big Dog Life product line. First product: oversized, leak-proof poop bags engineered for actual big dogs (no more two-handed wrestling matches, no more "did that just go through the bag"). The site needs to do three things at once: feel like a carnival, look like a real brand, and sell like a sharp e-commerce shop.

---

## Brand direction

The vibe is **fun, clean, professional — with a carnival running underneath it.** Think state fair signage rendered by a modern studio. Bold where it counts, quiet where it has to be.

### Voice
- Confident, dry, a little bit Ohio. Never corporate, never gross-out.
- Owns the topic. We say "poop." We don't whisper.
- Short sentences. The occasional ALL CAPS for emphasis. No filler.

### Visual
- **Palette:** cream base, candy-apple red, marigold yellow, deep navy, a hit of fresh grass green. Pulled straight from a ticket booth.
- **Type:** a chunky display face for headlines (state-fair energy), a clean grotesque for body copy.
- **Pattern:** big top stripes and ticket-stub shapes — used sparingly, like seasoning.
- **Photography:** real big dogs, real owners, real yards. Natural light.

### Tone gut-check
If a line could appear on a hand-painted carnival sign **and** in a Vogue gift guide, we're on target.

---

## Tech stack

- **Base44 SDK** — backend + content via [Base44.com](https://base44.com)
- **Vite + React 18** — app shell
- **Tailwind CSS** + Radix UI primitives — design system
- **Framer Motion** — interactions (carousel reveals, hover lifts)
- **canvas-confetti** — for moments worth celebrating (first order, milestones)
- **Stripe** — checkout (pre-Shopify only; production checkout will live in Shopify)

Anything pushed here also reflects in the Base44 Builder.

---

## Local development

**Prerequisites:** Node 18+, npm.

```bash
git clone https://github.com/wyattwilcoxon-ui/big-dog-shop.git
cd big-dog-shop
npm install
```

Create a `.env.local` at the project root:

```bash
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url
```

Then run:

```bash
npm run dev        # local dev server
npm run lint       # check
npm run lint:fix   # autofix
npm run build      # production build
npm run preview    # preview the built bundle
```

---

## Shopify migration plan

Base44 is where we **design**. Shopify is where we **sell**. The split is intentional:

1. **Design here.** Use Base44 + this repo to nail layouts, components, copy, and motion in a fast iteration loop without fighting Shopify's theme constraints.
2. **Lock the system.** When a section earns its spot, freeze it: final copy, final art direction, final spacing.
3. **Port to Shopify.** Re-implement the locked sections as a Shopify theme (Liquid + sections + blocks). Replace local cart/checkout with Shopify's. Move product data and inventory to Shopify.
4. **Cut over.** Point the domain at Shopify. Keep this repo as the design reference and the place we prototype future drops.

When porting, anything that can't survive Shopify's section model gets simplified, not jammed in.

---

## Project structure

```
├── base44/              Base44 app config
├── src/                 React app source
├── index.html           Shell (brand title + meta lives here)
├── tailwind.config.js   Design tokens
├── package.json         Dependencies + scripts
└── README.md            You are here
```

---

## Publishing changes

Open [Base44.com](https://base44.com) and hit Publish to push prototype changes live on the Base44-hosted preview. The real production site lives on Shopify.

---

## Docs & support

- Base44 + GitHub integration: <https://docs.base44.com/Integrations/Using-GitHub>
- Base44 support: <https://app.base44.com/support>

---

Built in Bellefontaine, Ohio. For big dogs and the people who love them.
