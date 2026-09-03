/*
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
};

document.title = CONFIG.titulo;

const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const site = document.getElementById("site");

function openSite() {
  if (opening.classList.contains("is-opening")) return;
  opening.classList.add("is-opening");
  envelope.classList.add("open");
  setTimeout(() => {
    opening.classList.add("closed");
    site.classList.remove("hidden");
    document.body.classList.remove("locked");
    window.scrollTo({top:0, behavior:"instant"});
    burstHearts(18);
  }, 850);
}

envelope.addEventListener("click", openSite);
envelope.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openSite();
  }
});

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

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

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
  h.style.left = Math.random() * 100 + "vw";
  h.style.bottom = "-30px";
  h.style.fontSize = (10 + Math.random() * 18) + "px";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";
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
});
