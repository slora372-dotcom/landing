// All site content lives here. Edit this file to rebrand the page —
// no need to touch index.html, styles.css or script.js.
//
// Any item with an `img` field will show that image instead of the
// placeholder artwork. Put images in /assets and reference them like
// img: "assets/banner-1.jpg".

window.SITE = {
  brand: {
    name: "YOURBRAND",
    tagline: "Your tagline here",
    logo: "", // e.g. "assets/logo.png"
    partner: { label: "PARTNERSHIP", name: "PARTNER", url: "#" },
  },

  currency: "RM",
  minDeposit: 1,
  minWithdrawal: 25,

  // Where the buttons go. Replace "#" with your real URLs.
  links: {
    login: "#",
    register: "#",
    deposit: "#",
    withdraw: "#",
    history: "#",
    bonus: "#",
    liveChat: "#",
    settings: "#",
    downlineChart: "#",
    freeBot: "#",
    saveLinks: "#",
    partnership: "#",
    readMore: "#",
    otherSite: { label: "YOURBRAND", url: "#" },
    androidApp: "#",
    iosApp: "#",
  },

  // Link that "Copy referral link" / "Share" hand out.
  referralUrl: "https://example.com/?ref=YOURCODE",

  announcement:
    "Welcome to YOURBRAND. Faster withdrawals, smoother gameplay and a stronger online gaming experience. Edit this text in config.js.",

  banners: [
    { title: "DEPOSIT & WITHDRAW", highlight: "USDT", sub: "Easy · Fast · Secure with crypto", icon: "🪙", colors: ["#f4f7ff", "#cfdcff"], dark: false, img: "", url: "#" },
    { title: "WELCOME BONUS", highlight: "100%", sub: "For new members", icon: "🎁", colors: ["#0b2a7a", "#1d4fd8"], dark: true, img: "", url: "#" },
    { title: "DAILY REBATE", highlight: "UNLIMITED", sub: "Claim every day", icon: "💎", colors: ["#7a0b1c", "#d81d3c"], dark: true, img: "", url: "#" },
  ],

  trustPoints: ["We accept most payment methods", "24 hours service", "Safe & fast withdrawal"],

  referral: {
    heading: "WEEKLY COMMISSION",
    percent: "10%",
    line1: "Share with your friend",
    line2: "Share more! Earn more!",
    footnote: "Downline win or loss claim every Monday at 12AM",
    img: "",
  },

  hotGames: [
    { name: "Battle Riches", provider: "Provider A", rtp: "96.52", icon: "⚔️", hue: 265, img: "", url: "#" },
    { name: "Rage T-Rex 2", provider: "Provider B", rtp: "97.34", icon: "🦖", hue: 140, img: "", url: "#" },
    { name: "Super Gems", provider: "Provider C", rtp: "96.21", icon: "💎", hue: 20, img: "", url: "#" },
    { name: "Jump for Richness", provider: "Provider D", rtp: "96.52", icon: "🚤", hue: 205, img: "", url: "#" },
    { name: "Mahjong Gold", provider: "Provider E", rtp: "96.80", icon: "🀄", hue: 45, img: "", url: "#" },
    { name: "Lucky Panda", provider: "Provider F", rtp: "96.10", icon: "🐼", hue: 0, img: "", url: "#" },
  ],

  categories: [
    { id: "slot", label: "SLOT GAME", icon: "🎰" },
    { id: "jackpot", label: "JACKPOT GAME", icon: "💰" },
    { id: "hot", label: "HOT GAME", icon: "🔥" },
    { id: "live", label: "LIVE CASINO", icon: "🃏" },
    { id: "sports", label: "SPORTS", icon: "⚽" },
    { id: "fishing", label: "FISHING", icon: "🐟" },
  ],

  // `category` must match a category id above. `tag` is an optional corner label.
  games: [
    { name: "Provider 1", category: "slot", icon: "👹", hue: 265, img: "", url: "#" },
    { name: "Provider 2", category: "slot", icon: "🧙", hue: 340, img: "", url: "#" },
    { name: "Provider 3", category: "slot", icon: "🐼", hue: 15, img: "", url: "#" },
    { name: "Provider 4", category: "slot", icon: "🐵", hue: 120, img: "", url: "#" },
    { name: "Provider 5", category: "slot", icon: "⚡", hue: 45, img: "", url: "#" },
    { name: "Provider 6", category: "slot", icon: "🏛️", hue: 35, img: "", url: "#" },
    { name: "Provider 7", category: "slot", icon: "🗡️", hue: 25, img: "", url: "#" },
    { name: "Provider 8", category: "slot", icon: "🏮", hue: 30, img: "", url: "#" },
    { name: "Provider 9", category: "slot", icon: "🔮", hue: 285, img: "", url: "#" },
    { name: "Provider 10", category: "slot", icon: "🦔", hue: 130, img: "", url: "#" },
    { name: "Provider 11", category: "slot", icon: "🛡️", hue: 215, tag: "1:1", img: "", url: "#" },
    { name: "Provider 11", category: "slot", icon: "🛡️", hue: 215, tag: "1:100", img: "", url: "#" },
    { name: "Provider 12", category: "slot", icon: "🌸", hue: 320, tag: "1:1", img: "", url: "#" },
    { name: "Provider 12", category: "slot", icon: "🌸", hue: 320, tag: "1:100", img: "", url: "#" },
    { name: "Provider 13", category: "slot", icon: "♠️", hue: 50, tag: "1:100", img: "", url: "#" },
    { name: "Provider 14", category: "slot", icon: "🦹", hue: 250, img: "", url: "#" },
    { name: "Provider 15", category: "slot", icon: "🎩", hue: 28, img: "", url: "#" },
    { name: "Provider 16", category: "slot", icon: "🐧", hue: 200, img: "", url: "#" },
    { name: "Provider 17", category: "slot", icon: "🐆", hue: 270, img: "", url: "#" },
    { name: "Provider 18", category: "slot", icon: "🎯", hue: 30, img: "", url: "#" },
    { name: "Jackpot 1", category: "jackpot", icon: "💰", hue: 45, img: "", url: "#" },
    { name: "Jackpot 2", category: "jackpot", icon: "👑", hue: 0, img: "", url: "#" },
    { name: "Hot 1", category: "hot", icon: "🔥", hue: 10, tag: "1:100", img: "", url: "#" },
    { name: "Hot 2", category: "hot", icon: "🌶️", hue: 350, tag: "1:1", img: "", url: "#" },
    { name: "Live 1", category: "live", icon: "🃏", hue: 150, img: "", url: "#" },
    { name: "Live 2", category: "live", icon: "🎲", hue: 0, img: "", url: "#" },
    { name: "Sports 1", category: "sports", icon: "⚽", hue: 210, img: "", url: "#" },
    { name: "Fishing 1", category: "fishing", icon: "🐟", hue: 190, img: "", url: "#" },
  ],

  payments: [
    { name: "E-Wallet 1", short: "eW", color: "#0a5fd6" },
    { name: "E-Wallet 2", short: "B", color: "#e53935" },
    { name: "E-Wallet 3", short: "GP", color: "#00a651" },
    { name: "Telco 1", short: "T1", color: "#3b8fd4" },
    { name: "Telco 2", short: "T2", color: "#f5c400" },
    { name: "Telco 3", short: "T3", color: "#e3002b" },
    { name: "Telco 4", short: "T4", color: "#ff7a00" },
    { name: "QR Pay", short: "QR", color: "#e6007e" },
    { name: "Bank 1", short: "B1", color: "#f5b800" },
    { name: "Bank 2", short: "B2", color: "#c8102e" },
    { name: "Bank 3", short: "B3", color: "#4aa8e0" },
    { name: "Bank 4", short: "B4", color: "#d6005a" },
    { name: "Online Banking", short: "OB", color: "#1b3a8a" },
    { name: "USDT", short: "₮", color: "#26a17b" },
  ],

  socials: [
    { name: "Facebook", short: "f", color: "#1877f2", url: "#" },
    { name: "Telegram", short: "✈", color: "#229ed9", url: "#" },
    { name: "Instagram", short: "◎", color: "#d6249f", url: "#" },
    { name: "YouTube", short: "▶", color: "#ff0000", url: "#" },
    { name: "TikTok", short: "♪", color: "#000000", url: "#" },
    { name: "X", short: "𝕏", color: "#000000", url: "#" },
  ],

  footerNote: "18+ only. Please play responsibly.",
};
