(function () {
  'use strict';

  const STORAGE_KEY = 'cybersec.lang';
  const DEFAULT_LANG = 'mn';

  const translations = {
    mn: {
      'skip': 'Үндсэн хэсэг рүү шилжих',

      'brand.name': 'CyberSec Институт',
      'brand.tag': 'Дижитал иргэний дэд бүтэц',

      'nav.about': 'Бидний тухай',
      'nav.focus': 'Үйл ажиллагаа',
      'nav.pal': 'PAL',
      'nav.leadership': 'Удирдлага',
      'nav.contact': 'Холбоо барих',

      'hero.eyebrow': 'Монголын төрийн бус байгууллага · 2026',
      'hero.title': 'CyberSec Хөгжил, Манлайллын Институт',
      'hero.tagline': 'Дижитал иргэний дэд бүтэц, ил тод байдлын төлөө',
      'hero.lede': 'Ил тод байдал, олон нийтийн хариуцлага, кибер аюулгүй байдлын чиглэлээр ажилладаг Монголын ашгийн бус байгууллага.',
      'hero.cta': 'Дэлгэрэнгүй танилцах',

      'about.eyebrow': 'Бидний тухай',
      'about.heading': 'Институтын танилцуулга',
      'about.p1': 'CyberSec Хөгжил, Манлайллын Институт нь 2026 онд үүсгэн байгуулагдсан Монголын ашгийн бус байгууллага юм. Бид ил тод байдал, олон нийтийн хариуцлага, кибер аюулгүй байдлын чиглэлээр судалгаа, мэдлэг түгээх ажил эрхэлдэг.',

      'focus.eyebrow': 'Үйл ажиллагааны чиглэл',
      'focus.heading': 'Эрхэм зорилго ба гол чиглэлүүд',
      'focus.c1.title': 'Олон нийтийн хариуцлага',
      'focus.c1.body': 'Олон нийтэд өгсөн амлалтуудыг архивлах, баримтжуулах судалгаа.',
      'focus.c2.title': 'Дижитал иргэний хэрэгсэл',
      'focus.c2.body': 'Монгол хэлний орчинд зориулсан ил тод байдлын нээлттэй эхийн хэрэгслүүд.',
      'focus.c3.title': 'Кибер аюулгүй байдал',
      'focus.c3.body': 'Иргэний нийгмийн дижитал аюулгүй байдлын мэдлэг түгээх ажил.',

      'pal.eyebrow': 'Судалгааны чиглэл',
      'pal.heading': 'Public Accountability Ledger',
      'pal.lede': 'Олон нийтэд өгсөн амлалт, мэдэгдлийг баримтжуулан архивлах судалгааны чиглэлийн ажил. Энэхүү чиглэлээр өгөгдөл цуглуулах, шалгах, хадгалах арга зүйг боловсруулж байна.',

      'lead.eyebrow': 'Удирдлага',
      'lead.heading': 'Удирдлага',
      'lead.bm.name': 'С. Баярмагнай',
      'lead.bm.role': 'Захирал',
      'lead.bm.bio': 'Infosec Intelligence ХХК‐ийн гүйцэтгэх захирал. Мэдээллийн аюулгүй байдлын чиглэлээр 10+ жилийн туршлагатай.',

      'part.eyebrow': 'Түншлэл',
      'part.heading': 'Хамтрагч байгууллагууд',
      'part.tech': 'Техникийн хэрэгжүүлэгч түнш: <strong>Infosec Intelligence ХХК</strong>.',

      'contact.eyebrow': 'Холбоо барих',
      'contact.heading': 'Бидэнтэй холбогдох',
      'contact.body': 'Хамтын ажиллагаа, түншлэлийн талаар имэйлээр холбогдоно уу.',
      'contact.email': 'Имэйл',
      'contact.location': 'Байршил',
      'contact.city': 'Улаанбаатар, Монгол улс',

      'footer.copy': '© 2026 CyberSec Хөгжил, Манлайллын Институт ТББ',
      'footer.reg': 'Улсын бүртгэлийн ерөнхий газарт бүртгэл хийгдэж байна.'
    },

    en: {
      'skip': 'Skip to main content',

      'brand.name': 'CyberSec Institute',
      'brand.tag': 'Digital civic infrastructure',

      'nav.about': 'About',
      'nav.focus': 'Focus areas',
      'nav.pal': 'PAL',
      'nav.leadership': 'Leadership',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Mongolian non-profit · 2026',
      'hero.title': 'CyberSec Development Leadership Institute',
      'hero.tagline': 'Building digital civic infrastructure for transparency and accountability',
      'hero.lede': 'A Mongolian non-profit working on transparency, public accountability, and cybersecurity.',
      'hero.cta': 'Learn more',

      'about.eyebrow': 'About',
      'about.heading': 'About the Institute',
      'about.p1': 'The CyberSec Development Leadership Institute is a Mongolian non-profit established in 2026. Our work focuses on transparency, public accountability, and cybersecurity through research and knowledge-sharing.',

      'focus.eyebrow': 'Focus areas',
      'focus.heading': 'Mission and focus areas',
      'focus.c1.title': 'Public Accountability',
      'focus.c1.body': 'Research on archiving and documenting public commitments.',
      'focus.c2.title': 'Digital Civic Tooling',
      'focus.c2.body': 'Open-source transparency tools designed for the Mongolian-language context.',
      'focus.c3.title': 'Cybersecurity',
      'focus.c3.body': 'Digital security awareness work for civil society.',

      'pal.eyebrow': 'Research focus',
      'pal.heading': 'Public Accountability Ledger',
      'pal.lede': 'A research focus on documenting and archiving public commitments and statements. We are developing methods for collecting, verifying, and preserving such records.',

      'lead.eyebrow': 'Leadership',
      'lead.heading': 'Leadership',
      'lead.bm.name': 'S. Bayarmagnai',
      'lead.bm.role': 'Director',
      'lead.bm.bio': 'CEO of Infosec Intelligence LLC. 10+ years of experience in information security.',

      'part.eyebrow': 'Partnerships',
      'part.heading': 'Partner organizations',
      'part.tech': 'Technical implementation partner: <strong>Infosec Intelligence LLC</strong>.',

      'contact.eyebrow': 'Contact',
      'contact.heading': 'Get in touch',
      'contact.body': 'For collaboration or partnership inquiries, please reach out via email.',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.city': 'Ulaanbaatar, Mongolia',

      'footer.copy': '© 2026 CyberSec Development Leadership Institute NGO',
      'footer.reg': 'Registration in progress with the General Authority for State Registration of Mongolia.'
    }
  };

  const META_TITLE = {
    mn: 'CyberSec Институт — Дижитал иргэний дэд бүтэц',
    en: 'CyberSec Institute — Digital civic infrastructure'
  };

  function getStoredLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'mn' || saved === 'en') return saved;
    } catch (e) { /* localStorage may be unavailable */ }
    return null;
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;
    if (META_TITLE[lang]) document.title = META_TITLE[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function initLanguage() {
    const stored = getStoredLang();
    const initial = stored || DEFAULT_LANG;
    applyLanguage(initial);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        if (!lang || !translations[lang]) return;
        setStoredLang(lang);
        applyLanguage(lang);
      });
    });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const targets = document.querySelectorAll('.section, .hero, .card, .person');
    targets.forEach(function (el) { el.classList.add('reveal'); });

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initLanguage();
      initReveal();
    });
  } else {
    initLanguage();
    initReveal();
  }
})();
