import { motion } from "motion/react";
import { Shield, Key, FileText, Lock, CheckCircle2 } from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Key,
      title: "Autenticação Individual",
      description: "Tokens únicos por funcionário com controle granular de permissões",
    },
    {
      icon: FileText,
      title: "Logs de Sessão",
      description: "Registro completo de acessos e ações para auditoria",
    },
    {
      icon: Lock,
      title: "Criptografia Avançada",
      description: "Proteção de dados sensíveis em trânsito e em repouso",
    },
  ];

  const complianceItems = [
    "LGPD Compliant",
    "ISO 27001",
    "SOC 2 Type II",
    "GDPR Ready",
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-emerald-400">Proteção Enterprise</span>
          </div>
          <h2 className="text-white mb-6">Segurança e Controle</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Cada ação é rastreável e protegida, garantindo conformidade e segurança empresarial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Visual Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central Shield */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-blue-500/20 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-emerald-500/20 rounded-full"></div>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
                    <Shield className="text-emerald-400" size={80} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                </motion.div>
              </div>

              {/* Floating Icons */}
              {[
                { icon: Key, position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
                { icon: Lock, position: "top-1/2 right-0 -translate-y-1/2", delay: 0.5 },
                { icon: FileText, position: "bottom-0 left-1/2 -translate-x-1/2", delay: 1 },
                { icon: Shield, position: "top-1/2 left-0 -translate-y-1/2", delay: 1.5 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                  className={`absolute ${item.position}`}
                >
                  <div className="w-16 h-16 bg-slate-900 border-2 border-emerald-500/30 rounded-xl flex items-center justify-center">
                    <item.icon className="text-emerald-400" size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Security Features */}
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex-shrink-0 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                    <feature.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compliance Badges */}
            <div className="pt-8 border-t border-slate-800">
              <h4 className="text-white mb-4">Nosso Compromisso com Segurança</h4>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Desenvolvemos o Yama AI seguindo as melhores práticas de segurança da informação. 
                  Seus dados e os de seus clientes são tratados com o máximo cuidado, utilizando 
                  criptografia, controles de acesso e armazenamento seguro em servidores no Brasil.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6"
            >
              <div className="flex items-start gap-3">
                <Shield className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white mb-2">Segurança Enterprise</h4>
                  <p className="text-slate-400 text-sm">
                    Proteção de nível corporativo com auditoria completa e controle de acesso granular. 
                    Todos os dados são criptografados e monitorados 24/7.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
