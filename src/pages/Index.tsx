import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TechStack from "@/components/TechStack";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Index = () => {
  const images = [
    "https://media.licdn.com/dms/image/v2/D4E03AQFc3XKffXEZLg/profile-displayphoto-shrink_800_800/B4EZRxfXhOHAAc-/0/1737070836241?e=1742428800&v=beta&t=zn1sQvdk3fTvZemjdl9LE0NsppRm72WfWIXNf99jAHM",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="block text-gray-800 mb-2">Olá, eu sou</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rafael Oliveira
                  </span>
                </h1>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-lg font-medium">
                    Desenvolvedor Full Stack
                  </span>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Apaixonado por criar soluções digitais performáticas e
                escaláveis utilizando tecnologias modernas como React, Node.js e
                Ruby on Rails.
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Ver Projetos
                  <ArrowDown className="w-4 h-4" />
                </Link>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Dev-Zero64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-800 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafael-oliveira-b8b131347/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={images[0]}
                  alt="Rafael Oliveira"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" />
              </div>

              <div className="absolute -bottom-4 right-8 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Disponível para projetos
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center py-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />
    </div>
  );
};

export default Index;
