let is24Hour = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = "";

    if (!is24Hour) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    }

    // Pad with leading zeros
    const timeString =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ampm;

    document.getElementById("clock").textContent = "Time: " + timeString;

    const dateString = now.toDateString();
    document.getElementById("date").textContent = "Date: " + dateString;
}

const toggleBtn = document.getElementById("toggleFormatBtn");
if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
        is24Hour = !is24Hour;
        toggleBtn.textContent = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
        updateClock();
    });
}

updateClock();
setInterval(updateClock, 1000);