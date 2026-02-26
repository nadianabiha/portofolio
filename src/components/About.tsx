import { BookOpen, Heart, Code2, Globe, Cpu, Languages } from 'lucide-react';

const funFacts = [
  { icon: <Code2 size={24} />, label: 'Programming Languages', value: '5+' },
  { icon: <Globe size={24} />, label: 'Languages', value: '3' },
  { icon: <Cpu size={24} />, label: 'Completed Projects', value: '6+' },
  { icon: <Heart size={24} />, label: 'Passion', value: '∞' },
];

const interests = [
  { emoji: '🌐', label: 'Web Development' },
  { emoji: '🔌', label: 'IoT' },
  { emoji: '🖧', label: 'Computer Networking' },
  { emoji: '🎮', label: 'Game Development' },
  { emoji: '🇨🇳', label: 'Mandarin' },
  { emoji: '🇬🇧', label: 'English' },
];

export function About() {
  return (
    <section id="tentang" className="relative py-24 bg-white">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z" fill="#f0f9ff"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Nice to Meet You! 😊
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100">
              <p className="text-slate-600 leading-relaxed text-lg mb-4">
                Hi! I am <span className="font-semibold text-sky-600">Nadia Nabiha Dziqra</span>, 
                a student <span className="font-semibold text-blue-600">S1</span> at <span className="font-semibold text-blue-600">State Polytechnic of Lampung</span>, majoring in 
                <span className="font-semibold text-blue-600"> Information Technology</span>, study program 
                <span className="font-semibold text-cyan-600"> Internet Engineering Technology (Bachelor Degree)</span>.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                I have a strong interest in web development, computer networking, and Internet of Things (IoT). 
                I build websites using <span className="font-semibold text-sky-500">React</span> and 
                <span className="font-semibold text-sky-500"> Next.js</span>, and actively participate in outreach activities 
                and seminars both on and off campus.
              </p>
              <p className="text-slate-600 leading-relaxed">
                In addition, I actively learn foreign languages such as 
                <span className="font-semibold text-red-400"> Mandarin 🇨🇳</span> and 
                <span className="font-semibold text-blue-400"> English 🇬🇧</span>, 
                and I can also build games using Python 🎮.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-lg shadow-sky-50">
              <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-sky-500" />
                <span>Interests</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-2.5 bg-sky-50 rounded-xl border border-sky-100 hover:bg-sky-100 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-3xl p-6 border border-sky-100 shadow-lg shadow-sky-50">
              <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <Languages size={18} className="text-sky-500" />
                <span>Languages I Learn</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Indonesian', flag: '🇮🇩', level: 'Native' },
                  { name: 'English', flag: '🇬🇧', level: 'Learning' },
                  { name: 'Mandarin', flag: '🇨🇳', level: 'Learning' },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{lang.name}</p>
                      <p className="text-xs text-sky-500">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-6 border border-sky-100 shadow-lg shadow-sky-50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-sky-500 group-hover:from-sky-400 group-hover:to-blue-500 group-hover:text-white transition-all duration-500">
                    {fact.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-1">
                    {fact.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{fact.label}</div>
                </div>
              ))}
            </div>

            {/* Biodata Card */}
            <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 rounded-3xl p-6 text-white shadow-xl shadow-sky-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6" />
              <div className="relative">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  📋 Biodata Singkat
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-sky-200 font-medium min-w-[80px]">Name</span>
                    <span className="font-semibold">Nadia Nabiha Dziqra</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-200 font-medium min-w-[80px]">Campus</span>
                    <span className="font-semibold">State Polytechnic of Lampung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-200 font-medium min-w-[80px]">Major</span>
                    <span className="font-semibold">Information Technology</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-200 font-medium min-w-[80px]">Program</span>
                    <span className="font-semibold">Internet Engineering Technology (Bachelor Degree)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sky-200 font-medium min-w-[80px]">Phone</span>
                    <span className="font-semibold">085369786328</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





