const headline = document.querySelector('.headline');

// click to change text in headline
headline.addEventListener('click', () => {
    headline.textContent = 'Have a Good Time!';
})

// click button to add more content boxes
const button = document.querySelector('button');
const divHide = document.querySelector('.hide');

button.addEventListener('click', () => {
    divHide.style.display = 'flex';
})