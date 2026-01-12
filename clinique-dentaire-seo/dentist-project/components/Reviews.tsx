
import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../constants';

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 reveal">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Ce que disent nos patients</h2>
            <p className="text-lg text-dark/60">La satisfaction de nos patients est notre plus belle récompense.</p>
          </div>
          <div className="flex items-center gap-4 bg-light p-4 rounded-2xl border border-gray-100">
            <div className="text-yellow-500 font-bold flex gap-1"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            <div className="text-sm font-bold text-dark">{CLINIC_INFO.googleRating} / 5 ({CLINIC_INFO.reviewsCount} avis)</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto reveal bg-light p-10 md:p-16 rounded-[40px] relative">
          <p className="text-xl md:text-2xl text-dark leading-relaxed italic mb-10 text-center">
            "{TESTIMONIALS[activeIndex].text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold">{TESTIMONIALS[activeIndex].initials}</div>
            <div className="font-bold text-lg">{TESTIMONIALS[activeIndex].name}</div>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={`h-2 rounded-full transition-all ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-accent'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
