function Hour(){
    var date = Date()
    var hour = date.substring(16,24)
    return hour;
};

setInterval(() => {
    document.getElementById("display").innerHTML = Hour();
}, 1000);