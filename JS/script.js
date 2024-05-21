const gridContainer = document.querySelector('section.container')
const playButton = document.querySelector('button.play')

// ? <article class="cell"></article>

playButton.addEventListener('click', function(){
    Game()
});   

function Game() {
    document.querySelector('section.container').innerHTML = "";
    
    let score = 0;
    let record = 0;
    let bombs_array = [];
    let gameOver = false;
    
    
    for (let index = 0; index < 100; index++) { 
        const cellElement = document.createElement('article');
        cellElement.classList.add('cell')
        cellElement.append(index + 1)
        cellElement.addEventListener('click', function(){
            if (gameOver === true) {
                return
            }
            if( bombs_array.includes(index + 1)){
                cellElement.classList.add('bomb');
                let square = document.getElementsByClassName('cell')
                for (let index = 0; index < bombs_array.length; index++) {
                    let num = bombs_array[index] - 1;
                square[num].classList.add('bomb')
                    
                }
                gameOver = true;
                alert ('HAI PERSO')
            }
            else
            {
                cellElement.classList.add('safe')
                score++;
            }
            console.log(index + 1)
            console.log('il tuo punteggio e:' +' '+ score)
        });
        
        
        gridContainer.appendChild(cellElement)
    }
    while (bombs_array.length < 16) {
        let casual_bomb = randomNumberInt(1, 100)
        if (!bombs_array.includes(casual_bomb)) {
            bombs_array.push(casual_bomb);
        }
    }
    console.log(bombs_array);
}

function randomNumberInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
    
    
    
    