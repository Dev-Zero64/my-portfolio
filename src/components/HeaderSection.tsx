import { motion } from "framer-motion";

export const HeaderSection = () => {
  return (
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
          Olá, me chamo{" "}
          <span className="font-semibold text-blue-600">
            Rafael Raniere de Oliveira
          </span>
          , sou um desenvolvedor Full Stack apaixonado por transformar ideias em
          realidade digital.
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
  );
};
