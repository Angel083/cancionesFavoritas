'use strict'
const distribution = document.querySelectorAll(".distribution")
const cards = document.querySelectorAll(".card")


distribution.forEach((eachChild, index) => {
  distribution[index].addEventListener("click", () => {
    if(index === 0){
      distribution[0].classList.add("active")
      distribution[1].classList.remove("active")
    }else{
      distribution[0].classList.remove("active")
      distribution[1].classList.add("active")
    }
  })
})