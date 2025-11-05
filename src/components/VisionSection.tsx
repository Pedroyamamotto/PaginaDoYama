import { motion } from "motion/react";
import { Eye, FileText, Image, CheckCircle, Sparkles } from "lucide-react";

export function VisionSection() {
  const capabilities = [
    {
      icon: FileText,
      title: "PDFs e Documentos",
      description: "Extrai e compreende informações de manuais técnicos e guias",
    },
    {
      icon: Image,
      title: "Imagens e Diagramas",
      description: "Analisa gráficos, tabelas e esquemas visuais",
    },
    {
      icon: Sparkles,
      title: "Contexto Inteligente",
      description: "Combina texto e imagem para respostas precisas",
    },
  ];

  const examples = [
    "Manuais de produtos e equipamentos",
    "Guias de troubleshooting com imagens",
    "Catálogos técnicos e especificações",
    "Procedimentos e fluxogramas",
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400">✨ Visão Computacional</span>
            </div>

            <h2 className="text-white mb-6">
              IA que Entende Manuais e Documentos Visuais
            </h2>

            <p className="text-slate-300 text-xl mb-8">
              O Yama AI usa tecnologia de visão computacional para processar e compreender 
              documentos complexos, incluindo manuais técnicos, guias ilustrados e PDFs.
            </p>

            {/* Capabilities */}
            <div className="space-y-4 mb-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-blue-500/30 transition-all"
                >
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg flex-shrink-0">
                    <capability.icon className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">{capability.title}</h4>
                    <p className="text-slate-400 text-sm">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 text-emerald-400"
            >
              <Eye size={20} />
              <span>Seu conhecimento se torna inteligência artificial</span>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card - Document Processing Visualization */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl">
                  <Eye className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-white">Processamento de Documento</div>
                  <div className="text-slate-400 text-sm">RAG + Visão Computacional</div>
                </div>
              </div>

              {/* Document Preview Mock */}
              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-blue-400" size={18} />
                    <span className="text-slate-300 text-sm">manual_produto.pdf</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-700 rounded w-4/6"></div>
                  </div>
                </div>

                {/* Image Preview Mock */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Image className="text-emerald-400" size={18} />
                    <span className="text-slate-300 text-sm">diagrama_tecnico.jpg</span>
                  </div>
                  <div className="aspect-video bg-slate-700/50 rounded flex items-center justify-center">
                    <Eye className="text-slate-600" size={32} />
                  </div>
                </div>
              </div>

              {/* Processing Status */}
              <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 text-sm">Status de Treinamento</span>
                  <CheckCircle className="text-emerald-400" size={18} />
                </div>
                <div className="text-emerald-400 text-sm">✓ Base de conhecimento atualizada</div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Examples List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
            >
              <h4 className="text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-blue-400" size={18} />
                Exemplos de Uso
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {examples.map((example, index) => (
                  <motion.div
                    key={example}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-slate-400 text-sm"
                  >
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={16} />
                    <span>{example}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
