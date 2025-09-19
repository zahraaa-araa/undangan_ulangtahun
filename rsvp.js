// Ambil elemen
const form = document.getElementById('rsvpForm');
const notifSuccess = document.getElementById('notifSuccess'); // kalau punya notif bawaan
const listUcapan = document.getElementById('listUcapan');
const thankYou = document.getElementById('thankYou');
const btnBack = document.getElementById('btnBack');
const btnUpdate = document.querySelector('.btn-update'); // tombol update my confirmation

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil nilai input
  const nama = document.getElementById('nama').value;
  const grup = document.getElementById('grup').value;
  const kehadiran = document.getElementById('kehadiran').value;
  const jumlahTamu = document.getElementById('jumlahTamu').value;
  const ucapan = document.getElementById('ucapan').value;

  // Waktu sekarang
  const now = new Date();
  const waktu =
    now.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }) +
    ' at ' +
    now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

  // Buat initial huruf
  const initial = nama.charAt(0).toUpperCase() + nama.charAt(1);

  // Tambahkan card ucapan
  const card = document.createElement('div');
  card.classList.add('ucapan-card');
  card.innerHTML = `
    <div class="ucapan-initial">${initial}</div>
    <div class="ucapan-content">
      <div class="nama">${nama} <span class="status">${kehadiran}</span></div>
      <div class="teks">${ucapan}</div>
      <div class="waktu">${waktu}</div>
    </div>
  `;
  listUcapan.prepend(card);

  // reset form
  form.reset();

  // === Notifikasi Sukses lewat JS langsung ===
  const notif = document.createElement('div');
  notif.textContent = '✅ Sukses! Data berhasil dikirim';
  notif.style.position = 'fixed';
  notif.style.top = '20px';
  notif.style.left = '50%';
  notif.style.transform = 'translateX(-50%)';
  notif.style.background = '#4CAF50';
  notif.style.color = '#fff';
  notif.style.padding = '10px 20px';
  notif.style.borderRadius = '6px';
  notif.style.fontWeight = 'bold';
  notif.style.zIndex = '9999';
  document.body.appendChild(notif);

  // hilangkan notif setelah 1 detik
  setTimeout(() => {
    notif.remove();
  }, 1000);

  // setelah 1 detik sembunyikan form → tampilkan halaman thank you
  setTimeout(() => {
    if (notifSuccess) notifSuccess.classList.add('hidden'); // kalau ada notif bawaan
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
  }, 1000);
});

// tombol X kembali ke halaman depan
btnBack.addEventListener('click', function () {
  window.location.href = '../index.html#rsvp';
});

// tombol Update My Confirmation kembali ke form RSVP
btnUpdate.addEventListener('click', function () {
  thankYou.classList.add('hidden'); // sembunyikan halaman Thank You
  form.classList.remove('hidden'); // tampilkan form lagi
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
