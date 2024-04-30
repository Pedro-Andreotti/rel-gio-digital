setInterval(()=>{
    const tempo = document.getElementById("tempo");
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let dia_noite = "AM";

    if(horas > 12){
        dia_noite = "PM";
    }
    else{
        dia_noite = "AM";
    }
    if( horas < 10){
        horas = "0" + horas;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if( segundos < 10){
        segundos = "0" + segundos;
    }

    tempo.textContent = horas + ":" + minutos + ":" + segundos + " " + dia_noite;
});