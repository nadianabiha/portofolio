import { Award, Calendar, GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor Degree in Internet Engineering Technology',
    school: 'State Polytechnic of Lampung',
    department: 'Information Technology Department',
    period: '2023 - Present',
    description: 'Currently pursuing a bachelor degree in Internet Engineering Technology with a focus on web development, computer networking, network programming, and Internet of Things (IoT). Active in outreach activities and seminars.',
    status: 'ongoing',
    courses: ['Computer Networking', 'Web Programming', 'IoT', 'Python', 'JavaScript', 'Professional Ethics'],
  },
];

const achievements = [
  { title: 'High School Outreach for Network Programming', year: 'Completed', icon: '🏫', desc: 'Introducing network programming to high school students' },
    { title: 'Memorized 5 Juz of the Quran', year: 'Completed', icon: 'H5', desc: 'Memorized 5 Juz of the Quran' },
  { title: 'Odoo Business Development', year: 'Completed', icon: '💼', desc: 'Participated in an event at Hotel Radisson Bandar Lampung' },
  { title: 'Seminar State of Women Global', year: 'Completed', icon: '👩‍💼', desc: 'A global seminar about women in technology' },
  { title: 'IoT Project - Mushroom Humidity Monitoring', year: 'Completed', icon: '🍄', desc: 'Built a humidity monitoring system for mushroom cultivation' },
  { title: 'Major Project: Computer Networking II', year: 'Completed', icon: '🖧', desc: 'Completed a major network infrastructure project' },
  { title: 'Web Development - React & Next.js', year: 'Ongoing', icon: '⚛️', desc: 'Able to build modern websites using React and Next.js' },
  { title: 'Multilingual - Mandarin & English', year: 'Ongoing', icon: '🌍', desc: 'Actively learning Mandarin and English' },
];

export function Education() {
  return (
    <section id="pendidikan" className="relative py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Education & Pencapaian 🎓
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-bold text-slate-700 mb-8 flex items-center gap-3">
              <GraduationCap size={24} className="text-sky-500" />
              Riwayat Education
            </h3>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 to-blue-400" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-16 group">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-2 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 ${
                    edu.status === 'ongoing' 
                      ? 'bg-gradient-to-br from-sky-400 to-blue-500 animate-pulse' 
                      : 'bg-sky-300'
                  }`} />

                  <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-slate-800 text-lg">{edu.degree}</h4>
                      {edu.status === 'ongoing' && (
                        <span className="px-3 py-1 bg-sky-400 text-white rounded-full text-xs font-semibold">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sky-600 font-semibold mb-0.5">{edu.school}</p>
                    <p className="text-sky-500 text-sm mb-1">{edu.department}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{edu.description}</p>
                    
                    {/* Courses */}
                    <div>
                      <p className="text-xs font-semibold text-slate-600 mb-2">Relevant Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white rounded-lg text-sky-600 text-xs font-medium border border-sky-100"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Info Card */}
            <div className="mt-8 bg-white rounded-2xl p-6 border border-sky-100 shadow-lg shadow-sky-50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-3xl">
                  🏫
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">State Polytechnic of Lampung</h4>
                  <p className="text-sky-600 text-sm font-medium">Information Technology Department</p>
                  <p className="text-slate-400 text-xs">Prodi Bachelor Degree in Internet Engineering Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-slate-700 mb-8 flex items-center gap-3">
              <Award size={24} className="text-sky-500" />
              Achievements & Activities
            </h3>
            <div className="space-y-3">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white rounded-2xl p-4 border border-sky-100 shadow-md shadow-sky-50 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm group-hover:text-sky-600 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      item.year === 'Completed' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-sky-50 text-sky-500'
                    }`}>
                      {item.year === 'Completed' ? '? Completed' : '🔄 Ongoing'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Motivational Card */}
            <div className="mt-6 bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-6 text-white shadow-xl shadow-sky-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌟</span>
                  <h4 className="font-bold text-lg">Always Growing!</h4>
                </div>
                <p className="text-sky-100 text-sm leading-relaxed">
                  Active in outreach, seminars, and real projects. Every experience 
                  is a step toward a better future in technology! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







