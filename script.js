const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const modal = document.querySelector(".video-modal");
const modalFrame = modal.querySelector("iframe");
const modalClose = document.querySelector(".modal-close");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  tr: {
    pageTitle: "Bulut Gürgeli | Sound Portfolio",
    metaDescription: "Bulut Gürgeli - ses mühendisi, ses teknisyeni ve boom operatörü portfolyosu.",
    brandAria: "Bulut Gürgeli ana sayfa",
    navAria: "Ana navigasyon",
    languageAria: "Dil seçimi",
    navWorks: "İşler",
    navWatch: "İzle",
    navCv: "CV",
    navContact: "İletişim",
    sinceMark: "since ® 2024",
    heroKicker: "Prodüksiyon sesi / boom / post",
    heroLead:
      "İstanbul merkezli ses mühendisi. Film, reklam, oyun ve podcast işlerinde temiz diyalog, kontrollü set kaydı, miksaj ve frame-perfect senkron.",
    heroCtaWorks: "İşleri Gör",
    heroCtaCv: "CV PDF",
    studioAlt: "Stüdyo ortamında ses prodüksiyon ekipmanı",
    focusLabel: "Mevcut odak",
    focusValue: "Film sesi, markalı içerik, podcast",
    locationLabel: "Lokasyon",
    locationValue: "İstanbul, Türkiye",
    toolsLabel: "Araçlar",
    servicesAria: "Servis alanları",
    profileKicker: "Profil",
    profileTitle: "Sette pratik, postta detaycı.",
    profileBody:
      "22 yaşında, ses mühendisliği alanında kendini geliştiren yaratıcı ve disiplinli bir ses profesyoneli. Mimar Sinan Güzel Sanatlar Üniversitesi'ndeki sanat odaklı eğitiminin ardından Bahçeşehir Üniversitesi Müzik Teknolojileri bölümünde eğitim gördü. Halen Galatasaray ITM'de tam zamanlı eğitimine devam ediyor.",
    setSoundTitle: "Set Sesi",
    setSoundBody: "Boom, shotgun, lavalier, saha kayıt, ekipman kurulumu ve set koordinasyonu.",
    postAudioTitle: "Post Ses",
    postAudioBody: "Diyalog temizliği, noise reduction, miksaj, senkron ve teslim hazırlığı.",
    worksKicker: "Seçili işler",
    worksTitle: "CV'deki işlerden modern portfolyo vitrini.",
    pubgType: "Oyun / Marka",
    docsLabel: "Doküman",
    docPreviewLabel: "Doküman / proje özeti",
    soundTechFreelance: "Ses Teknisyeni - Freelance / Proje Bazlı",
    pubgBody:
      "Profesyonel kayıt ekipmanı kurulumu, diyalog, oyun içi efekt ve atmosfer kayıtları; diyalog temizliği, miksaj ve görüntü-ses senkronizasyonu.",
    brandFilmType: "Marka Filmi",
    vodafoneBody:
      "Shotgun, lavalier ve field recorder ile diyalog, atmosfer, efekt, jingle senkronu, noise reduction ve dinamik miksaj süreçleri.",
    shortFilmType: "Kısa Film",
    imdbPreviewLabel: "IMDb / proje sayfası",
    boomOperator: "Boom Operatörü",
    defneBody: "Shotgun, boom pole ve lavalier ile diyalog ve atmosfer kayıtları.",
    playButton: "Oynat",
    previewLabel: "Sessiz otomatik önizleme",
    playlistLabel: "Playlist",
    openYoutube: "YouTube'da aç",
    soundTech: "Ses Teknisyeni",
    mantraBody: "Mikrofon pozisyonlama, gain staging ve dengeli konuşma kaydı.",
    pinarBody: "Stüdyo ve saha ortamlarında yayın standardına uygun konuşma kaydı.",
    toyotaBody: "Kamera önü anlatımda diyalog kaydı, senkron ve yayın kalitesi kontrolü.",
    seriesType: "Dizi",
    soundTechBoom: "Ses Teknisyeni / Boom Operatörü",
    deliBody: "Set ortamında boom operasyonu, ekipman kurulumu ve diyalog kaydı.",
    featureType: "Sinema Filmi",
    boomSoundTech: "Boom Operatörü / Ses Teknisyeni",
    kulyasBody: "Set sesi operasyonu, boom kullanımı, ekipman ve ortam sesi kayıt süreci.",
    watchKicker: "İzle / aç",
    watchTitle: "CV linklerinden çıkan tüm video bağlantıları proje bazlı playlistlerde.",
    pubgPlaylistTitle: "Instagram Reels + YouTube videoları",
    vodafonePlaylistTitle: "Instagram Reels + YouTube videoları",
    otherPlaylistTitle: "CV'deki diğer video bağlantıları",
    mantraPlaylist: "Mantra Oynatma Listesi",
    pinarPlaylist: "Pınar Sabancı Oynatma Listesi",
    toyotaVideo: "Toyota Videosu",
    deliVideo: "Deli Zekalılar Videosu",
    cvTitle: "Eğitim ve teknik alanlar",
    educationTitle: "Eğitim",
    msgsuBody: "Klasik Gitar / Müzik Bölümü - Lise Diploması",
    bauBody: "Ses ve Müzik Teknolojileri - Lisans (Terk)",
    itmYears: "2024 - Devam Ediyor",
    itmBody: "Ses ve Müzik Teknolojileri - Eğitim Programı",
    skillsTitle: "Yetkinlikler",
    skill1: "Stüdyo ve canlı kayıt süreçleri",
    skill2: "Shotgun, lavalier ve saha mikrofonlama",
    skill3: "Ses sinyal akışı ve ekipman yönetimi",
    skill4: "Miksaj, düzenleme ve diyalog temizleme",
    skill5: "Akustik, ses tasarımı ve elektronik müzik teorisi",
    skill6: "Sahne kurulumu ve teknik koordinasyon",
    skill8: "Ekip içi iletişim ve saha koordinasyonu",
    openCv: "PDF CV'yi Aç",
    contactKicker: "İletişim",
    contactTitle: "Yeni proje ve set işleri için ulaşın.",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    backTop: "Yukarı dön",
    videoAria: "Video oynatıcı",
    closeVideoAria: "Videoyu kapat",
    videoTitle: "Portfolyo videosu",
    mediaPlaylistLabel: "Video / Reels playlist",
  },
  en: {
    pageTitle: "Bulut Gürgeli | Sound Portfolio",
    metaDescription: "Bulut Gürgeli - sound engineer, sound technician, and boom operator portfolio.",
    brandAria: "Bulut Gürgeli home",
    navAria: "Main navigation",
    languageAria: "Language selection",
    navWorks: "Works",
    navWatch: "Watch",
    navCv: "CV",
    navContact: "Contact",
    sinceMark: "since ® 2024",
    heroKicker: "Production sound / boom / post",
    heroLead:
      "Istanbul-based sound engineer working across film, advertising, games, and podcasts with clean dialogue, controlled location sound, mixing, and frame-perfect sync.",
    heroCtaWorks: "View Works",
    heroCtaCv: "CV PDF",
    studioAlt: "Audio production equipment in a studio environment",
    focusLabel: "Current focus",
    focusValue: "Film sound, branded content, podcasts",
    locationLabel: "Location",
    locationValue: "Istanbul, Turkey",
    toolsLabel: "Tools",
    servicesAria: "Service areas",
    profileKicker: "Profile",
    profileTitle: "Fast on set, detailed in post.",
    profileBody:
      "A 22-year-old creative and disciplined sound professional developing his craft in sound engineering. After an arts-focused education at Mimar Sinan Fine Arts University, he studied Music Technologies at Bahçeşehir University. He currently continues full-time training at Galatasaray ITM.",
    setSoundTitle: "Set Sound",
    setSoundBody: "Boom, shotgun, lavalier, field recording, equipment setup, and set coordination.",
    postAudioTitle: "Post Audio",
    postAudioBody: "Dialogue cleanup, noise reduction, mixing, sync, and delivery preparation.",
    worksKicker: "Selected works",
    worksTitle: "A modern portfolio showcase built from CV credits.",
    pubgType: "Game / Brand",
    docsLabel: "Docs",
    docPreviewLabel: "Document / project brief",
    soundTechFreelance: "Sound Technician - Freelance / Project-Based",
    pubgBody:
      "Professional recording equipment setup, dialogue, in-game effects and ambience recording; dialogue cleanup, mixing, and audio-picture synchronization.",
    brandFilmType: "Brand Film",
    vodafoneBody:
      "Dialogue, ambience, effects, jingle sync, noise reduction, and dynamic mixing using shotgun, lavalier, and field recorder workflows.",
    shortFilmType: "Short Film",
    imdbPreviewLabel: "IMDb / project page",
    boomOperator: "Boom Operator",
    defneBody: "Dialogue and ambience recording with shotgun, boom pole, and lavalier equipment.",
    playButton: "Play",
    previewLabel: "Muted autoplay preview",
    playlistLabel: "Playlist",
    openYoutube: "Open on YouTube",
    soundTech: "Sound Technician",
    mantraBody: "Microphone positioning, gain staging, and balanced speech recording.",
    pinarBody: "Broadcast-standard speech recording across studio and field environments.",
    toyotaBody: "Dialogue recording, sync, and release-quality control for camera-facing content.",
    seriesType: "Series",
    soundTechBoom: "Sound Technician / Boom Operator",
    deliBody: "Boom operation, equipment setup, and dialogue recording on set.",
    featureType: "Feature Film",
    boomSoundTech: "Boom Operator / Sound Technician",
    kulyasBody: "Production sound operation, boom handling, equipment setup, and ambience recording.",
    watchKicker: "Watch / open",
    watchTitle: "All video links from the CV organized into project-based playlists.",
    pubgPlaylistTitle: "Instagram Reels + YouTube videos",
    vodafonePlaylistTitle: "Instagram Reels + YouTube videos",
    otherPlaylistTitle: "Other video links from the CV",
    mantraPlaylist: "Mantra Playlist",
    pinarPlaylist: "Pınar Sabancı Playlist",
    toyotaVideo: "Toyota Video",
    deliVideo: "Deli Zekalılar Video",
    cvTitle: "Education and technical fields",
    educationTitle: "Education",
    msgsuBody: "Classical Guitar / Music Department - High School Diploma",
    bauBody: "Sound and Music Technologies - Undergraduate (Left)",
    itmYears: "2024 - Present",
    itmBody: "Sound and Music Technologies - Training Program",
    skillsTitle: "Skills",
    skill1: "Studio and live recording workflows",
    skill2: "Shotgun, lavalier, and field microphone techniques",
    skill3: "Audio signal flow and equipment management",
    skill4: "Mixing, editing, and dialogue cleanup",
    skill5: "Acoustics, sound design, and electronic music theory",
    skill6: "Stage setup and technical coordination",
    skill8: "Team communication and field coordination",
    openCv: "Open PDF CV",
    contactKicker: "Contact",
    contactTitle: "Reach out for new projects and set work.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    backTop: "Back to top",
    videoAria: "Video player",
    closeVideoAria: "Close video",
    videoTitle: "Portfolio video",
    mediaPlaylistLabel: "Video / Reels playlist",
  },
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.tr;

  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute.trim(), dictionary[key]);
      }
    });
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("preferredLanguage", lang);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

