/*
<<<<<<< HEAD
  V2 — 2 meses + 400 km
  Personalização principal:
  dataInicio = data em que vocês começaram a namorar.
*/
const CONFIG = {
  dataInicio: "2026-07-17T00:00:00",
  dataDoisMeses: "2026-09-17T00:00:00",
  titulo: "2 meses de nós ❤️"
=======
  =========================
  PERSONALIZE AQUI
  =========================
  Troque os valores abaixo e salve.
*/
const CONFIG = {
  nomeDela: "Meu amor",
  nomeDele: "Seu amor",

  // IMPORTANTE: coloque a data real de vocês.
  // Exemplo: "2024-06-15T20:30:00"
  dataInicio: "2026-07-17T00:00:00",

  // Se quiser usar uma frase na aba do navegador:
  titulo: "Para você, meu amor ❤️"
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
};

document.title = CONFIG.titulo;

<<<<<<< HEAD
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const opening = $("#opening");
const envelope = $("#envelope");
const site = $("#site");
=======
const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const site = document.getElementById("site");
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6

function openSite() {
  if (opening.classList.contains("is-opening")) return;
  opening.classList.add("is-opening");
  envelope.classList.add("open");
<<<<<<< HEAD

=======
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
  setTimeout(() => {
    opening.classList.add("closed");
    site.classList.remove("hidden");
    document.body.classList.remove("locked");
<<<<<<< HEAD
    window.scrollTo({ top: 0, behavior: "instant" });
    burstHearts(22);
  }, 900);
}

envelope.addEventListener("click", openSite);
envelope.addEventListener("keydown", (e) => {
=======
    window.scrollTo({top:0, behavior:"instant"});
    burstHearts(18);
  }, 850);
}

envelope.addEventListener("click", openSite);
envelope.addEventListener("keydown", e => {
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openSite();
  }
});
<<<<<<< HEAD
$("#openHint")?.addEventListener("click", openSite);

// Parallax delicado no envelope.
if (window.matchMedia("(pointer:fine)").matches) {
  const scene = $(".envelope-scene");
  scene?.addEventListener("mousemove", (e) => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    envelope.style.transform = `translate(${x * 9}px, ${y * 7}px) rotate(${x * 1.5}deg)`;
  });
  scene?.addEventListener("mouseleave", () => envelope.style.transform = "");
}

// Scroll buttons.
$$("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Contador preciso em tempo real.
function updateCounter() {
  const start = new Date(CONFIG.dataInicio);
  const now = new Date();

  if (Number.isNaN(start.getTime())) return;
=======

document.getElementById("openHint")?.addEventListener("click", openSite);

// Movimento delicado da carta no desktop.
if (window.matchMedia("(pointer:fine)").matches) {
  const scene = document.querySelector(".envelope-scene");
  const card = document.getElementById("envelope");
  scene?.addEventListener("mousemove", (e) => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `translate(${x * 9}px, ${y * 7}px) rotate(${x * 1.5}deg)`;
  });
  scene?.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
}

document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  });
});

// Contador em tempo real.
function updateCounter() {
  const start = new Date(CONFIG.dataInicio);
  const now = new Date();
  if (isNaN(start.getTime())) return;
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }
<<<<<<< HEAD

=======
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
  if (months < 0) {
    years--;
    months += 12;
  }

<<<<<<< HEAD
  const elapsed = Math.max(0, now - start);
  const totalMinutes = Math.floor(elapsed / 60000);
  const hours = Math.floor(totalMinutes / 60) % 24;
  const minutes = totalMinutes % 60;

  const totalMonths = Math.max(0, years * 12 + months);
  $("#months").textContent = totalMonths;
  $("#days").textContent = Math.max(0, days);
  $("#hours").textContent = hours;
  $("#minutes").textContent = minutes;

  const milestone = new Date(CONFIG.dataDoisMeses);
  if (now >= milestone) {
    $("#milestoneTitle").textContent = "2 meses de nós ❤️";
    $("#milestoneText").textContent = "Chegamos ao nosso primeiro grande marco. E eu ainda quero muitos outros.";
  } else {
    const remaining = milestone - now;
    const daysLeft = Math.ceil(remaining / 86400000);
    $("#milestoneTitle").textContent = "Rumo aos 2 meses";
    $("#milestoneText").textContent = `Faltam ${daysLeft} dia${daysLeft === 1 ? "" : "s"} para o nosso próximo marco.`;
  }
}
updateCounter();
setInterval(updateCounter, 30000);

