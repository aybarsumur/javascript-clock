let userName = prompt("Lutfen adinizi girin:")
let userInfo = document.querySelector("#myName")
userInfo.innerHTML = userName

// let timeInfo = document.querySelector("#myClock")
// let t = new Date();
// console.log(t)
// timeInfo.innerHTML = t

let daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
]

function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
    let sec = (today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds();
    let day = today.getDay();
    
    document.querySelector("#myClock").innerHTML = hr + " : " + min + " : " + sec + " " + daysOfWeek[day];
    console.log(day)
}

//her saniye zamanı tekrar update ediyor
setInterval(startTime, 1000);

