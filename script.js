document.querySelectorAll('a[href="#oferta"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#oferta')?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// CONTADOR DE 15 MINUTOS
let tempo = 15 * 60;

const timer = setInterval(() => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  document.getElementById('timer').textContent =
    `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

  if (tempo <= 0) {
    clearInterval(timer);
    document.getElementById('timer').textContent = '00:00';
    return;
  }

  tempo--;
});
