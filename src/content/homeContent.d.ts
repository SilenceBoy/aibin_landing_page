export interface NavItem {
  href: string
  label: string
}

export interface HeroStat {
  label: string
  value: string
}

export interface HeroConfig {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  highlights: string[]
  stats: HeroStat[]
}

export interface IntroConfig {
  title: string
  paragraphs: string[]
  tags: string[]
}

export interface InfoCard {
  icon: string
  title: string
  description: string
}

export interface CapabilityItem {
  icon: string
  title: string
  description: string
  bulletPoints: string[]
  metric: string
  buttonText: string
  buttonLink: string
}

export interface PortfolioCard {
  title: string
  shortDescription: string
  proofText: string
  tags: string[]
  buttonText: string
  buttonLink: string
}

export interface PortfolioCategory {
  title: string
  buttonText: string
  buttonLink: string
  items: PortfolioCard[]
}

export interface CooperationItem {
  title: string
  description: string
  scenarios: string[]
  suitableFor: string
  buttonText: string
  buttonLink: string
}

export interface ContactChannel {
  type: string
  label: string
  value: string
  href: string
}

export interface ContactConfig {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  channels: ContactChannel[]
}

export const siteMeta: {
  name: string
  tagline: string
  bookingLink: string
}

export const notionLinks: Record<string, string>
export const navigationItems: NavItem[]
export const heroConfig: HeroConfig
export const introConfig: IntroConfig
export const problemConfig: {
  title: string
  description: string
  items: InfoCard[]
}
export const capabilityConfig: {
  title: string
  description: string
  items: CapabilityItem[]
}
export const portfolioConfig: {
  title: string
  description: string
  categories: PortfolioCategory[]
}
export const cooperationConfig: {
  title: string
  items: CooperationItem[]
}
export const audienceConfig: {
  title: string
  items: InfoCard[]
}
export const contactConfig: ContactConfig
