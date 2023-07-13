let sumEl = document.querySelector(".sum-el")
let cardEl =  document.querySelector(".card-el")
let optionEl =  document.querySelector(".option-el")
let startBtn =  document.querySelector(".start-btn")
let  newBtn = document.querySelector(".new-btn")
let messageEl = document.querySelector(".message-El")
let playerEl = document.querySelector(".player-el")
let  cards = []
let  sum = 0
let message = " "
let isAlive = true
let hasBlackJack = false
let firstCard = getrandonNumber()
let secondCard = getrandonNumber()
let player = {
               name: "Abdulrahman",
               price: 500
             } 
playerEl.textContent = player.name + ": $" + player.price               
     
       function getrandonNumber (){
        let randomNumber =  Math.floor(Math.random() * 13) +1
         if (randomNumber > 10 ){
            return 10
         }
         else if (randomNumber ===1 ){
            return 11
         }
         else {
        return randomNumber
       }
    }

       function renderCards() {
        cardEl.textContent = "Cards: "
        for(let i = 0; i < cards.length; i++){
            cardEl.textContent += cards[i] + " "
        }
            sumEl.textContent = "Sum: " + sum
            if(sum <= 20){
                message = "Do you want to draw a new Card"
            }
            else if(sum === 21){
                message = " You've got Blackjack!"
                hasBlackJack = true
            }
            else {
                message = "You're out of the Game!!!"
                isAlive = false
            }
            messageEl.textContent = message
        }
        
      

       startBtn.addEventListener("click", () =>{
        let firstCard = getrandonNumber()
        let secondCard = getrandonNumber()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderCards()
       } )

       newBtn.addEventListener("click", () => {
        if (isAlive === true && hasBlackJack === false){
        let newCard = getrandonNumber()
        sum += newCard
        cards.push(newCard)
        renderCards()
        }
       })
       
      


       

