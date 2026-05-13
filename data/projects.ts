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
    name: "Lucky Star Chatbot (RAG + Mini ERP)",
    desc: "A demo RAG (Retrieval Augmented Generation) chatbot integrated with a small ERP simulation: synthetic data generation, inventory forecasting, and internal query answering via retrieval. Implemented in Python with FastAPI; includes SQLite3 and Docker setup for easy deployment.",
    tags: ["Python", "FastAPI", "RAG", "Docker", "Jupyter"],
    github: "https://github.com/tieuphungiter/Demo_chatbot",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: 'MLOps Pipeline',
    desc: 'Full lifecycle MLOps pipeline trên GCP. Infrastructure provisioning với Terraform, containerized ML services trên Kubernetes, CI/CD automation và observability.',
    tags: ['GCP', 'Kubernetes', 'Terraform', 'Docker', 'Python'],
    github: 'https://github.com/tieuphungiter/mlops-pipeline',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'News Processing Service',
    desc: 'Dịch vụ phân tán xử lý và phân tích bài báo sử dụng LLMs. Event-driven architecture với RabbitMQ và Celery cho async task processing.',
    tags: ['Python', 'RabbitMQ', 'Celery', 'OpenAI', 'FastAPI'],
    github: 'https://github.com/tieuphungiter/news-processing',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'E-Commerce Platform',
    desc: 'Nền tảng thương mại điện tử full-stack với microservices architecture. Tích hợp thanh toán, quản lý đơn hàng và hệ thống khuyến mãi.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/tieuphungiter/ecommerce-platform',
    demo: 'https://demo.example.com',
    gradient: 'from-orange-500 to-red-600',
  },
]