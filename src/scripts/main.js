document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]')

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

  for (let i = 0; i< questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
  }

  function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
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
