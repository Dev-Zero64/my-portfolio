import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Uma plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#",
    tags: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Portfolio Website",
    description: "Website responsivo para apresentação de projetos e informações profissionais.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    link: "#",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;