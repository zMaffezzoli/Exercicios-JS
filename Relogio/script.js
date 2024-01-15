function Calendar(){
    let info = Date()
    let hour = info.substring(16,24)
    let date = info.substring(4,15).replace(/ /g, "/")

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 
    date = date.substring(4,7) + (months.indexOf(date.substring(0,3)) + 1) + date.substring(6);

    return {"hour": hour, "date": date};
};

setInterval(() => {
    let info = Calendar();
    document.getElementById("hour").innerHTML = info.hour
    document.getElementById("date").innerHTML = info.date
}, 1000);