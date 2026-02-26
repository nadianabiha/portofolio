import { useState, type KeyboardEvent } from 'react';
import { Calendar, MapPin, Users, ExternalLink, Camera, Award, Briefcase } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

interface ExperienceItem {
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  icon: string;
  filled: boolean;
  image?: string;
  highlights?: string[];
  color: string;
}

const experienceImageMap = {
  sosialisasiSma: new URL('../../image/sosialisasi SMA 13.jpeg', import.meta.url).href,
  sosialisasiMan1: new URL('../../image/sosialisasi MAN1.jpeg', import.meta.url).href,
  odooBusiness: new URL('../../image/oddo businis.jpeg', import.meta.url).href,
  stateOfWomen: new URL('../../image/state of a women.jpeg', import.meta.url).href,
  kegiatanK3: new URL('../../image/kegitan pada K3.jpeg', import.meta.url).href,
  kelasMandarin: new URL('../../image/kelas mandarain.jpeg', import.meta.url).href,
  iotSuhuKelembapan: new URL('../../image/iot suhu & kelembapan.jpeg', import.meta.url).href,
  iotJamur: new URL('../../image/IOT kelembapan pada jamaur.jpeg', import.meta.url).href,
  jaringanKomputer: new URL('../../image/jaringan komputer.jpeg', import.meta.url).href,
};

