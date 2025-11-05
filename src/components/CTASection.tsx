import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  const techLogos = [
    { name: "WhatsApp", emoji: "💬" },
    { name: "API REST", emoji: "🔌" },
    { name: "Google Calendar", emoji: "📅" },
    { name: "Supabase", emoji: "⚡" },
    { name: "Yamamotto", emoji: "🤖" },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border-2 border-emerald-500/20 rounded-3xl p-12 md:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
              >
                <Sparkles className="text-emerald-400" size={18} />
                <span className="text-emerald-400">Transforme Sua Operação Agora</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white max-w-3xl mx-auto"
              >
                Pronto para transformar seu atendimento?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-300 text-xl max-w-2xl mx-auto"
              >
                Receba uma demonstração e veja como o Yama AI pode revolucionar seu negócio. 
                Automatize atendimento, reduza custos, nunca mais perca leads e ofereça suporte 24h.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white group px-8"
                    asChild
                  >
                    <a href="mailto:atendimento@yamamotto.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Demonstra%C3%A7%C3%A3o%20Yama%20AI">
                      Receber Demonstração
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5511993330919?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20o%20Yama.IA%20%E2%80%93%20Agente%20de%20Intelig%C3%AAncia%20Artificial." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Falar com Especialista no WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8 flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Sem compromisso • Demonstração personalizada • Consultoria gratuita</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">Powered by</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex flex-col items-center gap-2 p-4 bg-slate-800/30 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                <span className="text-3xl">{tech.emoji}</span>
                <span className="text-slate-400 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </section>
  );
}
