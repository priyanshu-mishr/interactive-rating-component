var ratingState = document.querySelector("#rating-state");
var thanksState = document.querySelector("#thanks-state");

document.querySelector(".btn-submit").addEventListener("click", function() {
    thanksState.classList.remove("vanish");
    ratingState.classList.add("vanish");
});

var ratingButton = document.querySelectorAll(".btn");
var rate = document.querySelector(".rate");

ratingButton.forEach(function(event){
        event.addEventListener("click", function(){
            rate.innerHTML = event.innerHTML;  
    });
});