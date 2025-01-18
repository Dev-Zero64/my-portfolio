import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiPostgresql,
  SiDocker
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
];

const TechStack = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Tecnologias</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-3xl mx-auto px-4">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <tech.icon className="w-12 h-12 mb-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-600">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;