export interface Experience {
  role: string
  company: string
  type: 'Full-time' | 'Part-time' | 'Intern' | 'Freelance'
  period: string
  location: string
  description?: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'DevOPs Engineer',
    company: 'DXC TECHNOLOGY ',
    type: 'Full-time',
    period: 'Dec 2021 - Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Configured performance environments and tracked metrics during BM tests. Developed CI/CD pipelines with Jenkins (Groovy & Python) to automate deployments.',
    tags: ['AWS','Python', 'Groovy', 'Linux', 'Docker', "Jenkins", "Git"],
  },
  {
    role: 'Python Programming Instructor',
    company: 'ICANTECH',
    type: 'Part-time',
    period: 'May 2022 - May 2025',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Taught Python programming topics including Algorithms, Tkinter, Streamlit, and basic data processing.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Tkinter', 'Streamlit'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Turbo Technology Solution JSC',
    type: 'Intern',
    period: 'May 2021 - Nov 2021',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Conducted high-quality data annotation and preprocessing for object recognition tasks.',
    tags: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'LabelImg'],
  },
]
