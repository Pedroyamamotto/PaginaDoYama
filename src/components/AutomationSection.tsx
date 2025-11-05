import { motion } from "motion/react";
import { Calendar, Check, Clock, Send } from "lucide-react";

export function AutomationSection() {
  const timeline = [
    {
      icon: Send,
      title: "Recebimento do Pedido",
      description: "Cliente envia solicitação via WhatsApp",
      status: "complete",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Verificação de Disponibilidade",
      description: "IA verifica agenda em tempo real",
      status: "complete",
      delay: 0.2,
    },
    {
      icon: Calendar,
      title: "Criação Automática",
      description: "Evento criado no Google Calendar",
      status: "complete",
      delay: 0.3,
    },
    {
      icon: Check,
      title: "Confirmação ao Cliente",
      description: "Notificação enviada automaticamente",
      status: "complete",
      delay: 0.4,
    },
  ];

  const integrations = [
    { name: "Google Calendar", logo: "📅" },
    { name: "Outlook", logo: "📧" },
    { name: "Apple Calendar", logo: "🍎" },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9InJnYigxNiwgMTg1LCAxMjkpIi8+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-400">Agendamento Inteligente</span>
          </div>
          <h2 className="text-white mb-6">Automação e Calendário</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Agendamentos e atualizações de calendário gerenciados automaticamente pela IA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {timeline.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[30px] top-[60px] w-0.5 h-12 bg-gradient-to-b from-emerald-500/50 to-blue-500/50"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-[60px] h-[60px] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-2 border-emerald-500/40 rounded-full flex items-center justify-center relative z-10">
                        <step.icon className="text-emerald-400" size={24} />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: step.delay }}
                        className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md"
                      ></motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-emerald-500/30 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white">{step.title}</h3>
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center">
                          <Check className="text-emerald-400" size={14} />
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Calendar Preview & Integrations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Calendar Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white mb-1">Novembro 2025</h3>
                  <p className="text-slate-400 text-sm">Gerenciamento Automatizado</p>
                </div>
                <Calendar className="text-blue-400" size={32} />
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                  <div key={`${day}-${index}`} className="text-center text-slate-500 text-sm py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                  <motion.div
                    key={day}
                    whileHover={{ scale: 1.1 }}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer
                      ${
                        day === 5
                          ? "bg-emerald-500 text-white"
                          : day === 12 || day === 18 || day === 25
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "text-slate-400 hover:bg-slate-700"
                      }
                    `}
                  >
                    {day}
                  </motion.div>
                ))}
              </div>

              {/* Event Indicator */}
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="text-white text-sm">Reunião Agendada</div>
                    <div className="text-slate-400 text-xs">05/11/2025 às 14:00</div>
                  </div>
                  <Check className="text-emerald-400" size={20} />
                </div>
              </div>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="text-white mb-4">Integrações Disponíveis</h4>
              <div className="grid grid-cols-3 gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all cursor-pointer"
                  >
                    <div className="text-3xl mb-2">{integration.logo}</div>
                    <div className="text-slate-300 text-sm">{integration.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
