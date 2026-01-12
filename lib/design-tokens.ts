// Design Tokens - Single source of truth for design system

export const colors = {
  // Background gradients
  bgGradient: "bg-gradient-to-b from-[#0a0e1a] via-[#1e1b4b] to-[#0a0e1a]",
  bgGradientRadial: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#0a0e1a] to-[#0a0e1a]",
  
  // Accent gradients
  accentGradient: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
  accentGradientText: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
  
  // Card styles
  cardBg: "bg-gradient-to-br from-slate-800/50 to-slate-900/50",
  cardBorder: "border-slate-700",
  cardHover: "hover:border-indigo-500/50",
  cardBackdrop: "backdrop-blur-sm",
  
  // Section backgrounds
  sectionBg: "bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20",
  sectionBgAlt: "bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20",
  
  // Text colors
  heading: "text-white",
  subheading: "text-gray-300",
  body: "text-gray-400",
  accent: "text-indigo-400",
  accentPurple: "text-purple-400",
  accentPink: "text-pink-400",
  
  // Button styles
  primaryBtn: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white",
  secondaryBtn: "border-indigo-500/50 text-indigo-400 hover:bg-indigo-600/10",
  
  // Icon backgrounds
  iconBg: "bg-gradient-to-br from-indigo-600 to-purple-600",
  iconBgAlt: "bg-gradient-to-br from-purple-600 to-pink-600",
} as const;

export const spacing = {
  section: "py-20",
  sectionSm: "py-12",
  sectionLg: "py-32",
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  containerNarrow: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl",
  containerWide: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
} as const;

export const typography = {
  h1: "text-5xl md:text-6xl font-bold",
  h2: "text-4xl md:text-5xl font-bold",
  h3: "text-3xl md:text-4xl font-bold",
  h4: "text-2xl md:text-3xl font-bold",
  h5: "text-xl md:text-2xl font-bold",
  h6: "text-lg md:text-xl font-bold",
  
  body: "text-base",
  bodyLg: "text-lg",
  bodyXl: "text-xl",
  
  lead: "text-xl md:text-2xl",
} as const;

export const components = {
  card: `${colors.cardBg} ${colors.cardBorder} ${colors.cardBackdrop} ${colors.cardHover} transition-all rounded-lg`,
  cardNoBorder: `${colors.cardBg} ${colors.cardBackdrop} transition-all rounded-lg`,
  
  button: "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
  buttonLg: "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300",
  
  input: "bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 w-full",
  
  badge: "px-3 py-1 rounded-full text-sm font-medium",
  badgeAccent: "px-3 py-1 rounded-full text-sm font-medium bg-indigo-600/20 text-indigo-400 border border-indigo-500/30",
} as const;

export const animations = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
  
  easing: {
    smooth: [0.16, 1, 0.3, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  
  delay: {
    stagger: 0.1,
    card: 0.05,
  },
} as const;

// Helper function to combine multiple design token classes
export const mergeTokens = (...tokens: string[]) => {
  return tokens.filter(Boolean).join(" ");
};
