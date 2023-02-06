const sertArray = [
  {
    name: 'Сертификат Kyocera-Mita',
    img: './assets/images/sertificates/Kyocera-Mita.jpg',
  },
  {
    name: 'Сертификат Microsoft Vista',
    img: './assets/images/sertificates/Microsoft_Vista.jpg',
  },
  {
    name: 'Сертификат Trassir',
    img: './assets/images/sertificates/Trassir.jpg',
  },
  {
    name: 'Сертификат AMP Act-I',
    img: './assets/images/sertificates/AMP_I.jpg',
  },
  {
    name: 'Сертификат AMP Act-II',
    img: './assets/images/sertificates/AMP_II.jpg',
  },
  {
    name: 'Сертификат AMP Act-III',
    img: './assets/images/sertificates/AMP_III.jpg',
  },
  {
    name: 'Сертификат Монтаж СКС Nicomax',
    img: './assets/images/sertificates/Nicomax_montage.jpg',
  },
  {
    name: 'Сертификат Базовое проектирование СКС Nicomax',
    img: './assets/images/sertificates/Nicomax_project.jpg',
  },
  {
    name: 'Сертификат Расширенное проектирование СКС Nicomax',
    img: './assets/images/sertificates/Nicomax_project_ext.jpg',
  },
  {
    name: 'Сертификат Основы проектирования СО и СОУЭ LPA',
    img: './assets/images/sertificates/LPA.jpg',
  },
  {
    name: 'Сертификат HTML Academy Профессиональная вёрстка сайтов',
    img: './assets/images/sertificates/HTMLAcademy.jpg',
  },
  {
    name: 'Сертификат RSSchool JavaScript/Frontend',
    img: './assets/images/sertificates/RSSchool_frontend.jpg',
  },
  {
    name: 'Сертификат RSSchool React',
    img: './assets/images/sertificates/RSSchool_react.jpg',
  },
];

const MODAL = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__button');
const blackout = document.querySelector('.blackout');
const buttons = document.querySelectorAll('.intro__item_button');

function createModal(index) {
  const modal = document.createElement('div');
  modal.classList.add('modal__container');
  modal.innerHTML = ` <div class='modal__content'>
  <h3 class='modal__title'>${sertArray[index].name}</h3>
  <img class='modal__image' src=${sertArray[index].img} alt=${sertArray[index].name}>
  </div>`;
  document.querySelector('.modal').appendChild(modal);
}

buttons.forEach((item) => {
  item.addEventListener('click', (el) => {
    const idxItem = el.target.id;
    createModal(idxItem);
    MODAL.classList.add('modal_active');
    document.body.classList.add('lock');
    blackout.classList.add('blackout_active');
  });
});

closeModal.addEventListener('click', () => {
  document.body.classList.remove('lock');
  MODAL.classList.remove('modal_active');
  document.querySelector('.modal__container').remove();
  blackout.classList.remove('blackout_active');
});

blackout.addEventListener('click', (event) => {
  event.stopPropagation();
  document.body.classList.remove('lock');
  MODAL.classList.remove('modal_active');
  document.querySelector('.modal__container').remove();
  blackout.classList.remove('blackout_active');
});

blackout.addEventListener('mouseover', () => {
  closeModal.classList.add('modal__button-hover');
});

blackout.addEventListener('mouseout', () => {
  closeModal.classList.remove('modal__button-hover');
});