// Corações.
function createHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = Math.random() > 0.5 ? "♥" : "♡";
=======
  const elapsedHours = Math.floor((now - start) / 3600000);
  const hours = elapsedHours % 24;

  document.getElementById("years").textContent = Math.max(0, years);
  document.getElementById("months").textContent = Math.max(0, months);
  document.getElementById("days").textContent = Math.max(0, days);
  document.getElementById("hours").textContent = Math.max(0, hours);
}
updateCounter();
setInterval(updateCounter, 1000 * 60);

// Corações flutuando.
function createHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = Math.random() > .5 ? "♥" : "♡";
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
  h.style.left = Math.random() * 100 + "vw";
  h.style.bottom = "-30px";
  h.style.fontSize = (10 + Math.random() * 18) + "px";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";
<<<<<<< HEAD
  $("#hearts").appendChild(h);
  setTimeout(() => h.remove(), 8500);
}
setInterval(createHeart, 1900);

function burstHearts(amount = 12) {
  for (let i = 0; i < amount; i++) setTimeout(createHeart, i * 75);
}

// Música.
const audio = $("#musica");
const playBtn = $("#playBtn");
const progress = $("#progress");
const musicStatus = $("#musicStatus");
const musicTime = $("#musicTime");
const musicWave = $(".music-wave");
let musicReady = false;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

audio?.addEventListener("loadedmetadata", () => {
  musicReady = true;
  musicStatus.textContent = "Girassóis de Van Gogh • The Ralph & Freittas";
  musicTime.textContent = "0:00";
});

audio?.addEventListener("error", () => {
  musicReady = false;
  musicStatus.innerHTML = 'Adicione <b>audio/girassois-de-van-gogh.mp3</b> ao projeto para tocar aqui.';
});

playBtn?.addEventListener("click", async () => {
  if (!audio) return;

  if (!musicReady) {
    musicStatus.innerHTML = 'Falta o MP3: <b>audio/girassois-de-van-gogh.mp3</b>';
    return;
  }

  if (audio.paused) {
    try {
      audio.volume = 0.45;
      await audio.play();
    } catch {
      musicStatus.textContent = "Toque novamente para iniciar a música.";
    }
  } else {
    audio.pause();
  }
});

audio?.addEventListener("play", () => {
  playBtn.textContent = "❚❚";
  musicWave.classList.add("playing");
  musicStatus.textContent = "Tocando agora • Girassóis de Van Gogh";
});

audio?.addEventListener("pause", () => {
  playBtn.textContent = "▶";
  musicWave.classList.remove("playing");
});

audio?.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progress.value = (audio.currentTime / audio.duration) * 100;
  musicTime.textContent = formatTime(audio.currentTime);
});

progress?.addEventListener("input", () => {
  if (!audio?.duration) return;
  audio.currentTime = (progress.value / 100) * audio.duration;
});

$("#musicTop")?.addEventListener("click", () => {
  $("#musica")?.closest(".music-section")?.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => playBtn?.focus(), 600);
});

// Galeria / lightbox.
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxClose = $("#lightboxClose");

$$("[data-lightbox]").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.lightbox;
    lightbox.classList.remove("hidden");
    document.body.classList.add("locked");
  });
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.classList.remove("locked");
  lightboxImage.src = "";
}
lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.classList.contains("hidden")) closeLightbox();
});

// Surpresa final.
$("#surpriseBtn")?.addEventListener("click", function () {
  $("#surprise").classList.remove("hidden");
  this.style.display = "none";
  burstHearts(34);
  $("#surprise").scrollIntoView({ behavior: "smooth", block: "center" });
=======
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 8500);
}
setInterval(createHeart, 1800);

function burstHearts(amount = 12) {
  for (let i = 0; i < amount; i++) setTimeout(createHeart, i * 80);
}

// Botão da surpresa final.
document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("surprise").classList.remove("hidden");
  this.style.display = "none";
  burstHearts(28);
  document.getElementById("surprise").scrollIntoView({behavior:"smooth", block:"center"});
>>>>>>> 7c0788c0e5bce298e18fca8181b9ec4bbd61f3a6
});
