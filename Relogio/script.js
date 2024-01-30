function Calendar(){
    let info = new Date()
    let hour = String(info).substring(16,24)
    let date = info.toLocaleDateString('pt-BR')
 
    return {"hour": hour, "date": date};
};

setInterval(() => {
    let info = Calendar();
    document.getElementById("hour").innerHTML = info.hour
    document.getElementById("date").innerHTML = info.date
}, 1000);