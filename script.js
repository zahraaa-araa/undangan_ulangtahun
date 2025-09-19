// =======================
// Ambil elemen audio & tombol kontrol
// =======================
const audio = document.getElementById('audioUndangan');
const btnAudio = document.getElementById('btnAudioControl');

// =======================
// Fungsi Buka Undangan
// =======================
function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("undangan").classList.remove("hidden");
  window.scrollTo(0, 0);

  // Tambah animasi masuk ke semua section
  document.querySelectorAll('#acara, #maps, #rsvp, #gift, #thanks')
    .forEach(el => el.classList.add('masuk'));

  // Mulai musik dari awal
  audio.currentTime = 0;
  audio.play().then(() => {
    btnAudio.innerHTML = '&#10074;&#10074;'; // ikon pause
    btnAudio.setAttribute('aria-label', 'Pause Musik');
  }).catch(err => {
    console.log("Autoplay dicegah browser:", err);
  });
}

// =======================
// Fungsi Scroll ke Section
// =======================
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// =======================
// Kontrol Musik (Play / Pause)
// =======================
btnAudio.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(e => console.log(e));
    btnAudio.innerHTML = '&#10074;&#10074;'; // ikon pause
    btnAudio.setAttribute('aria-label', 'Pause Musik');
  } else {
    audio.pause();
    btnAudio.innerHTML = '&#9658;'; // ikon play
    btnAudio.setAttribute('aria-label', 'Play Musik');
  }
});

// =======================
// Countdown Timer
// =======================
const targetDate = new Date("September 28, 2025 11:00:00").getTime();

const countdownFunc = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownFunc);
    document.querySelector(".countdown").innerHTML = "Acara sudah dimulai 🎉";
  }
}, 1000);

// =======================
// Observer Animasi Scroll
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate-on-scroll").forEach(el => {
  observer.observe(el);
});