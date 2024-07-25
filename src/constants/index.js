import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  protopie,
  raindrop,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  experience,
  network,
  graduation,
  contact,
  summary,
  telegram,
  twitter,
  yourlogo,
  linkedin,
  feedback,
  grammarly,
  resume,
  googledoc,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "AI-Powered CV Analysis",
  "Personalized Feedback",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  experience,
  graduation,
  summary,
  network,
  contact,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With AI-driven insights and personalized feedback, it's the perfect solution for job seekers looking to enhance their CVs.";

export const collabContent = [
  {
    id: "0",
    title: "Personalized Feedback",
    text: collabText,
  },
  {
    id: "1",
    title: "AI-Driven Insights",
    text: "Utilize advanced AI technology to get detailed insights and recommendations for your CV.",
  },
  {
    id: "2",
    title: "Career Advancement",
    text: "Enhance your CV to improve your chances of landing your dream job.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Linkedin",
    icon: linkedin,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Feedback",
    icon: feedback,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Grammarly",
    icon: grammarly,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Resume",
    icon: resume,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Google Doc",
    icon: googledoc,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI CV analysis, personalized feedback",
    price: "0",
    features: [
      "AI-powered CV analysis",
      "Basic personalized feedback",
      "Access to core features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI analysis, detailed feedback, optimization tips",
    price: "9.99",
    features: [
      "Advanced AI-powered CV analysis",
      "Detailed personalized feedback",
      "CV optimization tips and suggestions",
      "CV generation",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Custom AI analysis, comprehensive feedback, dedicated support",
    price: null,
    features: [
      "Custom AI-powered CV analysis",
      "Comprehensive personalized feedback",
      "Tailored CV optimization strategies",
      "Dedicated account manager for personalized support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Upload Your CV",
    text: "Easily upload your CV for analysis and get personalized feedback to enhance its quality.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Receive Expert Feedback",
    text: "Our AI analyzes your CV and provides detailed feedback to help you improve and stand out.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Improve Continuously",
    text: "Use our platform to make incremental improvements to your CV with each iteration.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Access Anywhere",
    text: "Connect with our platform from any device, ensuring you can get feedback on the go.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Boost Your Career",
    text: "Our insights and suggestions help you create a professional CV that attracts employers.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Save Time",
    text: "Quickly get actionable feedback without spending hours searching for advice.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
