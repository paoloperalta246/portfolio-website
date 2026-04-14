import React, { useEffect, useRef } from 'react'
import './Skills.css'

const SKILLS = [
  {
    icon: '🌐',
    title: 'HTML5',
    desc: 'Semantic markup, accessibility, and modern HTML structure.',
    level: 95,
    levelLabel: 'Proficient',
  },
  {
    icon: '🎨',
    title: 'CSS3',
    desc: 'Flexbox, grid, animations, and custom property designs.',
    level: 90,
    levelLabel: 'Skilled',
  },
  {
    icon: '⚡',
    title: 'JavaScript',
    desc: 'ES6+, DOM manipulation, fetch API, and core programming concepts.',
    level: 85,
    levelLabel: 'Improving',
  },
  {
    icon: '🗄️',
    title: 'SQL',
    desc: 'Database design, queries, joins, and data manipulation.',
    level: 90,
    levelLabel: 'Efficient',
  },
  {
    icon: '⚛️',
    title: 'React',
    desc: 'Functional components, hooks, and component design.',
    level: 80,
    levelLabel: 'Intermediate',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Mobile-first layouts, media queries, and adaptive UI patterns.',
    level: 85,
    levelLabel: 'Experienced',
  },
  {
    icon: '🖌️',
    title: 'UI / UX Basics',
    desc: 'Design principles, typography, and Figma basics & fundamentals.',
    level: 90,
    levelLabel: 'Adept',
  },
  {
    icon: '🔧',
    title: 'Git & GitHub',
    desc: 'Version control, branching, commits, and project collaboration.',
    level: 65,
    levelLabel: 'Gaining Experience',
  },
]

const ALSO_LEARNING = ['Tailwind CSS', 'Node.js', 'Figma', 'TypeScript', 'Firebase']

/**
 * SkillCard — individual card with animated progress bar.
 * Bar animates when it enters the viewport via IntersectionObserver.
 */
function SkillCard({ icon, title, desc, level, levelLabel, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animated')
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <span className="skill-card__icon">{icon}</span>
      <p className="skill-card__title">{title}</p>
      <p className="skill-card__desc">{desc}</p>

      {/* Progress bar */}
      <div className="skill-card__bar-bg">
        <div
          ref={barRef}
          className="skill-card__bar-fill"
          style={{ '--skill-level': `${level}%` }}
        />
      </div>
      <div className="skill-card__level">
        <span>{levelLabel}</span>
        <span>{level}%</span>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="skills__header">
          <p className="section-label reveal">Skills</p>
          <h2 className="section-title reveal reveal-delay-1">
            My <span>Toolkit</span>
          </h2>
        </div>

        <div className="skills__grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i * 60} />
          ))}
        </div>

        {/* Also learning */}
        <div className="skills__also reveal">
          <p className="skills__also-label">Also exploring</p>
          <div className="skills__tags">
            {ALSO_LEARNING.map((tag) => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
