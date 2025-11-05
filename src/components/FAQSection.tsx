import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "A IA serve para empresas pequenas?",
      answer:
        "Sim! O Yama AI é totalmente escalável e se adapta às necessidades de negócios de todos os tamanhos, desde startups até grandes corporações. Oferecemos planos flexíveis para cada etapa do seu crescimento.",
    },
    {
      question: "Como o Yama AI aprende sobre meu negócio?",
      answer:
        "O YAMA AI não inventa respostas. Ele pesquisa na base de conhecimento fornecida por sua empresa manuais técnicos, regras, processos e páginas oficiais para orientar seus clientes com precisão, consistência e fontes rastreáveis. Assim, você tem total controle sobre as informações que a IA usa.",
    },
    {
      question: "Preciso contratar uma plataforma de mensageria?",
      answer:
        "Não! Nosso sistema opera de forma integrada ao WhatsApp Business, dispensando o uso de plataformas de mensageria. Assim, você continua utilizando seu número normalmente no celular, com autonomia total e sem gastos extras com mensagens.",
    },
    {
      question: "Preciso de uma equipe técnica para usar o Yama AI?",
      answer:
        "Não! O Yama AI foi desenvolvido para ser simples e intuitivo. Nossa equipe cuida de toda a configuração inicial e treinamento da IA com seus dados. Você só precisa fornecer sua base de conhecimento e estaremos prontos para começar.",
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "O tempo de implementação varia de acordo com a complexidade do projeto e das integrações necessárias. A configuração básica é rápida, enquanto integrações personalizadas com calendários e APIs REST podem demandar mais tempo. Nossa equipe trabalha de forma ágil para colocar sua solução no ar o mais breve possível.",
    },
    {
      question: "Meus dados e os dos meus clientes estarão seguros?",
      answer:
        "Entendemos que todo sistema está sujeito a riscos. Por isso, tratamos a segurança das informações como prioridade, adotando medidas rigorosas para prevenir e mitigar qualquer possibilidade de vazamento de dados. Utilizamos criptografia, controles de acesso e armazenamento seguro em servidores no Brasil.",
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
            <span className="text-blue-400">FAQ</span>
          </div>
          <h2 className="text-white mb-6">Perguntas Frequentes</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Respostas para as dúvidas mais comuns sobre o Yama AI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-white pr-8">{faq.question}</h3>
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-emerald-400" size={18} />
                  ) : (
                    <Plus className="text-emerald-400" size={18} />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-400">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8 text-center">
            <h3 className="text-white mb-3">Ainda tem dúvidas?</h3>
            <p className="text-slate-400 mb-6">
              Nossa equipe está pronta para ajudar você a entender como o Yama AI pode transformar seu atendimento.
            </p>
            <a 
              href="https://wa.me/5511993330919?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20o%20Yama.IA%20%E2%80%93%20Agente%20de%20Intelig%C3%AAncia%20Artificial."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
            >
              Falar com um Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
