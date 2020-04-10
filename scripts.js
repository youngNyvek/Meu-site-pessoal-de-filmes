
// const invisibles = document.querySelectorAll(".invisible")

// const img = document.querySelector(".card_image-container img")


// for (invisible of invisibles){

// invisible.addEventListener("mouseover", function(){

//     img.classList.add("img-hover")
// })

// invisible.addEventListener("mouseout", function(){

//     img.classList.remove("img-hover")
// })

// }

const plays = document.querySelectorAll(".play-button")

const modal = document.querySelector("#modal-overlay")

const closeModal = document.querySelector(".close-modal")

const films = document.querySelectorAll(".film")

for (let play of plays){

    play.addEventListener("click", function(){
         
        modal.classList.remove("hide")

        const videoID = play.getAttribute("id")

        modal.querySelector("iframe").src = `https://drive.google.com/file/d/${videoID}/preview`        
    })


}


closeModal.addEventListener("click", function(){

    modal.classList.add("hide")

    document.querySelector("div.modal-content iframe").src = ""

})


//  
