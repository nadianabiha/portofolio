import { ArrowDown, MapPin, Sparkles, Code2, Wifi, Globe } from 'lucide-react';

const nadiaPhoto = new URL('../../image/nadia.jpeg', import.meta.url).href;

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl" />
        
        {/* Floating shapes */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-sky-300 rounded-full animate-float opacity-60" />
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float-delay opacity-50" />
        <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-cyan-300 rounded-full animate-float opacity-40" />
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-sky-400 rounded-full animate-float-delay opacity-70" />
        <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-float-slow opacity-50" />
        
        {/* Code floating elements */}
        <div className="absolute top-40 left-[15%] text-sky-200 text-4xl font-mono animate-float-slow opacity-30">{"</"}</div>
        <div className="absolute bottom-32 right-[15%] text-blue-200 text-3xl font-mono animate-float opacity-25">{"{}"}</div>
        <div className="absolute top-[70%] left-[10%] text-cyan-200 text-2xl font-mono animate-float-delay opacity-20">{"</>"}</div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100/80 backdrop-blur-sm rounded-full text-sky-600 text-sm font-medium mb-6 border border-sky-200/50">
              <Sparkles size={16} />
              <span>Welcome to my portofolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-4">
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Nadia Nabiha Dziqra
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-sky-600 mb-2 font-semibold">
              Personal Portofolio
            </p>
            
            <p className="text-base text-slate-500 mb-1 font-medium">
              Bachelor Degree Student in Internet Engineering Technology
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-6">
              <MapPin size={16} />
              <span className="text-sm">State Polytechnic of Lampung, Indonesia</span>
            </div>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              An Information Technology student who is passionate about 
              <span className="text-sky-500 font-semibold"> Web Development</span>, 
              <span className="text-blue-500 font-semibold"> Computer Networking</span>, and 
              <span className="text-cyan-500 font-semibold"> IoT</span>. 
              Active in outreach programs, seminars, and building innovative projects!
            </p>

            {/* Mini badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-sky-200 text-xs font-medium text-slate-600">
                <Code2 size={12} className="text-sky-500" /> Web Developer
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-sky-200 text-xs font-medium text-slate-600">
                <Wifi size={12} className="text-blue-500" /> IoT Enthusiast
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full border border-sky-200 text-xs font-medium text-slate-600">
                <Globe size={12} className="text-cyan-500" /> Networking
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#kontak"
                className="group px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#pengalaman"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-sky-600 rounded-2xl font-semibold border-2 border-sky-200 hover:border-sky-300 hover:bg-sky-50 hover:-translate-y-1 transition-all duration-300"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Avatar / Illustration */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-300 p-1 shadow-2xl shadow-sky-200 animate-pulse-glow rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={nadiaPhoto}
                    alt="Photo of Nadia Nabiha Dziqra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-2xl shadow-lg shadow-sky-100 border border-sky-100 animate-float">
                <span className="text-sm font-semibold text-sky-600">Developer</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-2xl shadow-lg shadow-sky-100 border border-sky-100 animate-float-delay">
                <span className="text-sm font-semibold text-blue-600">Networking</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1.5 bg-white rounded-xl shadow-lg shadow-sky-100 border border-sky-100 animate-float-slow hidden sm:block">
                <span className="text-xs font-semibold text-cyan-600">IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#tentang" className="flex flex-col items-center gap-2 text-sky-400 hover:text-sky-600 transition-colors">
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}




