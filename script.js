document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('cta');
  const msg = document.getElementById('msg');
  btn.addEventListener('click', () => {
    msg.textContent = '¡Funciona! Este sitio está vivo.';
    msg.classList.remove('hidden');
  });
});