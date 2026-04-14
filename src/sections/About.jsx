
import React from 'react'
import './About.css'
import PaoloImg from '../images/Paolo.png'

const FACTS = [
  { icon: '🎓', label: 'IT Student' },
  { icon: '📍', label: 'Bulacan, Philippines' },
  { icon: '💼', label: 'Open to Internships' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__inner">

          {/* Left column — avatar */}
          <div className="about__image-wrapper reveal">
            <div className="about__avatar" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                src={PaoloImg} 
                alt="Juan Paolo Peralta" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '1.2rem'
                }} 
              />
              {/* Floating badge in lower right */}
              <div className="about__badge" style={{ position: 'absolute', right: '0.5rem', bottom: '0.5rem', zIndex: 2 }}>
                <span className="about__badge-number">3+</span>
                <span className="about__badge-text">Years learning<br/>and improving</span>
              </div>
            </div>
          </div>

          {/* Right column — text */}
          <div className="about__content">
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal reveal-delay-1">
              Building things<br/>for the <span>web</span>
            </h2>

            <p className="reveal reveal-delay-2">
              Hi, I'm <strong>Juan Paolo Peralta</strong> — a student developer
              with a genuine passion for building digital experiences that are both
              <strong> functional and visually engaging</strong>.
            </p>

            <p className="reveal reveal-delay-3">
              I am currently pursuing a Bachelor of Science in Information Technology (BSIT) program at
              Bulacan State University – Bustos Campus. I started with <strong>Java</strong> in my first year, then
              moved into web development in my second year, learning <strong>HTML, CSS, JavaScript, PHP,</strong> and <strong>SQL</strong>.
              Now in my third year, I’m focusing on modern front-end tools like <strong>React, Tailwind CSS,</strong> and <strong>Vite</strong>,
              while improving my ability to build responsive and user-friendly interfaces.
            </p>

            <p className="reveal reveal-delay-4">
              My goal is to land a <strong>front-end web developer role</strong> where I can
              contribute to real products, grow alongside a great team, and continue
              leveling up my craft every single day.
            </p>

            {/* Quick facts */}
            <div className="about__facts reveal reveal-delay-4">
              {FACTS.map(({ icon, label }) => (
                <span key={label} className="about__fact">
                  <span>{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
