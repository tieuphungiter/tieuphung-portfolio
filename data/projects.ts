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
  name: "MLOps Pipeline",
  desc: "End-to-end MLOps pipeline on AWS: containerized ML services with Docker, orchestration using Kubernetes, CI/CD automation powered by Jenkins, and Python-based workflows for machine learning tasks.",
  tags: ["AWS", "Kubernetes", "Jenkins", "Docker", "Python"],
  github: "https://github.com/tieuphungiter/mlops-pipeline",
  gradient: "from-violet-500 to-purple-600",
},

{
  name: "News Processing Service",
  desc: "Distributed service for processing and analyzing news articles using LLMs. Event-driven architecture with RabbitMQ and Celery for asynchronous task processing.",
  tags: ["Python", "RabbitMQ", "Celery", "OpenAI", "FastAPI"],
  github: "https://github.com/tieuphungiter/news-processing",
  gradient: "from-emerald-500 to-teal-600",
},
{
  name: "E-Commerce Platform",
  desc: "Full-stack e-commerce platform with microservices architecture. Integrated payment system, order management, and promotion engine.",
  tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  github: "https://github.com/tieuphungiter/ecommerce-platform",
  demo: "https://demo.example.com",
  gradient: "from-orange-500 to-red-600",
},
]