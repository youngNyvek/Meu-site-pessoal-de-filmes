
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

const img = document.querySelector("img.ndfHFb-c4YZDc-aTv5jf-bVEB4e-RJLb9c")

const thumbIDs = document.querySelectorAll(".thumb")



for (let play of plays){

     play.addEventListener("click", function(){
         
        modal.classList.remove("hide")

        const videoID = play.getAttribute("id")

        modal.querySelector("iframe").src = `https://drive.google.com/file/d/${videoID}/preview`   
        
        alert(img.getAttribute("class"))
    })
    // ndfHFb-c4YZDc-aTv5jf-bVEB4e-RJLb9c
}







closeModal.addEventListener("click", function(){

    modal.classList.add("hide")

    modal.querySelector("iframe").src = ``

})


//  
