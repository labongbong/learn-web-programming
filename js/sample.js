function myAlert(message){
    alert(message);
}

// window.onclick = function(){
//     alert();
// }

function myLink(){
    window.location.href = 'http://www.naver.com/';
}

// window.addEventListener("click", myAlert("hello"));

window.onkeydown = function(e){
    console.log(e.key);
    if(e.key == "k"){
        alert("It's KKKKK!!!")
    }
}

// document.getElementById("myBox").addEventListener("click", myLink);

$("#myBox").click(myLink);