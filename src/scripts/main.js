document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    }else {
      exibeElementoDoHeader();
    }
  })

//seção de atrações, abas interativas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      const abaAlvo = event.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      removeTabs(); // Agora a função é chamada antes de 'escondeAbas()'
      escondeAbas();
      aba.classList.add('shows__list--is-active');
      event.target.classList.add('shows__tabs__button--is-active');
    });
  }

  //Seção Faq, accordion
  for (let i = 0; i< questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }

  function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
  }

  function ocultaElementosDoHeader () {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden');
  }
  function  exibeElementoDoHeader () {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden');
  }

  function removeTabs() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('shows__tabs__button--is-active');
    }
  }

  function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
      tabsContainer[i].classList.remove('shows__list--is-active');
    }
  }
});
