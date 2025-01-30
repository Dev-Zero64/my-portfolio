import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Meu portfólio criativo
            </h1>
            <p className="text-lg text-gray-600">
              Projetos selecionados que demonstram minha expertise em desenvolvimento full-stack e design de interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard 
                  {...project}
                  className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="relative p-6 h-full flex flex-col justify-end">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-sm text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Ver Projeto
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </ProjectCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 mb-6">Interessado em ver mais trabalhos?</p>
            <a
              href="https://wa.me/5561981353423?text="
              target="_blank"
              className="inline-flex items-center px-8 py-3.5 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Vamos conversar
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;