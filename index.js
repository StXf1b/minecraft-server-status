function clicks() {
    const ip = document.getElementById("server").value;
    const port = document.getElementById("port").value || 25565;
    $(".wrapper").css({
        "display": "none"
    });
    $(".container").css({
        "display": "grid"
    });
    $(".port2").text("Port: " + port);
    fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port}`)
    .then(response => response.json())
    .then((data) => {
        let status = data.status;

        if (status === "success") {
            let maxPlayers = data.players.max;
            let minPlayers = data.players.now;
            let serverStatus = data.online; // return true or false
            let totalPlayers = minPlayers + "/" + maxPlayers;
            let motd = data.motd;
            $(".motd").text(motd);
            $(".ip-con").text("IP: " + ip);
            if(serverStatus == true) {
                $(".server-status").text("Status: " + "Online");
            } else {
                $(".server-status").text("Status: " + "Offline");
            }
            $(".players").text("Players: " + totalPlayers);
        } else {
            alert("The server you have entered dose not exist!")
        }
    })
}