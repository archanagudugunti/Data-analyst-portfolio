import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

export function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 0,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef?.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height || 1350
    const currentScrollY = latest * containerHeight

    if (currentScrollY >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.4)] text-white'
          : 'bg-white shadow-xl text-black border border-gray-200'
      } md:absolute ${className}`}
    >
      {/* Top punched hole */}
      <div
        className={`w-4 h-4 rounded-full border-2 mx-auto mt-2 transition-colors duration-700 ${
          isActive ? 'border-red-300 bg-red-900/60' : 'border-gray-300 bg-gray-200'
        }`}
      />

      {/* Inner card panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span
            className={`block text-3xl md:text-4xl font-serif italic mb-2 transition-colors duration-700 ${
              isActive ? 'text-white/80' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3 className="text-2xl font-black mb-3 tracking-tight">
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopPositions = [
    {
      className: 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white text-black pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="mb-16 md:mb-0 md:absolute top-10 left-0 md:w-[450px] z-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-100 border border-red-200 mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black tracking-tight">
              {skillsContent.heading}
            </h2>
            <svg
              className="absolute -bottom-4 -right-8 w-8 h-8 text-red-500 fill-none stroke-current stroke-2 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
              />
            </svg>
          </div>
          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Curved Path SVG */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask for Reveal */}
          <mask id="path-mask">
            <motion.path
              d={desktopPath}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Solid Animated Dash Path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Vertical Path SVG */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint Mobile Guide */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Layer 2: Mobile Mask */}
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="20"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Mobile Revealed Path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Hanging Tag Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => {
            const pos = desktopPositions[idx] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={pos.className}
                aosDelay={pos.aosDelay}
                aosType={pos.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-written End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-10">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}
