import { motion } from "motion/react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Produto: ["Recursos", "Integrações", "Preços", "Demonstração"],
    Empresa: ["Sobre Nós", "Yamamotto", "Depoimentos", "Contato"],
    Suporte: ["FAQ", "Documentação", "Suporte", "WhatsApp"],
    Legal: ["Privacidade", "Termos de Uso", "LGPD", "Segurança"],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white">🤖</span>
                </div>
                <span className="text-white">Yama AI</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 max-w-xs">
                Atendimento inteligente via WhatsApp com IA que reduz custos, 
                nunca perde leads e oferece suporte 24/7 para seu negócio.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone size={16} className="text-emerald-400" />
                  <span>+55 (11) 99333-0919</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail size={16} className="text-emerald-400" />
                  <span>atendimento@yamamotto.com.br</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Address & Hours Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-slate-900"
        >
          {/* Address */}
          <div>
            <h4 className="text-white mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-emerald-400" />
              Endereço
            </h4>
            <div className="text-slate-400 text-sm space-y-1">
              <p>Rochaverá Corporate Tower - Torre B (Marble Tower)</p>
              <p>Av. das Nações Unidas, 14.171 - 15º andar</p>
              <p>CEP: 04794-000</p>
              <p>São Paulo - Brasil</p>
              <p className="text-slate-500 text-xs mt-3 italic">
                Atendimento presencial necessita prévio agendamento.
              </p>
              <a 
                href="https://g.page/Yamamotto?share" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
              >
                <MapPin size={14} />
                Veja no Mapa
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white mb-4 flex items-center gap-2">
              <Clock size={18} className="text-blue-400" />
              Horário de Atendimento
            </h4>
            <div className="text-slate-400 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Seg. a Sex.</span>
                <span className="text-emerald-400">08h às 17:30h</span>
              </div>
              <div className="flex justify-between">
                <span>Sáb. e Dom.</span>
                <span className="text-slate-500">Fechado</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-slate-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              © 2025 Yamamotto. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/YEServicesBR/" },
                { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/yamamotto_fechaduras_digitais/" },
                { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/channel/UCnwxNfzQQxVv6z6TfmqyPXg" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-emerald-500/30 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={18}
                    className="text-slate-400 group-hover:text-emerald-400 transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-slate-400 text-xs">
                🔒 LGPD Compliant
              </div>
              <div className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-slate-400 text-xs">
                ✓ ISO 27001
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
