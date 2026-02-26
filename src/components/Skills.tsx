const technicalSkills = [
  { name: 'HTML', level: 85, icon: '🌐', category: 'Web' },
  { name: 'CSS', level: 80, icon: '🎨', category: 'Web' },
  { name: 'JavaScript', level: 75, icon: '⚡', category: 'Web' },
  { name: 'React.js', level: 70, icon: '⚛️', category: 'Framework' },
  { name: 'Next.js', level: 65, icon: '▲', category: 'Framework' },
  { name: 'Python', level: 75, icon: '🐍', category: 'Programming' },
  { name: 'Arduino', level: 72, icon: 'AR', category: 'IoT' },
  { name: 'Docker', level: 68, icon: 'DK', category: 'DevOps' },
  { name: 'WordPress', level: 70, icon: 'WP', category: 'CMS' },
  { name: 'Linux', level: 73, icon: 'LX', category: 'OS' },
  { name: 'Data Analysis', level: 70, icon: 'DA', category: 'Data' },
  { name: 'Database', level: 72, icon: 'DB', category: 'Database' },
];

const networkingSkills = [
  { name: 'Computer Networking', icon: '🖧', desc: 'Network configuration and troubleshooting' },
  { name: 'Network Programming', icon: '🔗', desc: 'Network programming & protocols' },
  { name: 'IoT (Internet of Things)', icon: '🔌', desc: 'Sensor, microcontroller, & monitoring' },
];

const otherSkills = [
  { name: 'Game Dev (Python)', emoji: '🎮', desc: 'Building games with Python' },
  { name: 'Mandarin', emoji: '🇨🇳', desc: 'Currently learning Mandarin' },
  { name: 'English', emoji: '🇬🇧', desc: 'Currently learning English' },
  { name: 'React & Next.js', emoji: '⚛️', desc: 'Building modern websites' },
];

const softSkills = [
  { name: 'Problem Solving', emoji: '🧩' },
  { name: 'Team Work', emoji: '🤝' },
  { name: 'Communication', emoji: '💬' },
  { name: 'Fast Learner', emoji: '📚' },
  { name: 'Creative Thinking', emoji: '💡' },
  { name: 'Adaptable', emoji: '🔄' },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-white via-sky-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Skills & Capabilities 💪
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Programming & Web Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-700 mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">💻</span> Programming & Web Development
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-400"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <span className="font-semibold text-slate-700">{skill.name}</span>
                      <span className="block text-xs text-sky-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-sky-500">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-sky-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-sky-200"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Networking & IoT Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-700 mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🌐</span> Networking & IoT
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {networkingSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-400 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-slate-700 mb-2">{skill.name}</h4>
                <p className="text-sm text-slate-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Abilities */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-700 mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">✨</span> Other Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-400"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.emoji}
                </div>
                <h4 className="font-bold text-slate-700 text-sm mb-1 group-hover:text-sky-600 transition-colors">{skill.name}</h4>
                <p className="text-xs text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-bold text-slate-700 mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl">🌟</span> Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-sky-50 hover:to-blue-50 transition-all duration-400 text-center cursor-default"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.emoji}
                </div>
                <div className="text-sm font-semibold text-slate-600 group-hover:text-sky-600 transition-colors">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


