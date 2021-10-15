document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'kote1',
            img: 'images/k1.png'
        },
        {
            name: 'kote1',
            img: 'images/k1.png'
        },
        {
            name: 'kote2',
            img: 'images/k2.png'
        },
        {
            name: 'kote2',
            img: 'images/k2.png'
        },
        {
            name: 'kote3',
            img: 'images/k3.png'
        },
        {
            name: 'kote3',
            img: 'images/k3.png'
        },
        {
            name: 'kote4',
            img: 'images/k4.png'
        },
        {
            name: 'kote4',
            img: 'images/k4.png'
        },
        {
            name: 'kote5',
            img: 'images/k5.png'
        },
        {
            name: 'kote5',
            img: 'images/k5.png'
        },
        {
            name: 'kote6',
            img: 'images/k6.png'
        },
        {
            name: 'kote6',
            img: 'images/k6.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDiplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var scores = 1;
    const alert = document.querySelector('.alert');
    alert.style.display = 'none';

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    //createBoard();

    function alertPokaz(message) {
        alert.style.display = '';
        alert.innerHTML = `<h4 class="h">${message}</h4>`;
        setTimeout(() => {
            alert.style.display = 'none';
        }, 500);
    }

    //проверка на совпадения
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alertPokaz('You found a match!');
            //cards[optionOneId].setAttribute('src', 'images/white.png');
            //cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
            resultDiplay.textContent = scores + 1;
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alertPokaz('Sorry, try again...');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDiplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDiplay.textContent = ' Congratulations! You found them all!';
        }
    }

    //переворот карты
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
    
});