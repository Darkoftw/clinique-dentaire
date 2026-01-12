
import React, { useState, useRef } from 'react';

const WhyChooseUs: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-10">Pourquoi nous choisir ?</h2>
          <ul className="space-y-8">
            {[
              { title: "Technologies 3D", icon: "fa-microscope", desc: "Diagnostic précis par imagerie numérique." },
              { title: "Ambiance Relaxante", icon: "fa-spa", desc: "Un cadre conçu pour apaiser l'anxiété." },
              { title: "Paiements Flexibles", icon: "fa-credit-card", desc: "Solutions adaptées à votre budget." }
            ].map((p, i) => (
              <li key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-light text-primary rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{p.title}</h4>
                  <p className="text-dark/60">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 reveal">
          <div className="bg-light p-4 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <div 
              ref={containerRef}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl cursor-ew-resize select-none"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              <img src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg" alt="Après" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 h-full overflow-hidden border-r-4 border-white z-10" style={{ width: `${sliderPos}%` }}>
                <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" alt="Avant" className="absolute inset-0 h-full w-[100vw] lg:w-[50vw] object-cover" />
              </div>
              <div className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-[20px]" style={{ left: `${sliderPos}%` }}>
                <div className="w-10 h-10 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white"><i className="fa-solid fa-arrows-left-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
