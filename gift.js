function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const notif = document.getElementById("copyNotif");
    notif.classList.remove("hidden");
    setTimeout(() => notif.classList.add("hidden"), 2000);
  });
}
// tombol X kembali ke halaman depan
btnBack.addEventListener('click', function () {
  window.location.href = '../index.html#gift';
});