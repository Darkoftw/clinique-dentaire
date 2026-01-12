
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Années d'expérience", value: "15+", icon: "fa-award" },
    { label: "Patients satisfaits", value: "5000+", icon: "fa-users" },
    { label: "Urgence 7j/7", value: "Dispo", icon: "fa-clock" },
    { label: "Technologie", value: "Modern", icon: "fa-microscope" }
  ];

  return (
    <section className="bg-primary py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white reveal pointer-events-auto">
              <div className="text-2xl md:text-3xl mb-3 opacity-80"><i className={`fa-solid ${stat.icon}`}></i></div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
