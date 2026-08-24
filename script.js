document.querySelectorAll('a[href="#oferta"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#oferta')?.scrollIntoView({behavior:'smooth'});
  });
});
