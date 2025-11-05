import { motion } from "motion/react";
import { Database, MessageSquare, Bot, Workflow, ArrowRight, Eye, FileText } from "lucide-react";

export function ArchitectureSection() {
  const architecture = [
    {
      icon: Bot,
      title: "Suporte 24/7",
      description: "Atendimento automático sem intervenção humana",
      color: "emerald",
      delay: 0.1,
    },
    {
      icon: FileText,
      title: "Processamento Inteligente",
      description: "Lê e compreende manuais e documentos técnicos",
      color: "blue",
      delay: 0.2,
    },
    {
      icon: Database,
      title: "Aprendizado Contínuo",
      description: "Aprende com sua base de conhecimento",
      color: "emerald",
      delay: 0.3,
    },
    {
      icon: MessageSquare,
      title: "Análise de Sentimento",
      description: "Detecta humor e escala quando necessário",
      color: "blue",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiLz48cGF0aCBkPSJNMCA0MGg4ME0wIDgwaDgwTTAgMGg4ME0wIDIwaDgwTTAgNjBoODAiIHN0cm9rZT0icmdiYSg1MSwgNjUsIDg1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400">Recursos Avançados</span>
          </div>
          <h2 className="text-white mb-6">Uma IA que Entende o Seu Negócio</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            O Yama AI vai além de um chatbot comum. É um agente inteligente treinado 
            para operar com precisão de especialista e agilidade que só a IA oferece.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 relative">
            {architecture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="relative"
              >
                {/* Connection Line */}
                {index < architecture.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 z-0">
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    >
                      <ArrowRight className="text-emerald-400" size={16} />
                    </motion.div>
                  </div>
                )}

                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 group">
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    item.color === "emerald" 
                      ? "from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent" 
                      : "from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent"
                  } rounded-xl transition-all duration-300`}></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl mb-4 ${
                      item.color === "emerald" 
                        ? "bg-emerald-500/10 border border-emerald-500/20" 
                        : "bg-blue-500/10 border border-blue-500/20"
                    }`}>
                      <item.icon 
                        className={item.color === "emerald" ? "text-emerald-400" : "text-blue-400"} 
                        size={28} 
                      />
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-slate-400 text-sm">{index + 1}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex-shrink-0">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Entende Manuais e PDFs</h4>
                  <p className="text-slate-400 text-sm">
                    Processa documentos técnicos, manuais de produtos e guias visuais. 
                    A IA extrai informações de textos e imagens para fornecer respostas precisas.
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Routing Card */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex-shrink-0">
                  <MessageSquare className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Transferência Inteligente</h4>
                  <p className="text-slate-400 text-sm">
                    Detecta o humor do cliente e transfere para atendimento humano quando 
                    necessário, garantindo a melhor experiência possível.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
