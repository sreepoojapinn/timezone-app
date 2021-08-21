let button = document.getElementById("getTimeZone")
if(button!==null){
    button.addEventListener("click", timeZone)
}

function timeZone(){
    document.getElementById("showTimeZone").innerHTML = Date()
}
