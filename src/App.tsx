import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav') && !target.closest('.menu-toggle')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const content = {
    title: 'hisasann',
    greeting: 'こんにちは！hisasann です。ソフトウェアエンジニアであり、組織開発に取り組み、本屋「玉葱堂🧅」を営んでいます。',
    intro: 'エンジニアリング組織のVPoEとして、チームの可能性を最大化することに取り組んできました。1on1を通じた組織開発、マネジメントの本質、そして個人と組織の成長について、実践的な知見を積み重ねてきました。',
    experience: 'VPoEとして、エンジニアリング組織の強化とマネジメント文化の構築に取り組んできました。現在は1on1コンサルティングを通じて、組織の可能性を最大化し、メンバー一人ひとりの成長を支援しています。',
    philosophy: '組織開発と人材開発の本質を見極め、実践的なアプローチで組織変革を支援します。東洋哲学や西洋思想から得た知見を、現代の組織開発に活かしています。',
    findMe: 'Find me on',
    greetingEn: "Hey! I'm hisasann, a software engineer working on organizational development, and bookstore owner of 玉葱堂🧅.",
    introEn: 'As VPoE of engineering organizations, I worked on maximizing team potential. Through 1on1 consulting, I support organizational development, management essentials, and individual and organizational growth with practical insights.',
    experienceEn: 'As VPoE, I worked on strengthening engineering organizations and building management culture. Currently, through 1on1 consulting, I maximize organizational potential and support each member\'s growth.',
    philosophyEn: 'I identify the essence of organizational and human development, supporting organizational transformation with practical approaches. I apply insights from Eastern philosophy and Western thought to modern organizational development.',
    findMeEn: 'Find me on',
  };

  const navLinks = [
    { name: 'note', url: 'https://note.com/hisasann' },
    { name: '1on1 Consulting', url: '/1on1_consulting_proposal' },
    { name: 'GitHub', url: 'https://github.com/hisasann' },
    { name: 'X', url: 'https://x.com/hisasann' },
    { name: 'Instagram', url: 'https://www.instagram.com/hisasann' },
  ];

  const getIcon = (name: string) => {
    const icons: Record<string, string> = {
      'GitHub': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
      'X': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
      'Instagram': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
      'note': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      'Zenn': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 88.3 88.3" fill="currentColor"><path d="M3.9 83.3h17.2c.9 0 1.7-.5 2.2-1.2L69.9 5.2c.6-1-.1-2.2-1.3-2.2H52.1c-.8 0-1.5.4-1.9 1.1L3.1 81.9c-.3.6-.1 1.4.5 1.7.2.1.4.2.3.2zm56.8 0h17.2c.9 0 1.6-.5 1.9-1.2L87.1 50c.4-.9-.1-1.9-1.1-1.9H70.1c-.8 0-1.5.5-1.8 1.2l-9.2 20.8c-.3.7-.1 1.5.5 1.9.3.2.5.2.9.2z"/></svg>',
      'YouTube': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
      'YouTube Game': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
      'Diary': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
    };
    return icons[name] || '';
  };

  const links = [
    { name: 'GitHub', url: 'https://github.com/hisasann' },
    { name: 'X', url: 'https://x.com/hisasann' },
    { name: 'Instagram', url: 'https://www.instagram.com/hisasann' },
    { name: 'note', url: 'https://note.com/hisasann' },
    { name: 'Zenn', url: 'https://zenn.dev/hisasann' },
    { name: 'YouTube', url: 'https://www.youtube.com/@djlemon-sourtech6770' },
    { name: 'YouTube Game', url: 'https://www.youtube.com/@djlemon-sour-game' },
    { name: 'Diary', url: 'https://hisasann.notion.site/4b3ac4a874724e20ab7d5b87edd9af22?v=f783121b5c074b72bff893c7cda511da&pvs=74' },
  ];

  return (
    <div className="app">
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            hisasann.dev
          </a>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-toggle-icon"></span>
            <span className="menu-toggle-icon"></span>
            <span className="menu-toggle-icon"></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle color scheme"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="title-section">
            <img src="/profile.png" alt="hisasann" className="profile-image-small" />
            <h1 className="title">{content.title}</h1>
          </div>
          <article className="content">
            <p>{content.greeting}</p>
            <p>{content.intro}</p>
            <p>
              {content.experience}
            </p>
            <p>
              {content.philosophy}
            </p>
            <p>
              <a href="/1on1_consulting_proposal" className="link">
                1on1コンサルティング
              </a>
              について詳しくは{' '}
              <a href="/1on1_consulting_proposal" className="link">
                こちら
              </a>
              をご覧ください。
            </p>

            <hr className="separator" />

            <p>{content.greetingEn}</p>
            <p>{content.introEn}</p>
            <p>
              {content.experienceEn}
            </p>
            <p>
              {content.philosophyEn}
            </p>
            <p>
              Learn more about{' '}
              <a href="/1on1_consulting_proposal" className="link">
                1on1 Consulting
              </a>
              {' '}
              <a href="/1on1_consulting_proposal" className="link">
                here
              </a>
              .
            </p>

            <hr className="separator" />

            <p>{content.findMe}</p>
            <p>
              {links.map((link, index) => (
                <span key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <span className="link-icon" dangerouslySetInnerHTML={{ __html: getIcon(link.name) }} />
                    {link.name}
                  </a>
                  {index < links.length - 1 && ' '}
                </span>
              ))}
            </p>
          </article>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} hisasann
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

