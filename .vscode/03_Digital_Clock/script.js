function updateClock(){
    const now = new Date();

    // Time 
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
     
    const timesStrings = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = "Time: " + timesStrings;

    // Date

    const DateStrings = now.toDateString();
    document.getElementById("date").textContent = "Date: " + DateStrings;
}

updateClock();
setInterval(updateClock, 1000);

 
