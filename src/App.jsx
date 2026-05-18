import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  Camera,
  ChevronRight,
  Clapperboard,
  Code2,
  Copy,
  Cpu,
  Film,
  Layers3,
  Lightbulb,
  Mail,
  Menu,
  MonitorPlay,
  Palette,
  Play,
  Rocket,
  Search,
  Sparkles,
  Star,
  WandSparkles,
  X,
  Video
} from "lucide-react";

const videoUrls = {
  hero: "https://www.w3schools.com/html/mov_bbb.mp4",
  showreel: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  projects: [
    "https://media.w3.org/2010/05/sintel/trailer.mp4",
    "https://media.w3.org/2010/05/bunny/trailer.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://media.w3.org/2010/05/video/movie_300.mp4"
  ],
  samples: [
    "https://www.w3schools.com/html/movie.mp4",
    "https://media.w3.org/2010/05/bunny/trailer.mp4",
    "https://media.w3.org/2010/05/sintel/trailer.mp4"
  ]
};
const email = "hello@example.com";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "AI Video", id: "ai-video" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" }
];

const roles = [
  {
    title: "AI Video Creator",
    icon: Clapperboard,
    text: "브랜드 메시지를 영상 언어로 정리하고 생성형 AI 기반 쇼릴, 광고, 제품 소개 영상을 제작합니다."
  },
  {
    title: "Frontend Developer",
    icon: Code2,
    text: "React와 Vite를 중심으로 빠르고 안정적인 인터랙티브 웹 경험을 구현합니다."
  },
  {
    title: "Digital Product Designer",
    icon: Layers3,
    text: "Figma 기반 UI 설계부터 웹 적용까지 연결해 완성도 높은 디지털 제품 경험을 만듭니다."
  }
];

const projects = [
  {
    title: "AI 브랜드 영상 쇼릴",
    desc: "생성형 AI 비주얼과 모션 편집으로 브랜드의 첫인상을 설계한 쇼릴 프로젝트입니다.",
    image: "https://picsum.photos/seed/cinematic-ai-video-studio/900/620",
    category: "AI Video",
    video: videoUrls.projects[0],
    tags: ["Runway", "Midjourney", "After Effects"],
    role: "Creative Direction",
    metric: "42% more engagement"
  },
  {
    title: "React 포트폴리오 웹사이트",
    desc: "영상, 프로젝트, 기술 스택을 반응형 UI로 정리한 프론트엔드 포트폴리오입니다.",
    image: "https://picsum.photos/seed/premium-web-ui-dashboard/900/620",
    category: "Frontend",
    video: videoUrls.projects[1],
    tags: ["React", "Vite", "CSS"],
    role: "Frontend",
    metric: "98 Lighthouse score"
  },
  {
    title: "인터랙티브 랜딩페이지",
    desc: "스크롤 리빌과 카드 인터랙션을 활용해 서비스 가치를 부드럽게 전달했습니다.",
    image: "https://picsum.photos/seed/interactive-landing-motion/900/620",
    category: "Interactive Web",
    video: videoUrls.projects[2],
    tags: ["UI Motion", "JavaScript", "Figma"],
    role: "UI Engineering",
    metric: "31% higher CTA click"
  },
  {
    title: "AI 광고 영상 제작",
    desc: "프롬프트 설계부터 최종 편집까지 짧고 강한 광고 영상 포맷을 제작했습니다.",
    image: "https://picsum.photos/seed/brand-film-production/900/620",
    category: "Brand Film",
    video: videoUrls.projects[3],
    tags: ["ChatGPT", "Kling", "Premiere Pro"],
    role: "AI Video",
    metric: "12 versions delivered"
  },
  {
    title: "영상 기반 제품 소개 페이지",
    desc: "제품 기능을 영상 카드와 웹 인터랙션으로 연결한 프리미엄 소개 페이지입니다.",
    image: "https://picsum.photos/seed/video-product-interface/900/620",
    category: "Video Web",
    video: videoUrls.projects[4],
    tags: ["React", "Video UX", "Responsive"],
    role: "Product Web",
    metric: "2.4x session depth"
  },
  {
    title: "프론트엔드 UI 컴포넌트 시스템",
    desc: "버튼, 카드, 배지, 타임라인 등 반복 가능한 UI 패턴을 체계화했습니다.",
    image: "https://picsum.photos/seed/ui-component-library/900/620",
    category: "UI System",
    video: videoUrls.projects[5],
    tags: ["Design System", "CSS", "Components"],
    role: "System Design",
    metric: "35 reusable blocks"
  }
];

