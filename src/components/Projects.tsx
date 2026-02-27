import { useState } from 'react';
import { ExternalLink, Star, Plus, Camera, MapPin, Users, Cpu, Globe, Gamepad2, Network } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  featured: boolean;
  filled: boolean;
  image?: string;
  location?: string;
  type?: string;
}

const projectImageMap = {
  iotJamur: new URL('../../image/IOT kelembapan pada jamaur.jpeg', import.meta.url).href,
  sosialisasiSma: new URL('../../image/sosialisasi SMA 13.jpeg', import.meta.url).href,
  sosialisasiMan1: new URL('../../image/sosialisasi MAN1.jpeg', import.meta.url).href,
  jaringanKomputer: new URL('../../image/jaringan komputer.jpeg', import.meta.url).href,
};

const projects: Project[] = [
  {
    title: 'Monitoring Kelembapan pada Jamur 🍄',
    description: 'An IoT project to build a real-time humidity monitoring system for mushroom cultivation using sensors and a microcontroller. The system helps farmers monitor environmental conditions through a dashboard.',
    tags: ['IoT', 'Sensor DHT', 'Microcontroller', 'Monitoring', 'Arduino'],
    icon: '🍄',
    gradient: 'from-sky-400 to-blue-500',
    featured: true,
    filled: true,
    image: projectImageMap.iotJamur,
    type: 'IoT Project',
  },
  {
    title: 'High School Outreach - Introduction to Network Programming',
    description: 'An outreach activity at a high school to introduce network programming. Materials covered computer networking basics, HTML, CSS, and core network programming concepts.',
    tags: ['Outreach', 'Network Programming', 'HTML', 'CSS', 'Education'],
    icon: '🏫',
    gradient: 'from-cyan-400 to-sky-500',
    featured: true,
    filled: true,
    image: projectImageMap.sosialisasiSma,
    location: 'SMA',
    type: 'Outreach',
  },
  {
    title: 'MAN 1 Outreach - Introduction to Professional Ethics',
    description: 'An outreach activity at MAN 1 introducing professional ethics in information technology, including digital ethics, professionalism, and responsibility as future IT practitioners.',
    tags: ['Outreach', 'Etika Profesi', 'MAN 1', 'Education', 'IT Ethics'],
    icon: '📚',
    gradient: 'from-blue-400 to-indigo-500',
    featured: true,
    filled: true,
    image: projectImageMap.sosialisasiMan1,
    location: 'MAN 1',
    type: 'Outreach',
  },
  {
    title: 'Major Project: Computer Networking II',
    description: 'Successfully completed a major Computer Networking II project involving medium-scale network design, configuration, and implementation, including routing, switching, subnetting, and network security.',
    tags: ['Computer Networking', 'Routing', 'Switching', 'Network Security'],
    icon: '🖧',
    gradient: 'from-sky-500 to-blue-600',
    featured: false,
    filled: true,
    image: projectImageMap.jaringanKomputer,
    type: 'Academic Project',
  },
  {
    title: 'Website Portofolio Personal',
    description: 'A responsive and modern personal portofolio website with smooth animations, built using React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    icon: '💼',
    gradient: 'from-cyan-400 to-sky-500',
    featured: false,
    filled: true,
    type: 'Personal Project',
  },
  {
    title: 'Game Python 🎮',
    description: 'A game built with Python, implementing game logic, a scoring system, and a user interface.',
    tags: ['Python', 'Game Dev', 'Pygame'],
    icon: '🎮',
    gradient: 'from-blue-400 to-indigo-500',
    featured: false,
    filled: true,
    type: 'Personal Project',
  },
  {
    title: 'New Project',
    description: 'This project is under development. Please check back later for updates!',
    tags: ['Coming Soon'],
    icon: '🚀',
    gradient: 'from-sky-300 to-blue-400',
    featured: false,
    filled: false,
  },
  {
    title: 'New Project',
    description: 'This project is under development. Please check back later for updates!',
    tags: ['Coming Soon'],
    icon: '💡',
    gradient: 'from-cyan-300 to-sky-400',
    featured: false,
    filled: false,
  },
];

