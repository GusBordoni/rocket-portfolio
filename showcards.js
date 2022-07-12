const card3v = document.getElementById('card3');
const card4v = document.getElementById('card4');
const projectView = document.getElementById('toggle-all-projects');

projectView.addEventListener('click', () => {
    card3v.classList.toggle('change');
    card4v.classList.toggle('change');
    console.log('teste');
});