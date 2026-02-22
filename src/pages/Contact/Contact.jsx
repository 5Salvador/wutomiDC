import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Leaf } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <HeroSection />
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-50">
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEyNTcyYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div> */}

      <div className="relative z-10">
        

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tem perguntas sobre nossos produtos agrícolas e soluções nutricionais?
              Nós adoraríamos ouvir de você. Envie-nos uma mensagem e respondemos o mais rápido possível.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Visite-nos</h3>
              <p className="text-gray-600">
                123 Agriculture Boulevard<br />
                Green Valley District<br />
                Farm City, FC 12345
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-secondary hover:shadow-xl transition-shadow duration-300">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ligue para nós</h3>
              <p className="text-gray-600">
                Phone: +1 (555) 123-4567<br />
                Mobile: +1 (555) 987-6543<br />
                Fax: +1 (555) 123-4568
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-tertiary hover:shadow-xl transition-shadow duration-300">
              <div className="bg-tertiary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-tertiary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Horário de Atendimento</h3>
              <p className="text-gray-600">
                Segunda - Sexta: 8:00 AM - 6:00 PM<br />
                Sábado: 9:00 AM - 3:00 PM<br />
                Domingo: Fechado
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-secondary" />
                <h2 className="text-2xl font-bold text-primary">Envie-nos uma Mensagem</h2>
              </div>

              {submitted && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-700 font-semibold">
                    Obrigado por sua mensagem! Vamos entrar em contato com você em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Endereço de Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="products">Inquiry sobre Produtos</option>
                    <option value="nutrition">Consulta Nutricional</option>
                    <option value="partnership">Oportunidade de Parceria</option>
                    <option value="support">Suporte ao Cliente</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-primary mb-6">Por que escolher a WutomiDC?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Produtos Orgânicos 100%</h3>
                      <p className="text-gray-600 text-sm">Vegetais frescos orgânicos cultivados com práticas sustentáveis.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Nutrição Expertise</h3>
                      <p className="text-gray-600 text-sm">Professional guidance on nutrition and healthy eating.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Farm to Table</h3>
                      <p className="text-gray-600 text-sm">Direto de nossas plantações para garantir máxima frescor.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg p-8 lg:p-10 text-white">
                <h2 className="text-2xl font-bold mb-4">Contato Rápido</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@wutomidc.com" className="hover:text-secondary transition-colors">
                      info@wutomidc.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+15551234567" className="hover:text-secondary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Onde a Natureza Gera Vida - Where Nature Generates Life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <footer className="bg-primary text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm opacity-90">
              &copy; {new Date().getFullYear()} WutomiDC. All rights reserved. | Cultivating health, nurturing life.
            </p>
          </div>
        </footer> */}
      </div>
    </div>

    </>
  );
}

export default App;
