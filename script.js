const FirstBasket = document.querySelector(".basket-1 span")
const SecondBasket = document.querySelector(".basket-2 span")
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const TotleApples = 10

secondbasketcount = 0
firstbasketcount = TotleApples-secondbasketcount

FirstBasket.innerText = firstbasketcount
SecondBasket.innerText = secondbasketcount


rightArrow.addEventListener('click', ()=>{
    if(firstbasketcount > 0){

        firstbasketcount --
        FirstBasket.innerText = firstbasketcount
        secondbasketcount ++
        SecondBasket.innerText = secondbasketcount
    
    }
})

leftArrow.addEventListener('click', ()=>{
    if(secondbasketcount > 0){

        firstbasketcount ++
        FirstBasket.innerText = firstbasketcount
        secondbasketcount --
        SecondBasket.innerText = secondbasketcount
    
    }
})