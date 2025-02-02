import { motion } from "framer-motion";
import { NextChallenge } from "@/components/NextChallenges";
import { BeyondCoding } from "@/components/BeyondCoding";
import { Expertise } from "@/components/Expertise";
import { HeaderSection } from "@/components/HeaderSection";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeaderSection />

          <Expertise />

          {/* Detailed Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Minha Jornada
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Comecei minha carreira como entusiasta de tecnologia em 2022,
                desenvolvendo pequenos projetos pessoais. Hoje, trabalho com
                stacks modernas como <strong>React.js/Tailwind</strong> no
                front-end e <strong>TypeScript/Node.js</strong> no back-end,
                sempre buscando implementar as melhores práticas de
                desenvolvimento.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Minha filosofia combina <strong>código limpo</strong> com{" "}
                <strong>design impactante</strong>, priorizando sempre a
                experiência do usuário final. Acredito que tecnologia deve
                resolver problemas reais de forma elegante e eficiente.
              </p>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Stack Principal</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "Tailwind.css",
                    "PostgreSQL",
                    "Express.js",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <BeyondCoding />
              <NextChallenge />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
