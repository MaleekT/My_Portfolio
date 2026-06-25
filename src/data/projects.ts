import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "gods-time-textile",
    title: "God's Time Is The Best Textile Stores",
    category: "E-Commerce / Retail",
    description:
      "A faith-inspired textile retail experience with WhatsApp-integrated sales flow, mobile-first design, and a warm devotional brand aesthetic.",
    thumbnailUrl: "/images/projects/textile-hero.jpg",
    fullImageUrl: "/images/projects/textile-hero.jpg",
    liveUrl: "https://gods-time-is-the-best-textile-stores.webflow.io",
    caseStudy: {
      brief:
        "The goal was to modernize a traditional textile retailer's brand through a professional digital storefront. The site needed to showcase high-quality fabrics and heritage patterns while making the catalog intuitive for both retail and wholesale buyers.",
      role: "UI/UX Design, Webflow Development, Brand Design",
      tools: ["Figma", "Webflow", "WhatsApp Business API"],
      approach:
        "I built a grid-focused layout to highlight fabric textures and vibrant colors. Using Webflow CMS, I organized the inventory into filterable categories—material, pattern, and occasion—and integrated high-res galleries to ensure a premium, tactile feel on screen.",
      results:
        "The site successfully expands the brand's reach beyond its physical location. By combining a clean, user-centric interface with fast performance, I delivered a responsive experience that makes browsing large collections effortless on any device.",
      metrics: [
        "WhatsApp Sales Integration",
        "Mobile-First Design",
        "4-Page Webflow Build",
        "Zero to Online in 2 Weeks",
      ],
    },
  },
  {
    id: "split",
    title: "Split",
    category: "DeFi / Web3",
    description:
      "A DeFi savings app on Arc where you set up buckets for your goals and every incoming USDC payment splits across them automatically, with no manual transfers.",
    thumbnailUrl: "/images/projects/split-hero.png",
    fullImageUrl: "/images/projects/split-hero.png",
    liveUrl: "https://split-arc.vercel.app",
    caseStudy: {
      brief:
        "The goal was to make saving feel automatic. Most people save by manually moving money around or keeping a spreadsheet. With Split, you set up buckets for things like savings, bills, or a specific goal, share one payment link, and every USDC payment that lands gets divided across those buckets the moment it arrives.",
      role: "Product Design, Full-Stack Development, Smart Contract Integration",
      tools: ["Figma", "Next.js", "TypeScript", "wagmi / viem", "RainbowKit", "Supabase", "Arc Testnet"],
      approach:
        "I designed a dark, clean interface with a live bucket preview, so the way the split works is clear before you even connect a wallet. On the build side, I handled the wallet connection with RainbowKit and wagmi, kept bucket data in Supabase, and wired up the on-chain splitting on Arc so each payment routes to your buckets by percentage and settles in under a second.",
      results:
        "The result is a savings tool that runs on its own. Money splits the moment it arrives, and there's a clean dashboard for managing your buckets, activity, and goals on both desktop and mobile.",
      metrics: [
        "On-Chain USDC Auto-Splitting",
        "Wallet-Native UX",
        "Sub-1s Routing on Arc",
        "Live on Arc Testnet",
      ],
    },
  },
  {
    id: "pop",
    title: "Pop",
    category: "Web3 / Social Betting",
    description:
      "A 1v1 betting app on Arc where two friends stake USDC on a real outcome, an AI agent checks the result, and the contract pays the winner right away.",
    thumbnailUrl: "/images/projects/pop-hero.png",
    fullImageUrl: "/images/projects/pop-hero.png",
    liveUrl: "https://pop-arc.vercel.app",
    caseStudy: {
      brief:
        "The goal was to settle the small bets friends make and then never actually collect on. Two people pick a bet from a set of templates, both stake the same amount of USDC, and it locks. The tricky part was making it settle quickly and fairly without turning it into a prediction market, so the bet stays private between the two of you and resolves on its own.",
      role: "Product Design, Full-Stack Development, Smart Contracts, AI Agent",
      tools: ["Figma", "Next.js", "TypeScript", "Solidity", "wagmi / viem", "Supabase", "Arc Testnet"],
      approach:
        "I designed a mobile-first dark interface built around the moment a bet settles, with a live card showing the stake, the source, and a countdown. An AI agent pulls the result from one public source, posts a proposed winner on-chain, and opens a 3-hour window to challenge it. If someone disputes it, the bet falls back to both people confirming. The key detail is that the agent can only ever pay one of the two people in the bet, and that rule lives in the contract itself, not on a server you have to trust.",
      results:
        "The payoff is watching the loser's stake land in the winner's wallet seconds after it settles. It works for the kind of private, one-on-one bet that prediction markets were never really built for, with no liquidity needed and very little trust required.",
      metrics: [
        "AI-Proposed Settlement",
        "Trust-Minimized Contract",
        "3-Hour Challenge Window",
        "Live on Arc Testnet",
      ],
    },
  },
  {
    id: "vantage-point",
    title: "Vantage Point",
    category: "SaaS / Infrastructure",
    description:
      "A high-performance cloud architecture agency site with dark UI, live system metrics, and multi-phase process visualization.",
    thumbnailUrl: "/images/projects/vantage-hero.jpg",
    fullImageUrl: "/images/projects/vantage-hero.jpg",
    liveUrl: "https://vantage-point-665ec9.webflow.io",
    caseStudy: {
      brief:
        "The goal was to build a high-performance site for a cloud infrastructure firm targeting Series A–C startups. The design needed to bridge the gap between technical authority and elite-tier visual sophistication to stand out in a crowded SaaS market.",
      role: "UI/UX Design, Webflow Development, Custom Animations",
      tools: ["Figma", "Webflow", "Custom CSS", "JavaScript", "GSAP Animations"],
      approach:
        "I developed a minimalist, high-contrast interface featuring a 'System Pulse' header and custom-coded metric tickers to simulate live infrastructure data. The site utilizes a Webflow CMS for scalable case studies and GSAP-driven interactions to ensure a fluid, developer-centric user experience.",
      results:
        "The final product positions the brand as a premium engineering authority. By combining immersive horizontal scrolls with a phased process reveal, I delivered a site that feels technically precise, is fully responsive, and maintains a sub-2s load time.",
      metrics: [
        "Custom GSAP Animations",
        "CMS-Driven Architecture",
        "Sub-2s Load Time",
        "Mobile-First Responsive",
      ],
    },
  },
  {
    id: "hayes-valley",
    title: "Hayes Valley Interior Design",
    category: "Interior Design / Lifestyle",
    description:
      "A refined digital presence for a boutique interior design studio with CMS-driven team profiles and curated project galleries.",
    thumbnailUrl: "/images/projects/hayes-hero.jpg",
    fullImageUrl: "/images/projects/hayes-hero.jpg",
    liveUrl: "https://hayessvalleyinteriordesign.webflow.io",
    caseStudy: {
      brief:
        "The goal was to create a digital presence for a high-end interior design studio that emphasizes 'timeless elegance'. The site needed to showcase a sophisticated portfolio while making the design process approachable and collaborative for residential clients.",
      role: "UI/UX Design, Webflow Development, CMS Architecture",
      tools: ["Figma", "Webflow", "Webflow CMS", "Custom Forms"],
      approach:
        "I designed a clean, editorial-style layout using soft tones and ample whitespace to highlight the studio's aesthetic. I implemented a CMS-driven portfolio to showcase high-resolution project imagery and integrated a streamlined Team section to personalize the brand and build trust with potential clients.",
      results:
        "The final site delivers a seamless, high-end user experience that reflects the studio's attention to detail. By focusing on visual storytelling and clear calls to action, I created a professional platform that effectively converts visitors into design consultations while maintaining a sub-2s load time.",
      metrics: [
        "Webflow CMS Collections",
        "Dynamic Team Profiles",
        "Custom Form Integration",
        "Fully Client-Managed",
      ],
    },
  },
  {
    id: "melons-site",
    title: "Melons Site",
    category: "Digital Banking / Fintech",
    description:
      "A playful yet polished fintech brand site balancing organic energy with clean, conversion-focused design and smooth interactions.",
    thumbnailUrl: "/images/projects/melons-hero.jpg",
    fullImageUrl: "/images/projects/melons-hero.jpg",
    liveUrl: "https://melons-site.webflow.io",
    caseStudy: {
      brief:
        "The objective was to design a comprehensive landing page for a digital banking platform. The site needed to communicate trust and transparency while showcasing a diverse suite of financial products, ranging from individual virtual accounts to business-facing POS solutions and Banking-as-a-Service (BaaS) APIs.",
      role: "UI/UX Design, Webflow Development",
      tools: ["Figma", "Webflow", "Custom Interactions"],
      approach:
        "I built a clean, fintech-focused interface that uses clear information hierarchy to segment consumer and business offerings. I implemented custom-coded sections to highlight the 'Funds Transfer API' and integrated a robust FAQ system to address user security concerns, ensuring the technical complexity of the backend was matched by a user-friendly frontend.",
      results:
        "The build positions Melon as a reliable financial ecosystem. By focusing on transparency and adaptable UX, I delivered a site that drives sign-ups and inquiries while maintaining high performance across all devices.",
      metrics: [
        "Custom Webflow Interactions",
        "Conversion-Focused Layout",
        "Responsive Design",
        "Brand Differentiation",
      ],
    },
  },
];
