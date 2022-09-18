var msg = window.document.getElementById('msg')
var msg2 = window.document.getElementById('msg2')
var img = window.document.getElementById('img')
var hr = new Date()

function load(){
    var now = hr.getHours()

    msg.innerHTML = `<strong>Agora são ${now}H</strong>`
    if(now < 5){
        msg2.innerHTML = "<strong>boa madrugada !</strong>"
        img.src = "noite.png"
    }
    else if (now >= 5 && now < 12){
        msg2.innerHTML = "<strong>bom dia !</strong>"
        img.src = "manha.png"
    }
    else if(now >= 12 && now < 18) {
        msg2.innerHTML = "b<strong>oa tarde !</strong>"
        img.src = "tarde.png"
    }
    else {
        msg2.innerHTML = "<strong>boa noite !</strong>"
        img.src = "noite.png"
    }
}