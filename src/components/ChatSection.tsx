import { motion } from "motion/react";
import { Brain, Database as DatabaseIcon, MessageCircle, Sparkles } from "lucide-react";

export function ChatSection() {
  const features = [
    {
      icon: DatabaseIcon,
      title: "Treinamento com Seus Dados",
      description: "O Yama aprende com sua base de conhecimento (RAG)",
    },
    {
      icon: Brain,
      title: "Análise de Sentimento",
      description: "Detecta o humor do cliente e escala quando necessário",
    },
    {
      icon: Sparkles,
      title: "Sempre Disponível",
      description: "Atendimento 24/7 sem pausas",
    },
  ];

  const chatMessages = [
    {
      type: "user",
      text: "Olá! Gostaria de saber mais sobre seus produtos",
      delay: 0.2,
    },
    {
      type: "ai",
      text: "Olá! Sou o Yama. Posso responder perguntas sobre nossos produtos, agendar uma demonstração ou falar com um especialista. O que você gostaria de fazer?",
      delay: 0.4,
    },
    {
      type: "user",
      text: "Quais são as formas de pagamento?",
      delay: 0.6,
    },
    {
      type: "ai",
      text: "Aceitamos cartão de crédito (até 12x), boleto bancário e PIX. Para compras acima de R$ 5.000, também oferecemos condições especiais. Gostaria de iniciar uma compra?",
      delay: 0.8,
    },
    {
      type: "user",
      text: "Sim, gostaria de falar com um vendedor",
      delay: 1.0,
    },
    {
      type: "ai",
      text: "Perfeito! Estou transferindo você para um especialista. Aguarde um momento... 👨‍💼",
      delay: 1.2,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Chat Simulation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Chat Window */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Chat Header */}
                <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div>
                    <div className="text-white">Yama AI</div>
                    <div className="text-slate-400 text-sm">Online • Suporte 24/7</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 min-h-[400px]">
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: message.delay }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.type === "user"
                            ? "bg-blue-500/20 border border-blue-500/30 text-blue-100"
                            : "bg-slate-800 border border-slate-700 text-slate-200"
                        }`}
                      >
                        {message.type === "ai" && (
                          <div className="flex items-center gap-2 mb-1">
                            <MessageCircle size={14} className="text-emerald-400" />
                            <span className="text-emerald-400 text-xs">IA</span>
                          </div>
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="border-t border-slate-800 px-6 py-4">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 flex items-center gap-3">
                    <span className="text-slate-500 text-sm flex-1">Digite sua mensagem...</span>
                    <Sparkles className="text-emerald-400" size={20} />
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <span className="text-emerald-400">Veja o Yama em Ação</span>
              </div>
              <h2 className="text-white mb-6">Atendimento com Memória e Contexto</h2>
              <p className="text-slate-400 text-lg">
                O Yama AI aprende com sua base de conhecimento para dar respostas precisas 
                sobre seus produtos e serviços, mantendo contexto em cada conversa.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex-shrink-0 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg h-fit">
                    <feature.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-800">
              <div className="text-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-emerald-400 mb-1">100%</div>
                <div className="text-slate-400 text-sm">Contexto Preservado</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="text-blue-400 mb-1">&lt; 2s</div>
                <div className="text-slate-400 text-sm">Tempo de Resposta</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
