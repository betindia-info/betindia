
const HERO_BASIC = [  { name: "title", label: "Title", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "imageUrl", label: "Hero Image URL", type: "text" },
  { name: "imageAlt", label: "Image Alt Text", type: "text" },
];

const HERO_WITH_HIGHLIGHT = [  { name: "title", label: "Title", type: "text" },
  { name: "highlightedTitle", label: "Highlighted Title", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "imageUrl", label: "Hero Image URL", type: "text" },
  { name: "imageAlt", label: "Image Alt Text", type: "text" },
];

export const cmsConfig = {
  home: {
    hero: [  { name: "title", label: "Title", type: "text" },
      { name: "highlightedTitle", label: "Highlighted Title", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "ctaPrimary", label: "Primary Button Text", type: "text" },
      { name: "ctaSecondary", label: "Secondary Button Text", type: "text" },
      { name: "imageUrl", label: "Hero Image URL", type: "text" },
      { name: "imageAlt", label: "Image Alt Text", type: "text" },
    ],

    trustBar: [
      {
        name: "items",
        label: "Trust Items",
        type: "repeater",
        fields: [
          { name: "icon", label: "Icon name (Users, Zap, ShieldCheck, Headphones, Lock)", type: "text" },
          { name: "label", label: "Label", type: "text" },
          { name: "sub", label: "Sub", type: "text" },
          { name: "accent", label: "Accent color (#FF6B00 or #138808)", type: "text" },
        ],
      },
    ],

    faq: [
      { name: "heading", label: "Heading", type: "text" },
      {
        name: "items",
        label: "Questions",
        type: "repeater",
        fields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea" },
        ],
      },
    ],

    seo: [
      { name: "aboutTitle", label: "About Title", type: "text" },
      { name: "aboutText", label: "About Text", type: "textarea" },
      { name: "cricketIdTitle", label: "Cricket ID Title", type: "text" },
      { name: "cricketIdText", label: "Cricket ID Text", type: "textarea" },
      { name: "trustedProviderTitle", label: "Trusted Provider Title", type: "text" },
      { name: "trustedProviderText", label: "Trusted Provider Text", type: "textarea" },
      { name: "sportsbookPlatformTitle", label: "Sportsbook Platform Title", type: "text" },
      { name: "sportsbookPlatformText", label: "Sportsbook Platform Text", type: "textarea" },
      { name: "playSmartTitle", label: "Play Smart Title", type: "text" },
      { name: "playSmartText", label: "Play Smart Text", type: "textarea" },
    ],
  },

  // ── Other pages (hero-driven). Keys match getPage(pageId) in each page. ──────
  "about-us": { hero: HERO_BASIC },
  casino: {
    hero: HERO_WITH_HIGHLIGHT,
    about: [
      { name: "aboutTitle", label: "About Title", type: "text" },
      { name: "aboutText", label: "About Text", type: "textarea" },
    ],
    featured: [
      { name: "featuredTitle", label: "Featured Title", type: "text" },
      { name: "featuredText", label: "Featured Text", type: "textarea" },
    ],
    liveCasino: [
      { name: "liveCasinoTitle", label: "Live Casino Title", type: "text" },
      { name: "liveCasinoText", label: "Live Casino Text", type: "textarea" },
      { name: "liveBlackjackTitle", label: "Live Blackjack Title", type: "text" },
      { name: "liveBlackjackText", label: "Live Blackjack Text", type: "textarea" },
      { name: "liveRouletteTitle", label: "Live Roulette Title", type: "text" },
      { name: "liveRouletteText", label: "Live Roulette Text", type: "textarea" },
      { name: "liveBaccaratTitle", label: "Live Baccarat Title", type: "text" },
      { name: "liveBaccaratText", label: "Live Baccarat Text", type: "textarea" },
    ],
    popularSlots: [
      { name: "popularSlotsTitle", label: "Popular Slots Title", type: "text" },
      { name: "popularSlotsText", label: "Popular Slots Text", type: "textarea" },
    ],
    teenPatti: [
      { name: "teenPattiTitle", label: "Teen Patti Title", type: "text" },
      { name: "teenPattiText", label: "Teen Patti Text", type: "textarea" },
    ],
    aviator: [
      { name: "aviatorTitle", label: "Aviator Title", type: "text" },
      { name: "aviatorText", label: "Aviator Text", type: "textarea" },
    ],
    whyChoose: [
      { name: "whyChooseTitle", label: "Why Choose Title", type: "text" },
      { name: "whyChooseText", label: "Why Choose Text", type: "textarea" },
    ],
    cricketId: [
      { name: "cricketIdTitle", label: "Cricket ID Title", type: "text" },
      { name: "cricketIdText", label: "Cricket ID Text", type: "textarea" },
    ],
    platform: [
      { name: "platformTitle", label: "Platform Title", type: "text" },
      { name: "platformText", label: "Platform Text", type: "textarea" },
    ],
    bestCasino: [
      { name: "bestCasinoTitle", label: "Best Casino Title", type: "text" },
      { name: "bestCasinoText", label: "Best Casino Text", type: "textarea" },
    ],
    finalCta: [
      { name: "finalCtaTitle", label: "Final CTA Title", type: "text" },
      { name: "finalCtaText", label: "Final CTA Text", type: "textarea" },
    ],
    faq: [
      { name: "badge", label: "Badge", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      {
        name: "items",
        label: "FAQ Items",
        type: "repeater",
        fields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea" },
        ],
      },
    ],
  },
  sports: {
    hero: HERO_WITH_HIGHLIGHT,
    whyBet: [
      { name: "title", label: "Title", type: "text" },
      {
        name: "items",
        label: "Features",
        type: "repeater",
        fields: [
          { name: "title", label: "Title", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    liveCricket: [
      { name: "title", label: "Title", type: "text" },
      { name: "text", label: "Text", type: "textarea" },
    ],
    popularSports: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "text", label: "Intro text", type: "textarea" },
    ],
    bettingMarkets: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
    ],
    
    finalCta: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
    ],
    faq: [
      { name: "badge", label: "Badge", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      {
        name: "items",
        label: "FAQ Items",
        type: "repeater",
        fields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea" },
        ],
      },
    ],
  },
  cricket: {
    hero: HERO_BASIC,
    seoBlocks: [
      { name: "cricketBettingTitle", label: "Cricket Betting Title", type: "text" },
      { name: "cricketBettingText", label: "Cricket Betting Text", type: "textarea" },
      { name: "liveCricketBettingTitle", label: "Live Cricket Betting Title", type: "text" },
      { name: "liveCricketBettingText", label: "Live Cricket Betting Text", type: "textarea" },
      { name: "whyChooseTitle", label: "Why Choose Title", type: "text" },
      { name: "whyChooseText", label: "Why Choose Text", type: "textarea" },
    ],
    faq: [
      { name: "badge", label: "Badge", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      {
        name: "items",
        label: "FAQ Items",
        type: "repeater",
        fields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea" },
        ],
      },
    ],
  },
  football: { hero: HERO_BASIC },
  slots: { hero: HERO_BASIC },
  "table-games": { hero: HERO_BASIC },
  promotions: {
    hero: HERO_BASIC,
    featured: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      {
        name: "items",
        label: "Promotions List",
        type: "repeater",
        fields: [
          { name: "title", label: "Title", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
          { name: "cta", label: "CTA Text", type: "text" },
          { name: "href", label: "CTA Href", type: "text" },
        ],
      },
    ],
    seoBlocks: [
      { name: "bonusesTitle", label: "Bonuses Block Title", type: "text" },
      { name: "bonusesText", label: "Bonuses Block Text", type: "textarea" },
      { name: "casinoPromotionsTitle", label: "Casino Promotions Title", type: "text" },
      { name: "casinoPromotionsText", label: "Casino Promotions Text", type: "textarea" },
      { name: "whyStandOutTitle", label: "Why Stand Out Title", type: "text" },
      { name: "whyStandOutText", label: "Why Stand Out Text", type: "textarea" },
    ],
    whyJoin: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      {
        name: "items",
        label: "Features List",
        type: "repeater",
        fields: [
          { name: "title", label: "Title", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    finalCta: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
    ],
    faq: [
      { name: "badge", label: "Badge", type: "text" },
      { name: "heading", label: "Heading", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "textarea" },
      {
        name: "items",
        label: "FAQ Items",
        type: "repeater",
        fields: [
          { name: "question", label: "Question", type: "text" },
          { name: "answer", label: "Answer", type: "textarea" },
        ],
      },
    ],
  },
  "contact-us": { hero: HERO_BASIC },
  "privacy-policy": { hero: HERO_BASIC },
  "terms-and-conditions": { hero: HERO_BASIC },
  "responsible-gaming": { hero: HERO_BASIC },
  "vip-benefits": { hero: HERO_BASIC },
};
