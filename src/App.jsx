import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'

export default function App() {
  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
        <Preloader />
      <Navbar />
{/* Home / Hero Section with Photo Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-start text-white overflow-hidden px-8 md:px-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/profile-bg.jpeg" 
            alt="Archana Gudugunti" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-2xl text-left py-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm Archana Gudugunti, <span className="text-red-400">Data Analyst</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            Passionate about transforming raw data into actionable business insights with Python, SQL, Excel, and Power BI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-black/80 hover:bg-black text-white font-medium px-6 py-3 rounded-full border border-gray-700 transition"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="bg-red-900/80 hover:bg-red-900 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Contact Me
            </a>
            
            <a 
              href="/archana da resume2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full border border-white/30 transition flex items-center gap-2"
            >
              <span>📥</span> Download Resume
            </a>
          </div>
        </div>
      </section>
      
        
             
      <main>
        <About />
        <TechnicalSkills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}