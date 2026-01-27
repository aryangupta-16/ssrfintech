// Design Tokens - Professional Fintech Consulting Theme
// All colors reference CSS variables defined in globals.css

export const colors = {
  // Brand Colors
  primary: "text-[var(--color-primary)]",
  accent: "text-[var(--color-accent)]",
  
  // Backgrounds
  bgMain: "bg-[var(--bg-main)]",
  bgSection: "bg-[var(--bg-section)]",
  bgCard: "bg-[var(--bg-card)]",
  bgHeader: "bg-[var(--bg-header)]",
  bgFooter: "bg-[var(--bg-footer)]",
  bgDark: "bg-dark",
  
  // Text Colors
  textPrimary: "text-[var(--text-primary)]",
  textSecondary: "text-[var(--text-secondary)]",
  textMuted: "text-[var(--text-muted)]",
  textInverse: "text-[var(--text-inverse)]",
  
  // Semantic Text (commonly used aliases)
  heading: "text-[var(--text-primary)]",
  subheading: "text-[var(--text-secondary)]",
  body: "text-[var(--text-primary)]",
  
  // Card Styles
  cardBg: "bg-[var(--bg-card)]",
  cardBorder: "border-[var(--border-color)]",
  cardHover: "hover:border-[var(--color-accent)]",
  
  // Borders
  borderColor: "border-[var(--border-color)]",
  borderLight: "border-[var(--border-light)]",
  
  // Links
  linkColor: "text-[var(--link-color)]",
  linkHover: "hover:text-[var(--link-hover)]",
  
  // Icon Backgrounds
  iconBg: "icon-bg",
  
  // Gradient Text
  accentGradientText: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]",
  
  // Button Styles
  primaryBtn: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90",
  secondaryBtn: "bg-transparent text-[var(--color-accent)] border-[var(--color-accent)]",
  
  // Status Colors
  success: "text-[var(--color-success)]",
  warning: "text-[var(--color-warning)]",
  error: "text-[var(--color-error)]",
  info: "text-[var(--color-info)]",
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
  card: "card",
  cardNoBorder: "bg-[var(--bg-card)] rounded-lg transition-all",
  
  button: "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
  buttonLg: "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300",
  buttonPrimary: "btn-primary",
  buttonSecondary: "btn-secondary",
  
  input: "bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] rounded-lg px-4 py-3 w-full",
  
  badge: "px-3 py-1 rounded-full text-sm font-medium",
  badgeAccent: "px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30",
} as const;

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
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