const videoSamples = [
  { title: "Concept Film", type: "AI mood reel", image: "https://picsum.photos/seed/concept-film/700/460", video: videoUrls.samples[0] },
  { title: "Product Motion", type: "Launch visual", image: "https://picsum.photos/seed/product-motion/700/460", video: videoUrls.samples[1] },
  { title: "Social Ad", type: "Short campaign", image: "https://picsum.photos/seed/social-ad/700/460", video: videoUrls.samples[2] }
];

const timeline = [
  "스토리 기획",
  "프롬프트 설계",
  "이미지 생성",
  "영상 생성",
  "편집",
  "웹 적용"
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    desc: "영상과 제품 UI를 안정적인 React 기반 인터페이스로 구현합니다.",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 94 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 90 },
      { name: "Vite", level: 86 }
    ]
  },
  {
    title: "AI Video",
    icon: Film,
    desc: "프롬프트, 생성, 편집, 쇼릴 구성을 하나의 제작 파이프라인으로 연결합니다.",
    items: [
      { name: "ChatGPT", level: 92 },
      { name: "Midjourney", level: 88 },
      { name: "Runway", level: 86 },
      { name: "Kling", level: 82 },
      { name: "After Effects", level: 84 },
      { name: "Premiere Pro", level: 86 }
    ]
  },
  {
    title: "Design",
    icon: Palette,
    desc: "브랜드 톤, UI 흐름, 모션 감각을 정돈된 화면 시스템으로 설계합니다.",
    items: [
      { name: "Figma", level: 90 },
      { name: "Photoshop", level: 82 },
      { name: "UI Design", level: 88 },
      { name: "Motion Design", level: 84 }
    ]
  }
];

const process = [
  { title: "Research", icon: Search, desc: "브랜드 목표와 사용자 맥락을 빠르게 정리합니다." },
  { title: "Concept", icon: Lightbulb, desc: "영상 톤과 웹 경험의 중심 콘셉트를 설계합니다." },
  { title: "Prompt Design", icon: WandSparkles, desc: "장면, 스타일, 움직임을 생성 가능한 언어로 바꿉니다." },
  { title: "Video Generation", icon: Film, desc: "AI 툴로 영상 자산을 만들고 후보 컷을 선별합니다." },
  { title: "Frontend Development", icon: Cpu, desc: "React UI와 인터랙션으로 결과물을 웹에 적용합니다." },
  { title: "Launch", icon: Rocket, desc: "반응형 점검과 빌드 검증 후 배포 가능한 상태로 마감합니다." }
];

const testimonials = [
  {
    name: "Hana Kim",
    job: "Brand Manager",
    image: "https://picsum.photos/seed/hana-client/160/160",
    text: "추상적인 브랜드 메시지를 영상과 웹 경험으로 설득력 있게 풀어냈습니다."
  },
  {
    name: "Min Park",
    job: "Product Lead",
    image: "https://picsum.photos/seed/min-client/160/160",
    text: "디자인 감각과 프론트엔드 구현력이 함께 있어 협업 속도가 매우 좋았습니다."
  },
  {
    name: "Jiwon Lee",
    job: "Creative Director",
    image: "https://picsum.photos/seed/jiwon-client/160/160",
    text: "AI 영상 제작 프로세스가 체계적이고 결과물의 완성도가 안정적이었습니다."
  }
];

function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <button className="brand" onClick={() => handleNavigate("home")} aria-label="Home">
          <span className="brand-mark">M</span>
          <span>MIYOUNG</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "nav-link active" : "nav-link"}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={isOpen ? "mobile-nav open" : "mobile-nav"}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "mobile-link active" : "mobile-link"}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

