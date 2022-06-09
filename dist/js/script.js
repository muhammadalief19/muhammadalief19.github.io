// navbar fixed
window.onscroll = function () {
  const anjas = document.querySelector('#head');
  const fixedNav = anjas.offsetTop;

  if (window.pageYOffset > fixedNav) {
    anjas.classList.add('navbar-fixed');
  } else {
    anjas.classList.remove('navbar-fixed');
  }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// contact form script
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHF4OSl7P6DxuUZEOalOSKh33fUqezXHLWRov9It8NXpL_xpjOAw4yGSm7idP-iGqs/exec';
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('#buttonKirim');
const btnLoad = document.querySelector('#buttonLoad');
const myAlert = document.querySelector('#alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoad.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoad.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // tampilkan alert
      myAlert.classList.toggle('hidden');
      // reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
