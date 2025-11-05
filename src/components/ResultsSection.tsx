import { motion } from "motion/react";
import { TrendingUp, Users, Zap, BarChart3, CheckCircle2 } from "lucide-react";

export function ResultsSection() {
  const results = [
    {
      icon: Zap,
      value: "até 80%",
      label: "Automação de tickets",
      color: "emerald",
      description: "Resolução automática de solicitações comuns*",
      delay: 0.1,
    },
    {
      icon: Users,
      value: "67%",
      label: "Clientes preferem IA",
      color: "blue",
      description: "Para questões simples e diretas*",
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      value: "↗",
      label: "Eficiência operacional",
      color: "emerald",
      description: "Otimização de recursos*",
      delay: 0.3,
    },
    {
      icon: BarChart3,
      value: "24/7",
      label: "Disponibilidade",
      color: "blue",
      description: "Atendimento ininterrupto",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSJyZ2JhKDE2LCAxODUsIDEyOSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400">Impacto Real</span>
          </div>
          <h2 className="text-white mb-6">O Que Esperar de Chatbots com IA</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Dados baseados em estudos de implementação de IA generativa em atendimento ao cliente
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: result.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div
                className={`absolute inset-0 ${
                  result.color === "emerald"
                    ? "bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/20 group-hover:to-transparent"
                    : "bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:to-transparent"
                } rounded-2xl blur-xl transition-all duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl mb-6 ${
                    result.color === "emerald"
                      ? "bg-emerald-500/10 border border-emerald-500/20"
                      : "bg-blue-500/10 border border-blue-500/20"
                  }`}
                >
                  <result.icon
                    className={result.color === "emerald" ? "text-emerald-400" : "text-blue-400"}
                    size={32}
                  />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: result.delay + 0.3 }}
                  className={`mb-3 ${
                    result.color === "emerald" ? "text-emerald-400" : "text-blue-400"
                  }`}
                >
                  {result.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-white mb-3">{result.label}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm">{result.description}</p>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                    result.color === "emerald" ? "bg-emerald-500" : "bg-blue-500"
                  } opacity-50 group-hover:opacity-100 transition-opacity`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg mb-4">
                  <Zap className="text-emerald-400" size={24} />
                </div>
                <h4 className="text-white mb-2">Implementação Ágil</h4>
                <p className="text-slate-400 text-sm">Deploy simplificado e eficiente</p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg mb-4">
                  <Users className="text-blue-400" size={24} />
                </div>
                <h4 className="text-white mb-2">Suporte Dedicado</h4>
                <p className="text-slate-400 text-sm">Time técnico especializado</p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg mb-4">
                  <TrendingUp className="text-emerald-400" size={24} />
                </div>
                <h4 className="text-white mb-2">Escalabilidade</h4>
                <p className="text-slate-400 text-sm">Cresce com seu negócio</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  <span className="text-slate-300">*Fontes:</span> Dados baseados em estudos da indústria sobre implementação de chatbots com IA generativa (Gartner, IBM, McKinsey, Tidio). Pesquisa Tidio 2023 indica que 67% dos consumidores preferem chatbots para questões simples. Estudos demonstram potencial significativo de automação e otimização operacional com IA em atendimento ao cliente.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