const experiences: ExperienceItem[] = [
  {
    title: 'Outreach: Introduction to Network Programming',
    type: 'Outreach',
    date: 'Academic Semester',
    location: 'SMA',
    description: 'Conducted an outreach activity at a high school to introduce network programming. Delivered materials on computer networking basics, HTML, CSS, and network programming concepts.',
    icon: '🏫',
    filled: true,
    image: experienceImageMap.sosialisasiSma,
    highlights: ['Network Programming', 'HTML & CSS', 'High School Student Education'],
    color: 'from-sky-400 to-blue-500',
  },
  {
    title: 'Outreach: Introduction to Professional Ethics',
    type: 'Outreach',
    date: 'Academic Semester',
    location: 'MAN 1',
    description: 'Conducted an outreach session at MAN 1 to introduce professional ethics in information technology, including digital ethics, professionalism, cyber ethics, and IT responsibility in the digital era.',
    icon: '📚',
    filled: true,
    image: experienceImageMap.sosialisasiMan1,
    highlights: ['Professional Ethics', 'Cyber Ethics', 'MAN 1 Student Education'],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Odoo Business Development',
    type: 'Workshop / Training',
    date: 'Academic Semester',
    location: 'Hotel Radisson, Bandar Lampung',
    description: 'Participated in an Odoo Business Development event at Hotel Radisson Bandar Lampung and learned ERP, CRM, and digital business management modules.',
    icon: '💼',
    filled: true,
    image: experienceImageMap.odooBusiness,
    highlights: ['Odoo ERP', 'Business Development', 'Hotel Radisson'],
    color: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Seminar State of Women Global',
    type: 'Seminar',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung Campus',
    description: 'Attended the State of Women Global seminar at State Polytechnic of Lampung discussing women in technology, leadership, gender equality, and empowerment in the digital era.',
    icon: '👩‍💼',
    filled: true,
    image: experienceImageMap.stateOfWomen,
    highlights: ['Women in Tech', 'Empowerment', 'Global Issues'],
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: 'K3 Activity (Occupational Safety and Health)',
    type: 'Training',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung',
    description: 'Participated in K3 activity to understand occupational safety and health procedures in campus/lab environments, including risk prevention basics and safe work culture.',
    icon: '🦺',
    filled: true,
    image: experienceImageMap.kegiatanK3,
    highlights: ['K3', 'Work Safety', 'Risk Prevention'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Mandarin Class',
    type: 'Language Learning',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung',
    description: 'Actively attended Mandarin classes to improve basic communication, pronunciation, and vocabulary for personal and professional development.',
    icon: '🇨🇳',
    filled: true,
    image: experienceImageMap.kelasMandarin,
    highlights: ['Mandarin', 'Communication', 'Self Development'],
    color: 'from-red-400 to-rose-500',
  },
  {
    title: 'Mushroom Humidity Monitoring System Project',
    type: 'IoT Project',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung',
    description: 'Built a humidity monitoring tool for mushroom cultivation using sensors and a microcontroller. The system reads real-time humidity data and displays it on a dashboard.',
    icon: '🍄',
    filled: true,
    image: experienceImageMap.iotJamur,
    highlights: ['IoT', 'Temperature & Humidity Sensors', 'Microcontroller'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Temperature & Humidity Monitoring Project',
    type: 'IoT Project',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung',
    description: 'Developed an IoT system to monitor temperature and humidity in real time using sensors and a microcontroller, with dashboard visualization.',
    icon: '🌡️',
    filled: true,
    image: experienceImageMap.iotSuhuKelembapan,
    highlights: ['IoT', 'Monitoring Real-time', 'Temperature & Humidity Sensors'],
    color: 'from-teal-400 to-cyan-500',
  },
  {
    title: 'Major Project: Computer Networking II',
    type: 'Academic Project',
    date: 'Academic Semester',
    location: 'State Polytechnic of Lampung',
    description: 'Successfully completed a major Computer Networking II project including medium-scale network design, configuration, and implementation with routing, switching, subnetting, and network security.',
    icon: '🖧',
    filled: true,
    image: experienceImageMap.jaringanKomputer,
    highlights: ['Routing & Switching', 'Subnetting', 'Network Security'],
    color: 'from-sky-500 to-blue-600',
  },
];

function FilledExperienceCard({
  exp,
  index,
  onImageClick,
}: {
  exp: ExperienceItem;
  index: number;
  onImageClick: (url: string, alt: string) => void;
}) {
  const isEven = index % 2 === 0;
  const isSosialisasiClickable = exp.type === 'Outreach' && Boolean(exp.image);

  const handleCardClick = () => {
    if (!isSosialisasiClickable || !exp.image) return;
    onImageClick(exp.image, exp.title);
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isSosialisasiClickable) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };
  
  return (
    <div className={`group experience-card bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-lg shadow-sky-50 hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-500 ${isEven ? 'animate-slide-left' : 'animate-slide-right'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={isSosialisasiClickable ? 'button' : undefined}
      tabIndex={isSosialisasiClickable ? 0 : undefined}
      aria-label={isSosialisasiClickable ? `Open photo ${exp.title}` : undefined}
    >
      {/* Image */}
      {exp.image && (
        <div
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => onImageClick(exp.image!, exp.title)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onImageClick(exp.image!, exp.title);
            }
          }}
          aria-label={`Open photo ${exp.title}`}
        >
          <img 
            src={exp.image} 
            alt={exp.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Type badge */}
          <div className="absolute top-4 left-4">
            <div className={`flex items-center gap-1.5 bg-gradient-to-r ${exp.color} rounded-full px-3 py-1.5 shadow-lg`}>
              <span className="text-sm">{exp.icon}</span>
              <span className="text-white text-xs font-bold">{exp.type}</span>
            </div>
          </div>
          
          {/* Camera icon */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Camera size={14} className="text-white" />
            </div>
            <span className="text-white/90 text-xs font-medium bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-md">
              Documentation
            </span>
          </div>

          {/* Number badge */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{index + 1}</span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
          {exp.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
          <span className="flex items-center gap-1.5 text-sky-500">
            <MapPin size={14} />
            <span className="font-medium">{exp.location}</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Calendar size={14} />
            <span>{exp.date}</span>
          </span>
        </div>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Highlights */}
        {exp.highlights && (
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.highlights.map((h) => (
              <span 
                key={h} 
                className="px-3 py-1 bg-sky-50 text-sky-600 rounded-lg text-xs font-semibold border border-sky-100"
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <button className="flex items-center gap-2 text-sky-500 hover:text-sky-700 text-sm font-medium transition-colors group/btn">
          <ExternalLink size={14} />
          <span>View Details</span>
          <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Experience() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <section id="pengalaman" className="relative py-24 bg-white overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-50/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            Experience & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Experience & Activities 🎯
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            Seminars, outreach, projects, and various activities I have participated in 
            during my study period at State Polytechnic of Lampung
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { label: 'Outreach', value: '2', icon: <Users size={18} />, desc: 'SMA & MAN 1', color: 'from-sky-400 to-blue-500' },
            { label: 'Seminar', value: '1', icon: <Award size={18} />, desc: 'State of Women', color: 'from-pink-400 to-rose-500' },
            { label: 'Workshop', value: '1', icon: <Briefcase size={18} />, desc: 'Odoo Business', color: 'from-cyan-400 to-sky-500' },
            { label: 'Projects', value: '3', icon: <Briefcase size={18} />, desc: '2 IoT + Networking', color: 'from-green-400 to-emerald-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-md shadow-sky-50 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Experience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <FilledExperienceCard
              key={index}
              exp={exp}
              index={index}
              onImageClick={(url, alt) => setSelectedImage({ url, alt })}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-100 text-sky-600 text-sm font-medium">
              <span className="text-lg">🌟</span>
              <span>Continuing to gain experience and contribute!</span>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        open={Boolean(selectedImage)}
        imageUrl={selectedImage?.url}
        imageAlt={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}


