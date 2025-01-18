import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          Ver projeto <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;