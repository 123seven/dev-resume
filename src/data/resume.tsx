import { Icons } from "@/components/icons";

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  features?: readonly string[];
  image?: string;
  screenshots?: readonly string[];
  video?: string;
  privacyPolicy?: string;
};

export const DATA = {
  name: "Steven Ju",
  initials: "SJ",
  url: "https://stevenju.top",
  location: "Chengdu, Sichuan, CN",
  locationLink: "https://www.google.com/maps/place/chengdu",
  description:
    "I am a software engineer transitioning to a freelance developer. I enjoy building interesting products and helping others.",
  summary:
    "I have a diverse and inspiring journey that reflects my dedication and passion for programming. While working at a restaurant to make ends meet, I diligently studied programming after my shifts. My hard work paid off in 2018 when I secured my first job as a programmer, marking the beginning of my career in software development. Through continuous learning and persistent effort, I evolved into a full-stack engineer. Now, in my spare time, I enjoy building innovative products with the hope of helping others and making a positive impact.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Vue",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Java",
  ],
  contact: {
    email: "mailto:steven.zhu.email@gmail.com",
    tel: "",
    social: {
      GitHub: {
        url: "https://github.com/123seven",
        icon: Icons.github,
      },
      Gmail: {
        url: "mailto:steven.zhu.email@gmail.com",
        icon: Icons.gmail,
      },
      // X: {
      //   url: "https://x.com/stevenju",
      //   icon: Icons.x,
      // },
      // Youtube: {
      //   url: "https://youtube.com/c/stevenju",
      //   icon: Icons.youtube,
      // },
    },
  },

  work: [],
  education: [],
  projects: [
    {
      title: "i18n",
      href: "https://i18n.usefa.top",
      dates: "July 2024 - Today",
      active: true,
      description:
        "Powered by AI Localization has never been easier. enhance internationalization efficiency with precise translations, expand the business to all parts of the world.",
      technologies: [
        "Next.js",
        "React",
        "Shadcn UI",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "VercelAI",
        "NextAuth",
        "Serverless",
      ],
      links: [
        {
          type: "Website",
          href: "https://i18n.usefa.top",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      features: [],
      screenshots: [],
      image: "/i18n.jpg",
      video: "",
    },
    {
      title: "BestFit AI",
      href: "https://bestfitai.vercel.app",
      dates: "June 2024 - Today",
      active: true,
      description:
        "Discover BestFitAI, the ultimate AI-powered fitness companion. Get personalized workout plans, real-time guidance, and adaptive training programs tailored to your goals. Experience the future of fitness with our smart, digital personal trainer.",
      technologies: [
        "Next.js",
        "React",
        "Shadcn UI",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Cloudflare Workers",
        "Python",
        "ChatGPT",
        "Dify",
        "LLM",
      ],
      links: [
        {
          type: "Website",
          href: "https://bestfitai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      features: [],
      screenshots: [],
      image: "",
      video: "/bestfitai.mp4",
    },
    {
      title: "UseFast",
      href: "https://usefast.vercel.app",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "UseFast one-stop solution, ChatGPT subscription, OpenAI, ChatGPT Plus",
      technologies: [
        "Next.js",
        "React",
        "Shadcn UI",
        "Typescript",
        "TailwindCSS",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://usefast.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      features: [],
      screenshots: [],
      image: "",
      video: "/usefa.mp4",
    },
    {
      title: "Poke",
      href: "",
      dates: "July 2023 - September 2023",
      active: true,
      description:
        "Easy, Simple, and Efficient Integrated Authentication and User Management Features.",
      technologies: [
        "Typescript",
        "React",
        "TailwindCSS",
        "HeadlessUI",
        "Python",
        "FastAPI",
        "SQLite3",
        "Docker",
      ],
      links: [],
      features: [],
      screenshots: [],
      image: "",
      video: "/poke.mp4",
    },
    {
      title: "OpenChat",
      href: "https://open-chat-beta.vercel.app",
      dates: "February 2023 - March 2023",
      active: true,
      description: "A ChatGPT chat client implemented in Vue3 & FastAPI",
      technologies: [
        "Nuxt.js",
        "Vue",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "Website",
          href: "https://open-chat-beta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/123seven/SmartChat-Beta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      features: [],
      screenshots: [],
      image: "/openchat.jpg",
      video: "",
    },
    {
      title: "Subs",
      href: "/projects/subs",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "Stay in control of your subscriptions like never before! Our app allows you to visualize your subscription payments through a clear calendar view, track your subscription history, and get detailed statistics on your expenses. With a built-in list of common subscriptions and the ability to add custom ones, managing your subscriptions has never been easier. Say goodbye to unexpected charges and hello to financial peace of mind.",
      technologies: ["SwiftUI", "Swift", "CoreData", "Combine", "UIKit"],
      links: [
        {
          type: "Apple App Store",
          href: "https://apps.apple.com/us/app/subs-manage-your-subscriptions/id6472188882",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      features: [
        "Subscription expiration reminders",
        "Subscription history tracking",
      ],
      image: "/subs.png",
      screenshots: [
        "/subs-screenshot-1.png",
        "/subs-screenshot-2.png",
        "/subs-screenshot-3.png",
      ],
      video: "",
    },
    {
      title: "Quswer",
      href: "https://chromewebstore.google.com/detail/quswer-ai-app/nbgkcilgdckehkhlndmdgajbhjhjgjim",
      dates: "November 2024 - March 2025",
      active: true,
      description:
        "An AI dialogue client that is a browser plugin, supporting custom model providers.",
      technologies: ["React", "Typescript", "TailwindCSS", "Plasmo", "Chrome Extension API"],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/quswer-ai-app/nbgkcilgdckehkhlndmdgajbhjhjgjim",
          icon: <Icons.google className="size-3" />,
        },
      ],
      features: [
        "AI Chat client",
        "Custom model providers",
      ],
      image: "/quswer.png",
      screenshots: [],
      video: "",
    },
    {
      title: "DeePlayer",
      href: "https://deeplayer.feifeiduck.com",
      dates: "March 2025 - Today",
      active: true,
      description:
        "DeePlayer is a modern multimedia player that supports all video formats, intelligent media management, and cloud resource integration to create a cinema-grade viewing experience for you.",
      technologies: ["React Native", "Typescript", "Expo", "Native Modules", "ffmpeg", "Audio、video playback"],
      links: [
        {
          type: "Website",
          href: "https://deeplayer.feifeiduck.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/deeplayer-create-home-theater/id6744684471",
          icon: <Icons.apple className="size-3" />,
        },
      ],
      features: [
        "All video formats support",
        "Intelligent media management",
        "Cloud resource integration",
        "Plex and Emby media server support"
      ],
      image: "/deeplayer.png",
      screenshots: [
        "/deeplayer-1.png",
        "/deeplayer-2.png",
        "/deeplayer-3.png",
      ],
      video: "",
    },
  ] as const satisfies readonly Project[],
  hackathons: [],
} as const;
