import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiRubyonrails,
  SiLinux
} from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiRubyonrails, name: "Ruby on Rails" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
];

const TechStack = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stack Tecnológico
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                borderColor: '#3b82f6'
              }}
            >
              <tech.icon className="w-12 h-12 mb-3 text-gray-700 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-4">
            + Outras tecnologias e ferramentas complementares
          </p>
          <div className="flex justify-center gap-2">
            {['AWS', 'GraphQL', 'Jest', 'Redis'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-white rounded-full text-sm shadow-sm border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;