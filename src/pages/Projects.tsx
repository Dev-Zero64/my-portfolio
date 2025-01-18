import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Igreja Embaixada da Rocha Viva",
    description: "Website responsivo com interface moderna e minimalista, intuitivo e facil de navegar, criado para uma instituição religiosa, essa pagina web permite que os fieis e interessados nesta instituição possam conhecer a programação e se atualizar com as noticias mais recentes do ministerio, alem de ter mais informações sobre os cultos de jovens e de crianças.",
    image: "https://embaixadarochaviva.com.br/images/outside.png",
    link: "https:embaixadarochaviva.com.br",
    tags: ["React", "Node.js", "Tailwind", "Material-UI"],
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