function SectionIntro({ eyebrow, title, desc }) {
  return (
    <div className="section-intro reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-media">
        <img src={project.image} alt="" />
        <video src={project.video} muted loop playsInline preload="metadata" />
        <span className="project-category">{project.category}</span>
        <div className="media-ui">
          <span />
          <strong>00:24</strong>
        </div>
      </div>
      <div className="project-body">
        <div className="project-topline">
          <span>{project.role}</span>
          <strong>{project.metric}</strong>
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <button className="project-button">
          View Project <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

function SkillGroup({ group }) {
  const Icon = group.icon;

  return (
    <div className="skill-group reveal">
      <div className="skill-heading">
        <div className="icon-box"><Icon size={23} /></div>
        <div>
          <h3>{group.title}</h3>
          <p>{group.desc}</p>
        </div>
      </div>
      <div className="skill-list">
        {group.items.map((item) => (
          <div className="skill-pill" key={item.name}>
            <span>{item.name}</span>
            <strong>{item.level}%</strong>
            <i style={{ width: `${item.level}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const sections = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const current = sections
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? 0 }))
        .filter((section) => scrollTop + 160 >= section.top)
        .at(-1);
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleCopyEmail = async () => {
    await navigator.clipboard?.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-ring" />
        <p>Creating premium portfolio</p>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Header activeSection={activeSection} />

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy reveal visible">
            <span className="eyebrow"><Sparkles size={16} /> AI Video Reel Maker × React Frontend Builder</span>
            <h1>AI 쇼릴을 만들고, 그 영상을 웹 경험으로 배포합니다.</h1>
            <p>
              생성형 AI로 브랜드 장면을 만들고 React 인터페이스로 보여줍니다. 영상 제작 감각과 프론트엔드 구조를 함께 갖춘 포트폴리오입니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">프로젝트 보기 <ChevronRight size={18} /></a>
              <a className="secondary-button" href="#contact">연락하기 <Mail size={18} /></a>
            </div>
            <div className="hero-proof">
              <div><strong>12+</strong><span><BadgeCheck size={16} /> AI 영상 버전 제작</span></div>
              <div><strong>98</strong><span><BadgeCheck size={16} /> Lighthouse 기준 점수</span></div>
              <div><strong>6단계</strong><span><BadgeCheck size={16} /> 영상-웹 제작 프로세스</span></div>
            </div>
          </div>
          <div className="hero-showreel reveal visible">
            <div className="mockup-toolbar">
              <span />
              <span />
              <span />
              <strong>Showreel.mp4</strong>
            </div>
            <div className="mockup-video">
              <video src={videoUrls.hero} autoPlay muted loop playsInline />
              <div className="video-overlay">
                <button className="hero-play" aria-label="Play showreel"><Play size={34} fill="currentColor" /></button>
                <div className="hero-video-copy">
                  <span>Featured Showreel</span>
                  <strong>AI Brand Film / React Launch Page</strong>
                </div>
                <div className="video-stats">
                  <span>4K Source</span>
                  <span>00:58</span>
                  <span>Loop Ready</span>
                </div>
              </div>
            </div>
            <div className="mockup-meta">
              <div>
                <span>Production</span>
                <strong>AI + Web</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>Responsive</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="about">
          <SectionIntro
            eyebrow="About"
            title="영상 감각과 개발 구조를 함께 다룹니다."
            desc="기획, AI 제작, UI 설계, React 구현까지 한 흐름으로 연결해 브랜드가 실제로 사용할 수 있는 결과물을 만듭니다."
          />
          <div className="role-grid">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <article className="role-card reveal" key={role.title}>
                  <div className="icon-box"><Icon size={24} /></div>
                  <h3>{role.title}</h3>
                  <p>{role.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell" id="projects">
          <SectionIntro
            eyebrow="Featured Projects"
            title="영상과 웹을 연결한 대표 작업"
            desc="AI 영상 제작부터 프론트엔드 인터랙션, 제품형 웹페이지까지 다양한 디지털 경험을 카드 단위로 정리했습니다."
          />
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
          </div>
        </section>

        <section className="section-shell ai-section" id="ai-video">
          <SectionIntro
            eyebrow="AI Video"
            title="생성형 AI 영상 제작 프로세스"
            desc="Runway, Midjourney, ChatGPT, After Effects를 활용해 아이디어를 영상 자산으로 만들고 웹 경험에 자연스럽게 적용합니다."
          />
          <div className="timeline reveal">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="video-sample-grid">
            {videoSamples.map((sample) => (
              <article className="video-sample-card reveal" key={sample.title}>
                <img src={sample.image} alt="" />
                <video src={sample.video} muted loop playsInline preload="metadata" />
                <div>
                  <span>{sample.type}</span>
                  <h3>{sample.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="skills">
          <SectionIntro
            eyebrow="Skills"
            title="기획부터 런칭까지 필요한 도구"
            desc="프론트엔드, AI 영상 제작, 디자인 툴을 목적에 맞게 조합해 빠르고 완성도 높은 제작 흐름을 만듭니다."
          />
          <div className="skills-layout">
            {skills.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section className="section-shell process-section">
          <SectionIntro
            eyebrow="Process"
            title="아이디어를 출시 가능한 경험으로 바꾸는 방식"
            desc="리서치와 콘셉트에서 시작해 프롬프트, 영상 제작, 프론트엔드 개발, 런칭까지 한 번에 이어지는 프로세스입니다."
          />
          <div className="process-grid">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="process-card reveal" key={step.title}>
                  <div className="process-icon"><Icon size={22} /></div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="showreel-band">
          <div className="section-shell showreel-section">
            <SectionIntro
              eyebrow="Representative Reel"
              title="대표 쇼릴로 먼저 보여주는 AI 영상 제작 역량"
              desc="브랜드 무드, 제품 장면, 웹 인터랙션으로 확장 가능한 영상 소스를 하나의 대표 쇼릴처럼 구성했습니다."
            />
            <div className="showreel-card reveal">
              <video src={videoUrls.showreel} autoPlay muted loop playsInline />
              <div className="showreel-overlay">
                <div className="play-badge"><Play size={34} fill="currentColor" /></div>
                <div>
                  <span>Representative Showreel 2026</span>
                  <h3>AI-generated scenes, brand motion, interactive web launch assets</h3>
                  <p>Runway, Midjourney, ChatGPT, After Effects, React UI를 연결한 포트폴리오 대표 영상입니다.</p>
                </div>
                <div className="showreel-meta">
                  <strong>00:58</strong>
                  <span>Hero Reel</span>
                </div>
              </div>
            </div>
            <p className="showreel-caption reveal">
              짧은 숏폼 광고, 브랜드 무드 필름, 제품 소개 영상을 웹 포트폴리오와 연결해 하나의 설득력 있는 경험으로 구성합니다.
            </p>
          </div>
        </section>

        <section className="section-shell testimonials-section">
          <SectionIntro
            eyebrow="Testimonials"
            title="함께 만든 사람들이 남긴 이야기"
            desc="AI 영상 제작과 프론트엔드 구현을 함께 다루는 협업 방식에 대한 피드백입니다."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card reveal" key={item.name}>
                <div className="stars" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                </div>
                <p>{item.text}</p>
                <div className="person">
                  <img src={item.image} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.job}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-layout">
            <div className="contact-copy reveal">
              <span className="eyebrow">Contact</span>
              <h2>AI 영상과 웹 기술이 만나는 프로젝트를 함께 만들어보세요.</h2>
              <p>브랜드 영상, 인터랙티브 랜딩페이지, React 포트폴리오, 제품 소개 페이지 제작을 함께 설계합니다.</p>
              <div className="social-links">
                <a href={`mailto:${email}`}><Mail size={18} /> {email}</a>
                <button type="button" onClick={handleCopyEmail}><Copy size={18} /> {copied ? "복사 완료" : "이메일 복사"}</button>
                <a href="https://github.com" target="_blank" rel="noreferrer"><Braces size={18} /> GitHub</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><Video size={18} /> YouTube</a>
                <a href="https://behance.net" target="_blank" rel="noreferrer"><Palette size={18} /> Behance</a>
              </div>
            </div>
            <form className="contact-form reveal">
              <label>
                이름
                <input type="text" placeholder="이름을 입력하세요" />
              </label>
              <label>
                이메일
                <input type="email" placeholder="name@email.com" />
              </label>
              <label>
                프로젝트
                <textarea rows="5" placeholder="제작하고 싶은 영상 또는 웹 프로젝트를 알려주세요" />
              </label>
              <button className="primary-button contact-submit" type="button">문의 보내기 <ArrowRight size={18} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>MIYOUNG</strong>
          <p>AI video, frontend development, interactive digital product.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© 2026 MIYOUNG Portfolio. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
