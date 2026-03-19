import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  Award, 
  GraduationCap,
  ChevronRight,
  Layers,
  Zap,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "Energy Consumption Forecasts",
    description: "ML-powered web application predicting residential energy consumption with >90% accuracy using TensorFlow and Scikit-learn.",
    tags: ["Python", "ReactJS", "TensorFlow", "Flask"],
    icon: <Zap className="w-5 h-5 text-violet-400" />
  },
  {
    title: "ML Appliance Classifier",
    description: "Mobile application integrating a machine learning model that classifies household appliances based on real-time images.",
    tags: ["Mobile", "Machine Learning", "Computer Vision"],
    icon: <Layers className="w-5 h-5 text-purple-400" />
  },
  {
    title: "Educational NFT System",
    description: "Blockchain-based system designed to issue NFTs as digital certificates to students participating in university courses.",
    tags: ["Solidity", "Blockchain", "NFTs"],
    icon: <Award className="w-5 h-5 text-fuchsia-400" />
  },
  {
    title: "Enterprise DAO",
    description: "Decentralized Autonomous Organization system for businesses, enabling transparent group voting and fund management.",
    tags: ["Solidity", "DeFi", "Smart Contracts"],
    icon: <Database className="w-5 h-5 text-violet-400" />
  },
];

const PUBLICATIONS = [
  {
    title: "Integrating Machine Learning into Residential Energy Forecasting and Management",
    publisher: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/document/11216310",
    description: "Research focused on leveraging advanced ML algorithms to optimize energy consumption patterns in residential buildings.",
    date: "2024"
  }
];

const SKILLS = {
  "Programming": ["Python", "Solidity", "JavaScript", "PostgreSQL"],
  "Web Development": ["ReactJS", "Flask", "RESTful APIs", "Node.js"],
  "Machine Learning": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  "Blockchain/DeFi": ["Ethers.js", "Uniswap V2", "Smart Contracts", "DAO"],
  "DevOps & Tools": ["Git", "GitHub", "Hardhat", "Docker", "VS Code"]
};

