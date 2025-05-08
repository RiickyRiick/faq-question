
function toggleAnswer(btn) {
    const answer = btn.nextElementSibling;

    answer.classList.toggle('show');

    const icon = btn.querySelector('.toggle-icon');

    if (answer.classList.contains('show')) {
        icon.src = './assets/images/icon-minus.svg';
    } else {
        icon.src = './assets/images/icon-plus.svg';
    }
}

document.addEventListener('click', (event) => {
    const faqItems = document.querySelectorAll('.faq-item');
    if (![...faqItems].some(item => item.contains(event.target))) {
      document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.classList.remove('show');
      });
      // Reset all icons
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.src = './assets/images/icon-plus.svg';
      });
    }
  });
