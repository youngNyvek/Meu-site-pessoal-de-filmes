const plays = document.querySelectorAll(".play-button")

for (let play of plays){

     play.addEventListener("click", function(){

        const videoID = play.getAttribute("id")

        window.open(`https://drive.google.com/file/d/${videoID}/view`)

    })

}