const gridContainer = document.querySelector('section.container')
const playButton = document.querySelector('button.play')

// ? <article class="cell"></article>

playButton.addEventListener('click', function(){
    document.querySelector('section.container').innerHTML = "";
    
    for (let index = 0; index < 100; index++) {
        
        const cellElement = document.createElement('article');
        cellElement.classList.add('cell')
        cellElement.append(index + 1)
        cellElement.addEventListener('click', function(){
            cellElement.classList.toggle('active')
            console.log(index + 1)
        });
        
        
        gridContainer.appendChild(cellElement)
    }
});

const bomb =[];
const numbersList = [];

function randomNumberInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getUnicRandomN(uninvited, min, max){
    let unicNumber;
    let found = false;

    while(!found){
        unicNumber = randomNumberInt(min, max);
        if(uninvited.includes(unicNumberNumber) !== false){
            found = true;
        }
    }

    return unicNumber
}



    



   
