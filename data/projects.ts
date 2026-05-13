export interface Project {
  name: string
  desc: string
  tags: string[]
  github: string
  demo?: string
  gradient: string
}

export const projects: Project[] = [
  {
    name: 'AI Chat System',
    desc: 'Hệ thống chat AI với RAG (Retrieval Augmented Generation). Hỗ trợ nhiều LLM providers, session management và PostgreSQL persistence. Real-time streaming với SSE.',
    tags: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yourusername/ai-chat-system',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'MLOps Pipeline',
    desc: 'Full lifecycle MLOps pipeline trên GCP. Infrastructure provisioning với Terraform, containerized ML services trên Kubernetes, CI/CD automation và observability.',
    tags: ['GCP', 'Kubernetes', 'Terraform', 'Docker', 'Python'],
    github: 'https://github.com/yourusername/mlops-pipeline',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'News Processing Service',
    desc: 'Dịch vụ phân tán xử lý và phân tích bài báo sử dụng LLMs. Event-driven architecture với RabbitMQ và Celery cho async task processing.',
    tags: ['Python', 'RabbitMQ', 'Celery', 'OpenAI', 'FastAPI'],
    github: 'https://github.com/yourusername/news-processing',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'E-Commerce Platform',
    desc: 'Nền tảng thương mại điện tử full-stack với microservices architecture. Tích hợp thanh toán, quản lý đơn hàng và hệ thống khuyến mãi.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://demo.example.com',
    gradient: 'from-orange-500 to-red-600',
  },
]