import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Bot, Database, Calendar, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/884b398121ce09243792d3846e6c042a0efc5af4.png";
import yamaBanner from "../assets/YamaBaner.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-emerald-400">✨ Yama AI by Yamamotto</span>
            </div>

            {/* Ajuste dos textos conforme imagem */}
            <h2 className="text-slate-300 text-lg font-medium max-w-2xl text-center lg:text-left">
              Atendimento inteligente com IA: otimize operações e nunca mais perca leads
            </h2>

            <p className="text-white text-2xl sm:text-3xl font-semibold max-w-2xl leading-snug text-center lg:text-left">
              Ofereça suporte 24h via WhatsApp com IA que aprende com seus documentos e manuais, e transfere para atendimento humano quando necessário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-100 text-white group px-8 py-4 text-lg font-semibold flex items-center justify-center min-w-[100px]"
                asChild
              >
                <a
                  href="https://wa.me/5511993330919?text=Ol%C3%A1!%20Quero%20automatizar%20meu%20atendimento%20e%20reduzir%20meu%20custo%20com%20o%20Yama%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center"
                >
                  Quero automatizar meu atendimento e reduzir meu custo
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
              <div>
                <div className="text-emerald-400 mb-1 flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Agenda</span>
                </div>
                <div className="text-slate-400 text-sm">Agendamento inteligente</div>
              </div>
              <div>
                <div className="text-blue-400 mb-1">24/7</div>
                <div className="text-slate-400 text-sm">Sempre disponível</div>
              </div>
              <div>
                <div className="text-emerald-400 mb-1 flex items-center gap-2">
                  <Zap size={16} />
                  <span>Auto</span>
                </div>
                <div className="text-slate-400 text-sm">Automações e calendário</div>
              </div>
              <div>
                <div className="text-blue-400 mb-1 flex items-center gap-2">
                  <Database size={16} />
                  <span>Smart</span>
                </div>
                <div className="text-slate-400 text-sm">Base de conhecimento</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 z-10"></div>
                <ImageWithFallback
                  src={yamaBanner}
                  alt="Colaboração entre atendente humano e IA"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
