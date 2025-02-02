import { Link } from "react-router-dom";

export const NextChallenge = () => {
  return (
    <div className="p-6 bg-blue-600 text-white rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Próximos Desafios</h3>
      <p className="leading-relaxed">
        Busco colaborar em projetos inovadores que impactem positivamente a vida
        das pessoas, preferencialmente utilizando tecnologias modernas e boas
        práticas de desenvolvimento.
      </p>
      <Link
        to="/projects"
        className="inline-block mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
      >
        Ver Projetos
      </Link>
    </div>
  );
};
