// =========================================================
// Scroll-reveal
// =========================================================
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(function (el, index) {
  el.style.transitionDelay = Math.min(index * 30, 220) + "ms";
  observer.observe(el);
});

// Tiny parallax on the hero glow.
var orb = document.querySelector(".orb");
window.addEventListener("mousemove", function (e) {
  if (!orb) return;
  var x = (e.clientX / window.innerWidth - 0.5) * 16;
  var y = (e.clientY / window.innerHeight - 0.5) * 10;
  orb.style.transform = "translate(calc(-50% + " + x + "px), calc(-50% + " + y + "px))";
});

// Smooth-scroll for every in-page anchor (nav "Download" -> #download,
// hero CTAs, etc.) with an offset so the fixed nav never covers the target.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var id = link.getAttribute("href");
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var navHeight = 96;
    var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: top, behavior: "smooth" });
    history.pushState(null, "", id);
  });
});

// =========================================================
// EN / ID language switch — pure JS, no page reload
// =========================================================
var translations = {
  en: {
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.doc": "Docs",
    "nav.requirements": "Requirements",
    "nav.download": "Download",
    "hero.eyebrow": "100$ Free · Untill I Change My Mind",
    "hero.title": 'Turn long videos into <span>short-form content.</span>',
    "hero.copy": "Paste a YouTube link. Let AI find the moments worth clipping. Generate landscape and 9:16 videos with subtitles — without paying for an AI API.",
    "hero.cta_primary": "Download MT-CLIP ↓",
    "hero.cta_secondary": "Explore features ↓",
    "hero.release_note": "100% FREE — until I change my mind.",
    "mockup.dashboard": "Dashboard",
    "mockup.new": "NEW CLIP",
    "mockup.current": "Current project",
    "mockup.finding": "AI is finding the best moments...",
    "mockup.output": "Output",
    "mockup.stat1": "clips generated",
    "mockup.stat2": "portrait ready",
    "mockup.stat3": "local processing",
    "features.title": 'Less timeline. <span>More content.</span>',
    "features.copy": "MT-CLIP is built around one simple idea: you shouldn't have to watch an entire video twice just to find five moments worth posting.",
    "feature.1.chip": "AI CLIPPING", "feature.1.title": "Find the good parts.", "feature.1.desc": "AI analyzes the video's context and looks for moments with hooks, payoff, emotion, humor, insight, or strong standalone value.",
    "feature.2.chip": "SHORT-FORM", "feature.2.title": "One video, multiple formats.", "feature.2.desc": "Create landscape clips and vertical 9:16 versions designed for Shorts, TikTok, and Reels.",
    "feature.3.chip": "LOCAL AI", "feature.3.title": "Your machine. Your model.", "feature.3.desc": "Run AI locally with Ollama. No subscription is required just to analyze your videos.",
    "feature.4.chip": "SUBTITLES", "feature.4.title": "Make every word pop.", "feature.4.desc": "Generate animated subtitles and customize their appearance so your clips feel ready for short-form platforms.",
    "feature.5.chip": "VIRALENHANCE", "feature.5.title": "Add trend context.", "feature.5.desc": "Optionally enrich AI analysis with trend signals from YouTube, Google Trends, Reddit, and TikTok.",
    "feature.6.chip": "FREE", "feature.6.title": "No AI API bill.", "feature.6.desc": "Use local AI with Ollama and keep the core workflow free. API-powered trend features are optional.",
    "how.title": 'From YouTube link to <span>ready-to-post clips.</span>',
    "how.copy": "The workflow is intentionally simple. Paste, configure if you want, and let MT-CLIP do the repetitive work.",
    "step.1.b": "PASTE", "step.1.d": "Drop your YouTube URL into the dashboard.",
    "step.2.b": "UNDERSTAND", "step.2.d": "MT-CLIP processes the video's content for AI analysis.",
    "step.3.b": "SELECT", "step.3.d": "AI identifies moments that can stand on their own.",
    "step.4.b": "EDIT", "step.4.d": "Generate clips, subtitles, and portrait versions.",
    "step.5.b": "GALLERY", "step.5.d": "Find your finished clips in one place.",
    "req.title": 'Runs on modest hardware. <span>Runs faster on good hardware.</span>',
    "req.copy": "A dedicated GPU is not mandatory. More RAM and GPU acceleration simply make local AI and heavier video workloads more comfortable.",
    "req.min.title": "Minimum", "req.rec.title": "Recommended",
    "req.os": "OS", "req.cpu": "CPU", "req.cores": "Cores", "req.ram": "RAM", "req.gpu": "GPU",
    "req.optional": "Optional", "req.storage": "Storage", "req.ssd_rec": "SSD recommended",
    "req.accel": "Acceleration", "req.vulkan": "Vulkan capable",
    "viral.kicker": "Optional · ViralEnhance",
    "viral.title": 'Give the AI <span>more context.</span>',
    "viral.copy": "When you want to go beyond the video itself, ViralEnhance can provide additional trend signals to help the AI understand what's relevant right now.",
    "viral.quote": '"What if the AI could ask: <span>is this topic actually worth clipping?</span>"',
    "viral.link": "View source on GitHub ↗",
    "dl.kicker": "Ready when you are",
    "dl.title": 'Stop scrubbing.<br><span>Start clipping.</span>',
    "dl.copy": "Download the latest MT-CLIP release and turn your next long video into short-form content — free, and local.",
    "dl.primary": "Download for Windows ↗",
    "dl.secondary": "View source on GitHub ↗",
    "dl.meta": "Windows 10 / 11 · No installer tricks · No AI API key required to get started.",
    "coffee.title": "Enjoying MT-CLIP?",
    "coffee.copy": "If it saved you an afternoon of scrubbing timelines, you can buy me a coffee to keep it maintained and free.",
    "coffee.button": "Buy me a coffee",
    "footer.tagline": "AI Auto Clip From YouTube — 100% FREE (Until I Change My Mind)",
    "footer.coffee": "Buy me a coffee ↗"
  },
  id: {
    "nav.features": "Fitur",
    "nav.how": "Cara kerja",
    "nav.doc": "Doks",
    "nav.requirements": "Spesifikasi",
    "nav.download": "Download",
    "hero.eyebrow": "100% Gratis · setidaknya sampai saya berubah pikiran",
    "hero.title": 'Ubah video panjang jadi <span>konten short-form.</span>',
    "hero.copy": "Tempel link YouTube. Biarkan AI mencari momen yang layak diklip. Hasilkan video landscape dan 9:16 lengkap dengan subtitle — tanpa perlu bayar API AI.",
    "hero.cta_primary": "Download MT-CLIP ↓",
    "hero.cta_secondary": "Lihat fitur ↓",
    "hero.release_note": "100% GRATIS — sampai saya berubah pikiran.",
    "mockup.dashboard": "Dashboard",
    "mockup.new": "CLIP BARU",
    "mockup.current": "Proyek saat ini",
    "mockup.finding": "AI sedang mencari momen terbaik...",
    "mockup.output": "Hasil",
    "mockup.stat1": "klip dibuat",
    "mockup.stat2": "versi portrait siap",
    "mockup.stat3": "proses lokal",
    "features.title": 'Lebih sedikit timeline. <span>Lebih banyak konten.</span>',
    "features.copy": "MT-CLIP dibangun dari satu ide sederhana: kamu tidak perlu menonton ulang seluruh video hanya untuk menemukan lima momen yang layak diunggah.",
    "feature.1.chip": "AI CLIPPING", "feature.1.title": "Temukan bagian terbaiknya.", "feature.1.desc": "AI menganalisis konteks video dan mencari momen dengan hook, payoff, emosi, humor, insight, atau nilai yang kuat berdiri sendiri.",
    "feature.2.chip": "SHORT-FORM", "feature.2.title": "Satu video, banyak format.", "feature.2.desc": "Buat klip landscape dan versi vertikal 9:16 yang dirancang untuk Shorts, TikTok, dan Reels.",
    "feature.3.chip": "AI LOKAL", "feature.3.title": "Mesinmu. Modelmu.", "feature.3.desc": "Jalankan AI secara lokal dengan Ollama. Tidak perlu berlangganan hanya untuk menganalisis video.",
    "feature.4.chip": "SUBTITLE", "feature.4.title": "Buat setiap kata menonjol.", "feature.4.desc": "Hasilkan subtitle animasi dan sesuaikan tampilannya agar klip terasa siap untuk platform short-form.",
    "feature.5.chip": "VIRALENHANCE", "feature.5.title": "Tambahkan konteks tren.", "feature.5.desc": "Perkaya analisis AI secara opsional dengan sinyal tren dari YouTube, Google Trends, Reddit, dan TikTok.",
    "feature.6.chip": "GRATIS", "feature.6.title": "Tanpa biaya API AI.", "feature.6.desc": "Gunakan AI lokal dengan Ollama dan jaga alur kerja inti tetap gratis. Fitur tren berbasis API bersifat opsional.",
    "how.title": 'Dari link YouTube jadi <span>klip siap unggah.</span>',
    "how.copy": "Alur kerjanya sengaja dibuat sederhana. Tempel, atur jika perlu, lalu biarkan MT-CLIP mengerjakan bagian yang berulang.",
    "step.1.b": "TEMPEL", "step.1.d": "Masukkan URL YouTube ke dashboard.",
    "step.2.b": "PAHAMI", "step.2.d": "MT-CLIP memproses isi video untuk dianalisis AI.",
    "step.3.b": "PILIH", "step.3.d": "AI mengidentifikasi momen yang bisa berdiri sendiri.",
    "step.4.b": "EDIT", "step.4.d": "Hasilkan klip, subtitle, dan versi portrait.",
    "step.5.b": "GALERI", "step.5.d": "Temukan klip yang sudah jadi di satu tempat.",
    "req.title": 'Jalan di perangkat sederhana. <span>Lebih cepat di perangkat mumpuni.</span>',
    "req.copy": "GPU khusus tidak wajib. RAM lebih besar dan akselerasi GPU hanya membuat AI lokal dan proses video berat terasa lebih nyaman.",
    "req.min.title": "Minimum", "req.rec.title": "Direkomendasikan",
    "req.os": "OS", "req.cpu": "CPU", "req.cores": "Core", "req.ram": "RAM", "req.gpu": "GPU",
    "req.optional": "Opsional", "req.storage": "Penyimpanan", "req.ssd_rec": "SSD disarankan",
    "req.accel": "Akselerasi", "req.vulkan": "Mendukung Vulkan",
    "viral.kicker": "Opsional · ViralEnhance",
    "viral.title": 'Beri AI <span>konteks lebih.</span>',
    "viral.copy": "Kalau ingin lebih dari sekadar isi video, ViralEnhance bisa memberi sinyal tren tambahan agar AI paham apa yang relevan saat ini.",
    "viral.quote": '"Bagaimana kalau AI bisa bertanya: <span>apakah topik ini benar-benar layak diklip?</span>"',
    "viral.link": "Lihat source di GitHub ↗",
    "dl.kicker": "Siap kapan pun kamu siap",
    "dl.title": 'Berhenti scrubbing.<br><span>Mulai nge-clip.</span>',
    "dl.copy": "Download rilis terbaru MT-CLIP dan ubah video panjangmu berikutnya jadi konten short-form — gratis, dan lokal.",
    "dl.primary": "Download untuk Windows ↗",
    "dl.secondary": "Lihat source di GitHub ↗",
    "dl.meta": "Windows 10 / 11 · Tanpa trik instalasi · Tidak butuh API key AI untuk mulai.",
    "coffee.title": "Suka pakai MT-CLIP?",
    "coffee.copy": "Kalau ini menghemat waktumu dari scrubbing timeline berjam-jam, traktir saya kopi biar tetap dirawat dan gratis.",
    "coffee.button": "Traktir kopi",
    "footer.tagline": "AI Auto Clip Dari YouTube — 100% GRATIS (Sampai Saya Berubah Pikiran)",
    "footer.coffee": "Traktir kopi ↗"
  }
};

function applyLanguage(lang) {
  if (!translations[lang]) return;
  var dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("mtclip-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

(function initLanguage() {
  var saved = null;
  try { saved = localStorage.getItem("mtclip-lang"); } catch (e) {}
  if (saved && translations[saved]) applyLanguage(saved);
})();

// Language toggle: two parallel content blocks (.lang-en / .lang-id)
// are swapped by visibility — safer for long-form docs content than
// key/value innerHTML swaps.
function applyLanguage(lang) {
  var showId = lang === "id";
  document.querySelectorAll(".lang-en").forEach(function (el) { el.hidden = showId; });
  document.querySelectorAll(".lang-id").forEach(function (el) { el.hidden = !showId; });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("mtclip-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

(function initLanguage() {
  var saved = null;
  try { saved = localStorage.getItem("mtclip-lang"); } catch (e) {}
  if (saved === "id") applyLanguage("id");
})();

// Smooth-scroll with offset for the fixed nav.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    var id = link.getAttribute("href");
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top: top, behavior: "smooth" });
    history.pushState(null, "", id);
  });
});