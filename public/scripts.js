const plays = document.querySelectorAll(".play-button")

const modal = document.querySelector("#modal-overlay")

const closeModal = document.querySelector(".close-modal")

const films = document.querySelectorAll(".film")

const titles = document.querySelectorAll(".film-title")

for (let play of plays){

     play.addEventListener("click", function(){
         
        modal.classList.remove("hide")

        const videoID = play.getAttribute("id")

        modal.querySelector("iframe").src = `https://drive.google.com/file/d/${videoID}/preview`   
       
        for(let title of titles){

            modal.querySelector("h1").textContent = `${title.innerText}`
        }
        
      

    })

}







closeModal.addEventListener("click", function(){

    modal.classList.add("hide")

    modal.querySelector("iframe").src = ``

})


//  
