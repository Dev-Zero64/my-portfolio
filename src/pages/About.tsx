import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="space-y-8">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Sobre Mim
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Olá, meu nome é Rafael Raniere de Oliveira. Sou um desenvolvedor Full Stack especializado em criar aplicações web modernas e escaláveis. Tenho experiência em diversas tecnologias do ecossistema JavaScript, incluindo React, Node.js, Tailwind CSS, e muito mais.
                    </motion.p>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Minha jornada no desenvolvimento web começou há alguns anos e desde então, tenho me dedicado a aprender e aprimorar minhas habilidades. Adoro resolver problemas complexos e transformar ideias em realidade através do código.
                    </motion.p>
                    <motion.p 
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Quando não estou codificando, gosto de explorar novas tecnologias, ler livros sobre desenvolvimento pessoal e passar tempo com minha família e amigos.
                    </motion.p>
                </section>
            </div>
        </div>
    );
};

export default About;