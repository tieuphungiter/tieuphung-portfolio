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
    role: 'Software Engineer',
    company: 'Công ty ABC',
    type: 'Full-time',
    period: 'Jan 2025 - Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Phát triển và duy trì các hệ thống backend quy mô lớn. Thiết kế API RESTful và tích hợp các dịch vụ AI.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Backend Developer',
    company: 'Startup XYZ',
    type: 'Full-time',
    period: 'Jun 2023 - Dec 2024',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Xây dựng microservices cho nền tảng thương mại điện tử. Tối ưu hóa hiệu suất database và caching.',
    tags: ['Node.js', 'TypeScript', 'Redis', 'MongoDB'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tech Company DEF',
    type: 'Intern',
    period: 'Jan 2023 - Jun 2023',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Tham gia phát triển tính năng frontend và backend cho ứng dụng web.',
    tags: ['React', 'Node.js', 'MySQL'],
  },
]
