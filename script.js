const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

// Atualiza o progresso conforme as metas são marcadas.
const checkboxes = [...document.querySelectorAll('.check input')];
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

function updateProgress() {
  const completed = checkboxes.filter(item => item.checked).length;
  const percentage = Math.round((completed / checkboxes.length) * 100);
  progressText.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
}
checkboxes.forEach(item => item.addEventListener('change', updateProgress));

// Frases inspiradoras para refletir sobre o futuro.
const phrases = [
  '“O primeiro passo para realizar um sonho é acreditar que ele é possível.”',
  '“O futuro depende do que fazemos no presente.”',
  '“Grandes conquistas são feitas de pequenos passos.”',
  '“Persistência transforma planos em realizações.”'
];
let phraseIndex = 0;
document.getElementById('phraseButton').addEventListener('click', () => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  document.getElementById('phrase').textContent = phrases[phraseIndex];
});
