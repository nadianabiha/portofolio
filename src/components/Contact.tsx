import { useState } from 'react';
import { Mail, MapPin, Send, Instagram, Github, Linkedin, Youtube, Heart, GraduationCap } from 'lucide-react';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'nadianabihadziqra8@gmail.com', color: 'from-cyan-400 to-sky-500' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Lampung, Indonesia', color: 'from-blue-400 to-indigo-500' },
  { icon: <GraduationCap size={20} />, label: 'Campus', value: 'State Polytechnic of Lampung', color: 'from-sky-400 to-cyan-500' },
];

const socials = [
  { icon: <Instagram size={20} />, label: 'Instagram', username: '@cevelierz', href: 'https://www.instagram.com/cevelierz/', color: 'hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200' },
  { icon: <Github size={20} />, label: 'GitHub', username: 'nadianabiha', href: 'https://github.com/nadianabiha', color: 'hover:bg-slate-100 hover:text-slate-700 hover:border-slate-300' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', username: 'Nadia Nabiha Dziqra', href: 'https://www.linkedin.com/in/nadia-nabiha-3069b7312/', color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200' },
  { icon: <Youtube size={20} />, label: 'YouTube', username: '@NadiaNabiha-k4e', href: 'https://www.youtube.com/@NadiaNabiha-k4e', color: 'hover:bg-red-50 hover:text-red-600 hover:border-red-200' },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="kontak" className="relative py-24 bg-gradient-to-b from-white via-sky-50 to-sky-100">
      {/* Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Contact Me 📬
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Interested in collaboration or have a question? Feel free to contact me!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg shadow-sky-200 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">{info.label}</p>
                    <p className="text-slate-700 font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sky-100 shadow-md shadow-sky-50">
              <h3 className="font-bold text-slate-700 mb-4">🔗 Media Sosial</h3>
              <div className="space-y-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-3 rounded-xl border border-sky-100 text-slate-500 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <div>
                      <p className="font-semibold text-sm">{social.label}</p>
                      <p className="text-xs">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-sky-100 shadow-xl shadow-sky-50">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Send size={20} className="text-sky-500" />
              Send Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h4 className="text-xl font-bold text-sky-600 mb-2">Message Sent!</h4>
                <p className="text-slate-500">Thank you! I will reply to your message soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="w-full px-5 py-3.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-3.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Message subject"
                    required
                    className="w-full px-5 py-3.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-5 py-3.5 bg-sky-50/50 border border-sky-200 rounded-2xl text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="text-left">
              <span className="text-lg font-bold block leading-tight">Nadia Nabiha Dziqra</span>
              <span className="text-xs text-slate-400">S1 Teknologi Rekayasa Internet • Polinela</span>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            An Information Technology bachelor degree student at State Polytechnic of Lampung who is passionate 
            about web development, computer networking, and IoT.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
            {[
              { label: 'Home', href: '#beranda' },
              { label: 'About', href: '#tentang' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#proyek' },
              { label: 'Experience', href: '#pengalaman' },
              { label: 'Contact', href: '#kontak' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[
              { Icon: Instagram, href: 'https://www.instagram.com/cevelierz/', label: 'Instagram' },
              { Icon: Github, href: 'https://github.com/nadianabiha', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/nadia-nabiha-3069b7312/', label: 'LinkedIn' },
              { Icon: Youtube, href: 'https://www.youtube.com/@NadiaNabiha-k4e', label: 'YouTube' },
              { Icon: Mail, href: 'mailto:nadianabihadziqra8@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-6" />

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1 flex-wrap">
            © 2025 Nadia Nabiha Dziqra. Made with <Heart size={14} className="text-red-400 fill-red-400" /> using React & Tailwind CSS
          </p>
          <p className="text-slate-600 text-xs mt-1">
            State Polytechnic of Lampung • Information Technology • Bachelor Degree in Internet Engineering Technology
          </p>
        </div>
      </div>
    </footer>
  );
}