function ProjectImagePlaceholder({ icon, gradient, type }: { icon: string; gradient: string; type?: string }) {
  return (
    <div className={`h-56 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-lg rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full" />
      </div>
      <span className="text-7xl relative z-10 drop-shadow-lg">{icon}</span>
      {type && (
        <span className="mt-3 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold relative z-10">
          {type}
        </span>
      )}
    </div>
  );
}

function FeaturedProject({ project, onImageClick }: { project: Project; onImageClick: (url: string, alt: string) => void }) {
  const IconComponent = project.type === 'Outreach' ? Users : project.type === 'IoT Project' ? Cpu : Globe;
  
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-lg shadow-sky-50 hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-500">
      {/* Project Image Area */}
      <div className="relative overflow-hidden">
        {project.image ? (
          <div
            className="h-56 relative overflow-hidden cursor-pointer"
            onClick={() => onImageClick(project.image!, project.title)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onImageClick(project.image!, project.title);
              }
            }}
            aria-label={`Open photo ${project.title}`}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Photo overlay icon */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Camera size={16} className="text-white" />
              </div>
              <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                Activity Documentation
              </span>
            </div>
          </div>
        ) : (
          <ProjectImagePlaceholder icon={project.icon} gradient={project.gradient} type={project.type} />
        )}
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <Star size={14} className="text-yellow-300 fill-yellow-300" />
            <span className="text-white text-xs font-medium">Featured</span>
          </div>
        </div>
        {project.type && (
          <div className="absolute top-4 left-4">
            <div className={`flex items-center gap-1.5 bg-gradient-to-r ${project.gradient} rounded-full px-3 py-1.5 shadow-lg`}>
              <IconComponent size={12} className="text-white" />
              <span className="text-white text-xs font-bold">{project.type}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
          {project.title}
        </h3>
        {project.location && (
          <div className="flex items-center gap-1.5 text-sky-500 text-sm mb-2">
            <MapPin size={14} />
            <span className="font-medium">{project.location}</span>
          </div>
        )}
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-sky-50 text-sky-600 rounded-lg text-xs font-medium border border-sky-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-sky-200 transition-all duration-300">
            <ExternalLink size={14} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function SmallProject({ project, onImageClick }: { project: Project; onImageClick: (url: string, alt: string) => void }) {
  const getIcon = () => {
    if (project.title.includes('Networking')) return <Network size={20} className="text-white" />;
    if (project.title.includes('Game')) return <Gamepad2 size={20} className="text-white" />;
    if (project.title.includes('Portofolio')) return <Globe size={20} className="text-white" />;
    return null;
  };

  return (
    <div
      className={`group rounded-2xl overflow-hidden border shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-400 ${
        project.filled 
          ? 'bg-white border-sky-100 shadow-sky-50 hover:shadow-sky-100' 
          : 'bg-sky-50/50 border-dashed border-sky-200 shadow-sky-50 hover:shadow-sky-100 hover:bg-white'
      }`}
    >
      {/* Small image area */}
      {project.filled && project.image ? (
        <div
          className="h-32 relative overflow-hidden cursor-pointer"
          onClick={() => onImageClick(project.image!, project.title)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onImageClick(project.image!, project.title);
            }
          }}
          aria-label={`Open photo ${project.title}`}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2 left-2">
            <span className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md font-medium">
              📸 Foto
            </span>
          </div>
        </div>
      ) : project.filled ? (
        <div className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-2 w-12 h-12 border border-white rounded-full" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              {getIcon() || <span className="text-2xl">{project.icon}</span>}
            </div>
            {project.type && (
              <span className="text-white/80 text-[10px] font-medium">{project.type}</span>
            )}
          </div>
        </div>
      ) : null}

      <div className="p-5">
        {!project.filled && (
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 opacity-60 group-hover:opacity-100 transition-opacity`}>
            <Plus size={24} className="text-white" />
          </div>
        )}
        <h3 className={`font-bold mb-2 group-hover:text-sky-600 transition-colors ${
          project.filled ? 'text-slate-800' : 'text-slate-400'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-3 line-clamp-2 ${
          project.filled ? 'text-slate-500' : 'text-slate-400 italic'
        }`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                project.filled 
                  ? 'bg-sky-50 text-sky-500 border border-sky-100' 
                  : 'bg-sky-100/50 text-sky-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="proyek" className="relative py-24 bg-gradient-to-b from-sky-50 via-white to-sky-50">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            Projects & Activities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            My Projects & Work ✨
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-2xl mx-auto">
            Here are some projects and outreach activities I have worked on during 
            my study period at State Polytechnic of Lampung
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { label: 'Total Projects', value: '6+', icon: '📁', color: 'from-sky-400 to-blue-500' },
            { label: 'Outreach', value: '2', icon: '📢', color: 'from-cyan-400 to-sky-500' },
            { label: 'IoT Project', value: '1', icon: '🔌', color: 'from-blue-400 to-indigo-500' },
            { label: 'Networking', value: '1', icon: '🖧', color: 'from-sky-500 to-blue-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-md shadow-sky-50 text-center group hover:-translate-y-1 transition-all duration-300">
              <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-700 mb-6 flex items-center gap-2">
            <Star size={20} className="text-yellow-500 fill-yellow-500" />
            Featured Projects
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={index}
              project={project}
              onImageClick={(url, alt) => setSelectedImage({ url, alt })}
            />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-700 mb-6 flex items-center gap-2">
            <span className="text-xl">📂</span>
            Other Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <SmallProject
              key={index}
              project={project}
              onImageClick={(url, alt) => setSelectedImage({ url, alt })}
            />
          ))}
        </div>

        {/* More projects hint */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-sky-50 rounded-2xl border border-sky-100 text-sky-500 text-sm font-medium">
            <span className="text-lg">🔨</span>
            More projects are in development, stay tuned!
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




