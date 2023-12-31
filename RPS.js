let score = JSON.parse(localStorage.getItem
    ('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }
    
    updateScore()


    function playGame(playerMove){
        const computerMove = pickComputerMove();
        
        let result ='';

        if(playerMove === 'Scissors'){
            if (computerMove === 'Rock') {
                result = 'You lose.'
            }
            else if (computerMove === 'Paper' ){
                result = 'You win.'
            }
            else if (computerMove ==='Scissors'){
                result = 'Tie.'
            }

        } else if (playerMove === 'Paper'){
            if (computerMove === 'Rock') {
                result = 'You win.'
            }
            else if (computerMove === 'Paper' ){
                result = 'Tie.'
            }
            else if (computerMove ==='Scissors'){
                result = 'You lose.'
            }

        } else if(playerMove === 'Rock'){
            if (computerMove === 'Rock') {
                result = 'Tie.'
            }
            else if (computerMove === 'Paper' ){
                result = 'You lose.'
            }
            else if (computerMove ==='Scissors'){
                result = 'You win.'
            }
        } 

        if (result === 'You win.'){
            score.wins += 1;
        } else if (result === 'You lose.'){
            score.losses += 1;
        } else if (result === 'Tie.'){
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score))
        
        updateScore()

        document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-moves').innerHTML
        = `You
        <img src ="images/${playerMove}.png"
        class = "game-icon"> : <img src = "images/${computerMove}.png" class="game-icon"> Computer` 


    }

    
    document.querySelector('.js-result')
    .innerHTML = result;
    
    function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties} `

    }

    function pickComputerMove(){
    const randNumber = Math.random();

    let computerMove =''; 
        if  (randNumber >= 0 && randNumber < 1/3) 
        {
        computerMove ='Rock'
        } else if (randNumber >= 1/3 && randNumber < 2/3)
        {
            computerMove ='Paper'
        } else if (randNumber >= 2/3 && randNumber < 3)
        {
            computerMove ='Scissors'
        }
        console.log(computerMove)

    return computerMove
    }  
    
    function keepScore(){
        score.wins = 0
        score.losses = 0
        score.ties = 0
       
    }

    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // what if I want to exit from here to Done (below)?
        }
        }
        alert('Done!');