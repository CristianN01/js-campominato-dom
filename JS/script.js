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
            if(index != bombs_array)
             cellElement.classList.add('safe')
            console.log(index + 1)
        });
        
        
        gridContainer.appendChild(cellElement)
    }
    
    function randomNumberInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    let score = 0;
    let record = 0;
    let bombs_array = [];
    
    while (bombs_array.length < 16) {
        let casual_bomb = randomNumberInt(0, 100)
        if (!bombs_array.includes(casual_bomb)) {
            bombs_array.push(casual_bomb);
        }
        console.log(casual_bomb);
        console.log(bombs_array);
    }
    
    //  article.addEventListener('click', function(){
    //     if(index != bombs_array)
    //         cellElement.classList.add('bg_green')
    //  });
});




   
