import { motion } from "framer-motion";
import { Code, Rocket, Palette, BrainCircuit } from "lucide-react";

export const Expertise = () => {
  return (
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
  );
};
