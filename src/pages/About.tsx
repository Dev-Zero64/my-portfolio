import { motion } from "framer-motion";
import { Code, Rocket, Palette, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

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
          {/* Header Section */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div
              className="md:col-span-2 space-y-6"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Criando Soluções Digitais com Paixão
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Olá, sou{" "}
                <span className="font-semibold text-blue-600">
                  Rafael Raniere de Oliveira
                </span>
                , Desenvolvedor Full Stack apaixonado por transformar ideias em
                realidade digital. Especialista em ecossistema JavaScript, Ruby
                on Rails e arquiteturas escaláveis.
              </motion.p>
            </motion.div>

            <motion.div
              className="relative h-64 w-64 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFc3XKffXEZLg/profile-displayphoto-shrink_200_200/B4EZRxfXhOHAAY-/0/1737070836222?e=1743033600&v=beta&t=P5sd32raAbPtqauz8wMRyh8sjvrgWirUhgFebHXWh9A"
                alt="Rafael Raniere"
                className="rounded-2xl w-full h-full object-fill"
              />
              <div className="absolute -inset-4 bg-blue-200/10 rounded-2xl" />
            </motion.div>
          </div>

          {/* Expertise Section */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-12"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
          >
            {[
              {
                icon: Code,
                title: "Full Stack",
                text: "Sistemas completos do front ao back-end",
              },
              {
                icon: Rocket,
                title: "Performance",
                text: "Otimização e escalabilidade de aplicações",
              },
              {
                icon: Palette,
                title: "UI/UX",
                text: "Interfaces intuitivas e experiências memoráveis",
              },
              {
                icon: BrainCircuit,
                title: "Arquitetura",
                text: "Soluções robustas e bem estruturadas",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

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
                stacks modernas como <strong>React.js/Tailwind/Vite</strong> no
                front-end e <strong>Ruby on Rails</strong> no back-end, sempre
                buscando implementar as melhores práticas de desenvolvimento.
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
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Tailwind",
                    "PostgreSQL",
                    "Ruby On Rails",
                    "Vite",
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
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Além do Código</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    🎓 Formado em Análise e Desenvolvimento de Sistemas pela
                    Universidade Católica de Brasília
                  </li>
                  <li>📚 Autodidata constante em novas tecnologias</li>
                  <li>🧠 Fluente em inglês</li>
                </ul>
              </div>

              <div className="p-6 bg-blue-600 text-white rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  Próximos Desafios
                </h3>
                <p className="leading-relaxed">
                  Busco colaborar em projetos inovadores que impactem
                  positivamente a vida das pessoas, preferencialmente utilizando
                  tecnologias modernas e boas práticas de desenvolvimento.
                </p>
                <Link
                  to="/projects"
                  className="inline-block mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Ver Projetos
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
