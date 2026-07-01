export interface AchievementItem {
  title: string
  subtitle: string
  href?: string
}

export const publications: AchievementItem[] = [
  {
    title: '[Paper 1]',
    subtitle: 'IEEE Conference 2024',
  },
  {
    title: '[Paper 2]',
    subtitle: 'Journal of ..., Vol. X, 2025',
  },

]

export const certifications: AchievementItem[] = [
  {
    title: 'Python for Data Science, AI & Development (2024)',
    subtitle: 'Coursera',
    href: 'https://coursera.org/verify/RST7Q8PBEHDU',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate (2024)',
    subtitle: 'AWS',
  },
  {
    title: 'Windows Server 2019 Administration (2023)',
    subtitle: 'Udemy',
    href: 'https://ude.my/UC-9b723d2d-65f2-4b51-9178-d395096b1c06',
  },
]