function openVideo(url) {
  modalFrame.src = `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => openVideo(button.dataset.video));
});

modalClose.addEventListener("click", closeVideo);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeVideo();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeVideo();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

/* ========================================================================
   NEW FEATURES — Scroll Reveal, Custom Cursor, Card Tilt, Marquee,
                  Hero Wave, Parallax, YouTube Lazy Loading
   ======================================================================== */

/* --- 1. Scroll Reveal (IntersectionObserver) --- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* --- 2. Custom Cursor (non-touch only) --- */
if (!('ontouchstart' in window)) {
  document.body.classList.add('custom-cursor');
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    // Smooth ring follow
    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = document.querySelectorAll('a, button, iframe, .work-card, .video-tile');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('is-hovering');
        cursorRing.classList.add('is-hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('is-hovering');
        cursorRing.classList.remove('is-hovering');
      });
    });
  }
}

/* --- 3. Card Tilt Effect --- */
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--mouse-x', x + 'px');
    card.style.setProperty('--mouse-y', y + 'px');
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* --- 4. Service Rail Marquee Setup --- */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  const content = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML = content + content;
}

/* --- 5. Hero Wave SVG Generation --- */
const heroWave = document.getElementById('hero-wave');
if (heroWave) {
  const barCount = 60;
  const svgNS = 'http://www.w3.org/2000/svg';
  const viewWidth = 1200;
  const barWidth = 6;
  const gap = viewWidth / barCount;

  for (let i = 0; i < barCount; i++) {
    const rect = document.createElementNS(svgNS, 'rect');
    const height = 20 + Math.random() * 50;
    rect.setAttribute('x', i * gap);
    rect.setAttribute('y', 80 - height);
    rect.setAttribute('width', barWidth);
    rect.setAttribute('height', height);
    rect.setAttribute('rx', 3);
    rect.style.animationDelay = (Math.random() * 2) + 's';
    heroWave.appendChild(rect);
  }
}

/* --- 6. Parallax Effect --- */
const heroMain = document.querySelector('.hero-main');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      if (heroMain && scrolled < window.innerHeight) {
        heroMain.style.backgroundPositionY = (scrolled * 0.4) + 'px';
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* --- 7. YouTube Lazy Loading --- */
const lazyFrames = document.querySelectorAll('.video-grid iframe, .card-video-grid iframe');
const frameObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      if (iframe.dataset.lazySrc) {
        iframe.src = iframe.dataset.lazySrc;
        iframe.removeAttribute('data-lazy-src');
      }
      frameObserver.unobserve(iframe);
    }
  });
}, { rootMargin: '200px' });

// On load, swap src to data-lazy-src for offscreen iframes
lazyFrames.forEach(iframe => {
  const rect = iframe.getBoundingClientRect();
  if (rect.top > window.innerHeight + 200) {
    iframe.dataset.lazySrc = iframe.src;
    iframe.src = '';
    frameObserver.observe(iframe);
  }
});

/* --- Apply saved language preference (must be last) --- */
applyLanguage(localStorage.getItem("preferredLanguage") || "tr");
