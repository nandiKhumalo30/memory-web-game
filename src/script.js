const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function rotateCard() {
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this; 
    
        if(firstCard.dataset.images === secondCard.dataset.images ){
            firstCard.removeEventListener('click', rotateCard);
            secondCard.removeEventListener('click', rotateCard); 
        } else {
            setTimeout(() =>{
             firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');   
            },500)
                   
        }  
    }
}

(function shuffle() {
    cards.forEach(card => {
        let reshuffleCards = Math.floor(Math.random() * 12);
        card.style.order = reshuffleCards;
    });
})();

cards.forEach(card => card.addEventListener('click', rotateCard))

module.exports = {rotateCard, shuffle}
