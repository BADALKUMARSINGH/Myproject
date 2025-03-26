
// Function to update date and time
function updateDateTime() {
    let now = new Date();
    let date = now.toDateString(); // Format: Wed Mar 26 2025
    let time = now.toLocaleTimeString(); // Format: 10:50:43 AM

    document.getElementById("date-time").innerHTML = `📅 ${date} <br> ⏰ ${time}`;
}

// Call function every second to keep updating time
setInterval(updateDateTime, 1000);

// Call once to set initial time
updateDateTime();

function playVideo() {
    let url = document.getElementById("hlsUrl").value;
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("Please enter a valid URL!");
    }
}