const EXPERIENCE = [
  {
    role: "Research Assistant (Paid Internship)",
    company: "Concordia University of Edmonton / Mitsidi",
    period: "Jul 2024 - Dec 2024",
    location: "Edmonton, AB",
    points: [
      "Developed an ML-powered web app for building energy consumption with >90% prediction accuracy.",
      "Boosted accuracy by 20% through comparative analysis and refinement of traditional models.",
      "Built a full-stack Flask/ReactJS application trained on 10,000+ EnergyPlus samples.",
      "Delivered data-driven recommendations that quantified potential energy savings."
    ]
  },
  {
    role: "Associate Software Developer",
    company: "Rapid Innovation Inc",
    period: "Aug 2021 - Oct 2022",
    location: "Noida, India",
    points: [
      "Deployed a provably fair dice roll game using Solidity smart contracts on Pulsechain.",
      "Integrated smart contracts with ReactJS/Web3.js for a token launchpad project.",
      "Implemented DeFi features based on Uniswap V2, reducing transaction costs by 15-20%.",
      "Designed yield farming contracts and DAO governance systems with on-chain voting."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-violet-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="fixed inset-0 glow-mesh pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white text-sm">N</div>
            NEERAJ<span className="text-violet-500">.DEV</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            {["Experience", "Projects", "Publications", "Skills", "Education"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-violet-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              <a href="mailto:neerajreddy1850@gmail.com" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                <Mail size={18} />
              </a>
              <a href="https://www.linkedin.com/in/neeraj-silavanuru-803412218/" target="_blank" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
            <button 
              className="lg:hidden p-2 text-slate-400 hover:text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-xl pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {["Experience", "Projects", "Publications", "Skills", "Education"].map((item, idx) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold hover:text-violet-500 transition-colors tracking-tighter"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/10 flex gap-6"
              >
                <a href="mailto:neerajreddy1850@gmail.com" className="text-slate-400 hover:text-white"><Mail size={24} /></a>
                <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-white"><Github size={24} /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          <motion.div style={{ y, opacity }} className="max-w-5xl text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                  <Sparkles size={12} />
                  Available for opportunities in India
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Blockchain & AI<br />
                <span className="text-gradient">Developer</span><br />
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Neeraj Silavanuru — Full-Stack Engineer & AI Researcher. 
                Specializing in <span className="text-white font-medium">Machine Learning</span>, 
                <span className="text-white font-medium"> Blockchain</span>, and 
                high-performance decentralized systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-violet-600/20"
                >
                  View My Work
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="mailto:neerajreddy1850@gmail.com" 
                  className="w-full sm:w-auto px-10 py-4 glass hover:bg-white/10 rounded-xl font-semibold transition-all flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-violet-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Professional Path</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Work Experience</h2>
          </div>

          <div className="space-y-20 md:space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20"
              >
                <div className="md:sticky md:top-32 h-fit">
                  <div className="text-violet-500 font-mono text-xs sm:text-sm mb-2">{exp.period}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-4">{exp.company}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-wider">
                    <Globe size={10} /> {exp.location}
                  </div>
                </div>
                <div className="space-y-6">
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="group flex gap-3 sm:gap-4 text-slate-400 hover:text-white transition-colors">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-600 group-hover:scale-150 transition-transform shrink-0" />
                      <p className="text-sm sm:text-base leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Bento Grid */}
        <section id="projects" className="py-24 md:py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-violet-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-10 rounded-[2.5rem] glass border-white/5 hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all duration-500">
                          {project.icon}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                          <ArrowUpRight className="text-violet-400" size={24} />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-base leading-relaxed mb-8 line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-500 group-hover:text-violet-300 group-hover:border-violet-500/20 group-hover:bg-violet-500/5 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div>
              <span className="text-violet-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Capabilities</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8">Technical Arsenal</h2>
              <p className="text-slate-400 leading-relaxed mb-12 text-sm sm:text-base">
                A diverse set of technologies mastered over years of academic rigor and professional application.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {Object.entries(SKILLS).map(([category, skills], idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl border border-white/5 hover:border-violet-500/20 transition-colors"
                >
                  <h3 className="text-xs font-mono text-violet-500 uppercase tracking-[0.2em] mb-6">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-300 hover:text-white hover:bg-violet-500/10 transition-all"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-violet-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Research & Insights</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">Publications</h2>
          </div>

          <div className="grid gap-8">
            {PUBLICATIONS.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl glass border-white/5 group hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                        <BookOpen size={20} />
                      </div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{pub.publisher} • {pub.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                      {pub.description}
                    </p>
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors group/link"
                    >
                      View on IEEE Xplore
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Recognition */}
        <section id="education" className="py-24 md:py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <GraduationCap className="text-violet-500" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold">Academic Background</h2>
              </div>
              <div className="space-y-12">
                {[
                  {
                    degree: "Master of Science, Information Technology",
                    school: "Concordia University of Edmonton",
                    period: "2023 - 2024",
                    meta: "CGPA: 3.8/4 | Edmonton, Canada"
                  },
                  {
                    degree: "Bachelor of Engineering, Electronics & Communications",
                    school: "R.M.K. Engineering College",
                    period: "2017 - 2021",
                    meta: "CGPA: 8.4/10 | Chennai, India"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="group">
                    <div className="text-violet-500 font-mono text-xs mb-2">{edu.period}</div>
                    <h4 className="text-xl font-bold mb-1 group-hover:text-violet-400 transition-colors">{edu.degree}</h4>
                    <p className="text-slate-400 text-sm mb-2">{edu.school}</p>
                    <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">{edu.meta}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div id="recognition">
              <div className="flex items-center gap-4 mb-12">
                <Award className="text-violet-500" size={32} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Recognition</h2>
              </div>
              <div className="grid gap-4">
                {[
                  "Awarded Mitacs grant for developing an ML system to analyze and reduce residential energy consumption.",
                  "Awarded Second for Paper Presentation at IEI",
                  "Shortlisted for Centre of Excellence by Wipro",
                  "Excellent Performance Certificate from BSNL",
                ].map((award, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-2xl glass border-white/5 flex items-center justify-between group"
                  >
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{award}</span>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-violet-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 text-center overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              READY TO BUILD<br />
              <span className="text-gradient">SOMETHING</span> GREAT?
            </h2>
            <p className="text-slate-400 mb-12 text-base sm:text-lg font-light">
              Currently open to new opportunities and collaborations in India.
            </p>
            <a 
              href="mailto:neerajreddy1850@gmail.com" 
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-violet-500 hover:text-white transition-all duration-300 group"
            >
              Start a Conversation
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="font-mono font-bold text-lg tracking-tighter">
              NEERAJ<span className="text-violet-500">.DEV</span>
            </div>
            <div className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em]">
              Designed & Engineered with precision © 2026
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Neeraj1850/" className="text-slate-500 hover:text-violet-400 transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/neeraj-silavanuru-803412218/" className="text-slate-500 hover:text-violet-400 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:neerajreddy1850@gmail.com" className="text-slate-500 hover:text-violet-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
