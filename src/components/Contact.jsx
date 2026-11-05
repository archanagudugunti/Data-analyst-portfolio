import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    const firstName = form.firstName?.value?.trim() || ''
    const lastName = form.lastName?.value?.trim() || ''
    const email = form.email?.value?.trim() || ''
    const message = form.message?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS submit error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Giant Parallax "Contact" Background Watermark */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-6 md:left-12 pointer-events-none z-0 opacity-20 text-white/10"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Red Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/20">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/90">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white hover:text-[#ff2a2a] transition-all"
            >
              DM on Instagram
            </a>
          ) : (
            <a
              href={socialLinks.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white hover:text-[#ff2a2a] transition-all"
            >
              Connect on LinkedIn
            </a>
          )}
        </div>

        {/* Form Container */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline-only Inputs */}
            <div className="flex flex-col gap-6">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Message Textarea */}
            <div>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                rows={5}
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors resize-none min-h-[120px]"
              />
            </div>
          </div>

          {/* Bottom Row Elements */}
          <div className="flex flex-col gap-6 pt-4">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-white/90 text-sm select-none">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 w-4 h-4 rounded accent-black cursor-pointer"
              />
              <span>
                I agree to be contacted via email regarding professional opportunities and collaborations.
              </span>
            </label>

            {/* Direct Email Note */}
            <div className="text-white/80 text-xs md:text-sm flex flex-col md:flex-row md:items-center justify-between gap-2 border-t border-white/20 pt-4">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <a
                href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry – Portfolio`}
                className="underline font-semibold hover:text-black transition-colors shrink-0"
              >
                Need an urgent response? Email directly
              </a>
            </div>

            {/* Submit Action Button with Status States */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 text-white/70 font-bold border border-white/30 cursor-not-allowed select-none"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold border border-emerald-400 select-none shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-950 text-red-200 font-bold border border-red-700 select-none shadow-lg hover:bg-red-900 transition-colors"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-base transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] hover:scale-105"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
