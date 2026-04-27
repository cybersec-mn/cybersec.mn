(function () {
  'use strict';

  const STORAGE_KEY = 'cybersec.lang';
  const DEFAULT_LANG = 'mn';

  const translations = {
    mn: {
      'skip': 'Үндсэн хэсэг рүү шилжих',

      'brand.name': 'CyberSec Хүрээлэн',
      'brand.tag': 'CYBER · CIVIC · ИЛ ТОД',

      'nav.about': 'Бидний тухай',
      'nav.focus': 'Үйл ажиллагаа',
      'nav.programs': 'Хөтөлбөр',
      'nav.registry': 'Бүртгэл',
      'nav.contact': 'Холбоо барих',

      'hero.eyebrow': 'Монголын төрийн бус байгууллага · 2024',
      'hero.title': 'Кибер аюулгүй байдлын хөгжлийн манлайлал хүрээлэн',
      'hero.tagline': 'Үндэсний онцлогт тохирсон, олон улсад жишиг болохуйц кибер аюулгүй байдлын тогтолцоо',
      'hero.lede': 'Бид кибер аюулгүй байдал, дижитал иргэний дэд бүтэц, ил тод байдал, иргэдийн мэдлэг түгээх чиглэлээр судалгаа, сургалт, төсөл хөтөлбөр хэрэгжүүлдэг Монголын ашгийн бус байгууллага.',
      'hero.cta': 'Дэлгэрэнгүй',
      'hero.cta2': 'Хөтөлбөрүүд',

      'marquee.1': 'Кибер аюулгүй байдал',
      'marquee.2': 'Дижитал иргэн',
      'marquee.3': 'Ил тод байдал',
      'marquee.4': 'Судалгаа',
      'marquee.5': 'Сургалт',
      'marquee.6': 'Бодлого',

      'about.eyebrow': 'Бидний тухай',
      'about.heading': 'Институтын танилцуулга',
      'about.p1': '"Кибер аюулгүй байдлын хөгжлийн манлайлал хүрээлэн" нь 2024 онд Монгол улсын хуулийн этгээдийн улсын бүртгэлд бүртгэгдсэн ашгийн бус, нийгэмд үйлчлэх төрийн бус байгууллага юм.',
      'about.p2': 'Манай хүрээлэнгийн эрхэм зорилго: Монгол улсын кибер аюулгүй байдлын тогтолцоо нь олон улсад жишиг болсон, нийгэм, эдийн засгийн дэвшлийн хөгжлийн хурдасгуур болсон, иргэдийн ирээдүйг бүтээлцэхэд хувь нэмрээ оруулахад чиглэсэн идэвхи санаачлагатай үйл ажиллагаа явуулна.',

      'focus.eyebrow': 'Үйл ажиллагааны чиглэл',
      'focus.heading': 'Бид юу хийдэг вэ',
      'focus.c1.title': 'Бодлогын судалгаа',
      'focus.c1.body': 'Кибер аюулгүй байдлын тогтолцоо, дижитал бодлогын чиглэлээр шинжилгээ, судалгаа хийнэ.',
      'focus.c2.title': 'Технологи, инноваци',
      'focus.c2.body': 'Дижитал иргэний хэрэгсэл, нээлттэй эх шийдэл, инновацын төслүүдийг дэмжих.',
      'focus.c3.title': 'Зөвлөхийн үйлчилгээ',
      'focus.c3.body': 'Байгууллага, төрийн болон төрийн бус байгууллагуудад мэргэжлийн зөвлөгөө өгнө.',
      'focus.c4.title': 'Сургалт, гэрчилгээ',
      'focus.c4.body': 'Кибер аюулгүй байдлын мэргэжилтэн бэлтгэх, олон улсад хүлээн зөвшөөрөгдөх сертификатын сургалт явуулах.',
      'focus.c5.title': 'Олон улсын туршлага',
      'focus.c5.body': 'Олон улсын сайн туршлагыг судалж, Монгол улсын онцлогт нийцүүлэн нэвтрүүлнэ.',
      'focus.c6.title': 'Нөлөөлөл, мэдээлэл',
      'focus.c6.body': 'Иргэдийн дижитал аюулгүй байдлын мэдлэгийг түгээх, олон нийтийг мэдэлжүүлэх.',

      'prog.eyebrow': 'Хөтөлбөрүүд',
      'prog.heading': 'Хэрэгжүүлсэн ба бэлтгэж буй хөтөлбөр',
      'prog.p0.num': 'PROG-01 · ИДЭВХТЭЙ',
      'prog.p0.title': 'Кибер аюул заналын тандалт, шинжилгээний систем',
      'prog.p0.body': 'Кибер аюулгүй байдлын судалгаа (12 KPI dashboard), аюул заналын шинжилгээ (STIX/TAXII, IOC, CVE feed), нийгмийн тандалт (sentiment analysis) хослуулсан цогц платформ. ISO/IEC 27001:2022, NIST SP 800-53, OWASP стандартад нийцүүлэн хөгжүүлж байна.',
      'prog.p1.title': 'Сурагчдад зориулсан кибер бүүткэмп',
      'prog.p1.body': '"Дижитал эрин үеийн аюулгүй байдлын баталгаа" сэдэвт долоо хоногийн эрчимжүүлсэн хөтөлбөр. Дунд, ахлах ангийн сурагчдад кибер аюулгүй байдлын суурь мэдлэг олгоно.',
      'prog.p2.title': 'CC мэргэжилтэн бэлтгэх',
      'prog.p2.body': 'Олон улсад хүлээн зөвшөөрөгдөх Certified in Cybersecurity (CC) гэрчилгээт сургалт. Монгол улсын кибер аюулгүй байдлын зах зээлд шинэ мэргэжилтэн бэлтгэх.',
      'prog.p3.title': 'Хувь хүний мэдээллийн хамгаалалт',
      'prog.p3.body': 'Цахим орчинд иргэдийн өөрийн болон гэр бүлийн мэдээллийн аюулгүй байдлыг хангах мэдлэг түгээх боловсролын төсөл.',
      'prog.p4.title': 'Public Accountability Ledger',
      'prog.p4.body': 'Олон нийтэд өгсөн амлалтуудыг баримтжуулан архивлах судалгааны чиглэлийн ажил. Өгөгдөл цуглуулах, шалгах, хадгалах арга зүйг боловсруулж байна.',

      'reg.eyebrow': 'Албан ёсны бүртгэл',
      'reg.heading': 'Хуулийн этгээдийн мэдээлэл',
      'reg.intro': 'Хүрээлэн нь Монгол Улсын Хууль зүйн яамны Улсын бүртгэлийн ерөнхий газарт албан ёсоор бүртгэгдсэн ашгийн бус, нийгэмд үйлчлэх төрийн бус байгууллага юм.',
      'reg.d1': 'Албан нэр',
      'reg.d1v': 'Кибер аюулгүй байдлын хөгжлийн манлайлал хүрээлэн НҮТББ',
      'reg.d2': 'Бүртгэгдсэн',
      'reg.d3': 'Гэрчилгээ',
      'reg.d4': 'Улсын бүртгэл',
      'reg.d5': 'Регистр',
      'reg.d6': 'Үйл ажиллагааны код',

      'lead.eyebrow': 'Үүсгэн байгуулагч',
      'lead.heading': 'Үүсгэн байгуулагч',
      'lead.bm.name': 'С. Баярмагнай',
      'lead.bm.role': 'Үүсгэн байгуулагч',
      'lead.bm.bio': 'Infosec Intelligence ХХК‐ийн гүйцэтгэх захирал. Мэдээллийн аюулгүй байдлын чиглэлээр 10+ жилийн туршлагатай.',

      'part.eyebrow': 'Түншлэл',
      'part.heading': 'Хамтрагч байгууллагууд',
      'part.tech': 'Техникийн хэрэгжүүлэгч түнш: <strong>Infosec Intelligence ХХК</strong>.',

      'contact.eyebrow': 'Холбоо барих',
      'contact.heading': 'Бидэнтэй холбогдох',
      'contact.body': 'Хамтын ажиллагаа, түншлэл, төсөл санал, судалгааны хүсэлтийн талаар имэйлээр холбогдоно уу.',
      'contact.email': 'Имэйл',
      'contact.location': 'Байршил',
      'contact.city': 'Улаанбаатар, Монгол улс',

      'footer.copy': '© 2024 Кибер аюулгүй байдлын хөгжлийн манлайлал хүрээлэн НҮТББ',
      'footer.reg': '9071109519 · 7012777 · 000298232'
    },

    en: {
      'skip': 'Skip to main content',

      'brand.name': 'CyberSec Institute',
      'brand.tag': 'CYBER · CIVIC · TRANSPARENCY',

      'nav.about': 'About',
      'nav.focus': 'Focus',
      'nav.programs': 'Programs',
      'nav.registry': 'Registry',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Mongolian non-profit · Established 2024',
      'hero.title': 'Cyber Security Development Leadership Institute',
      'hero.tagline': 'A cybersecurity ecosystem fitted to the Mongolian context, aligned with international standards',
      'hero.lede': 'A Mongolian non-profit conducting research, training, and projects across cybersecurity, digital civic infrastructure, transparency, and citizen awareness.',
      'hero.cta': 'Learn more',
      'hero.cta2': 'Programs',

      'marquee.1': 'Cybersecurity',
      'marquee.2': 'Digital Civic Tech',
      'marquee.3': 'Transparency',
      'marquee.4': 'Research',
      'marquee.5': 'Training',
      'marquee.6': 'Policy',

      'about.eyebrow': 'About',
      'about.heading': 'About the Institute',
      'about.p1': 'The Cyber Security Development Leadership Institute is a Mongolian non-profit, public-benefit NGO registered with the General Authority for State Registration of Mongolia in 2024.',
      'about.p2': 'Our mission: to actively contribute to the development of a cybersecurity ecosystem in Mongolia that meets international standards, accelerates social and economic progress, and helps shape the future for citizens.',

      'focus.eyebrow': 'Focus areas',
      'focus.heading': 'What we do',
      'focus.c1.title': 'Policy Research',
      'focus.c1.body': 'Analytical and policy research on cybersecurity systems and digital governance.',
      'focus.c2.title': 'Technology & Innovation',
      'focus.c2.body': 'Support for digital civic tools, open-source solutions, and innovation projects.',
      'focus.c3.title': 'Advisory Services',
      'focus.c3.body': 'Professional advisory for public, private, and civil-society organizations.',
      'focus.c4.title': 'Training & Certification',
      'focus.c4.body': 'Training programs to develop cybersecurity professionals, including internationally recognized certifications.',
      'focus.c5.title': 'International Practice',
      'focus.c5.body': 'Studying international best practices and adapting them to the Mongolian context.',
      'focus.c6.title': 'Awareness & Outreach',
      'focus.c6.body': 'Disseminating digital safety knowledge and raising public awareness.',

      'prog.eyebrow': 'Programs',
      'prog.heading': 'Programs delivered and in preparation',
      'prog.p0.num': 'PROG-01 · ACTIVE',
      'prog.p0.title': 'Cyber Threat Intelligence & Monitoring System',
      'prog.p0.body': 'An integrated platform combining cybersecurity research (12-KPI dashboard), threat intelligence (STIX/TAXII, IOC, CVE feeds), and social monitoring (sentiment analysis). Built to ISO/IEC 27001:2022, NIST SP 800-53, and OWASP standards.',
      'prog.p1.title': 'Student Cybersecurity Bootcamp',
      'prog.p1.body': 'A week-long intensive program — "Digital-era Safety Foundations" — equipping middle and high school students with core cybersecurity knowledge.',
      'prog.p2.title': 'Certified in Cybersecurity (CC)',
      'prog.p2.body': 'Internationally recognized Certified in Cybersecurity (CC) training. Building Mongolia\'s pipeline of qualified cybersecurity professionals.',
      'prog.p3.title': 'Personal Data Protection',
      'prog.p3.body': 'Public-education program helping citizens protect their personal and family data in the digital environment.',
      'prog.p4.title': 'Public Accountability Ledger',
      'prog.p4.body': 'Research focus on documenting and archiving public commitments. Developing methods for collection, verification, and preservation.',

      'reg.eyebrow': 'Official registration',
      'reg.heading': 'Legal entity information',
      'reg.intro': 'The Institute is officially registered as a non-profit, public-benefit NGO with the General Authority for State Registration of Mongolia.',
      'reg.d1': 'Official name',
      'reg.d1v': 'Cyber Security Development Leadership Institute (NGO)',
      'reg.d2': 'Registered',
      'reg.d3': 'Certificate',
      'reg.d4': 'State legal entity',
      'reg.d5': 'Registration ID',
      'reg.d6': 'Activity code',

      'lead.eyebrow': 'Founder',
      'lead.heading': 'Founder',
      'lead.bm.name': 'S. Bayarmagnai',
      'lead.bm.role': 'Founder',
      'lead.bm.bio': 'CEO of Infosec Intelligence LLC. 10+ years of experience in information security.',

      'part.eyebrow': 'Partnerships',
      'part.heading': 'Partner organizations',
      'part.tech': 'Technical implementation partner: <strong>Infosec Intelligence LLC</strong>.',

      'contact.eyebrow': 'Contact',
      'contact.heading': 'Get in touch',
      'contact.body': 'For collaboration, partnership, project proposals, or research inquiries, please reach out via email.',
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.city': 'Ulaanbaatar, Mongolia',

      'footer.copy': '© 2024 Cyber Security Development Leadership Institute NGO',
      'footer.reg': '9071109519 · 7012777 · 000298232'
    }
  };

  const META_TITLE = {
    mn: 'Кибер аюулгүй байдлын хөгжлийн манлайлал хүрээлэн',
    en: 'Cyber Security Development Leadership Institute'
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

    const targets = document.querySelectorAll('.section, .hero, .card, .person, .data-row');
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
