var now = new Date();




function verif(){

    var p = document.getElementById('ref')
    var date = document.getElementById('date')
    var sex = document.getElementsByName('radsex')
    var img = document.getElementById('pss')

    if(date.value > 0 && date.value <= now.getFullYear()){

        if (sex[0].checked){
            img.src = 'omi.png'
        }
        else {
            img.src = 'muie.png'
        }

        var yer = now.getFullYear() - date.value
        p.innerHTML= `<strong>Você tem ${yer} anos de idade !</strong>`
 
    }
    else window.alert('Data invalida') 
}