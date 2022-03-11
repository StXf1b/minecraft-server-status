function clicks() {
    const ip = document.getElementById("server").value;
    $(".wrapper").css({
        "display": "none"
    });
    $(".container").css({
        "display": "grid"
    });
    fetch(`https://api.mcsrvstat.us/2/${ip}`)
    .then(response => response.json())
    .then((data) => {
            if(data.players.list) {
                data.players.list.forEach((e) => {
                    $("#players").click(() => {
                        $(".container").css({
                            "display": "none"
                        });
                        $(".wrapper").css({
                            "display": "none"
                        });
                        $(".playersList").css({
                            "display": "grid"
                        });
                        $("ul").append(`<li>${e}</li>`);
                    })
                });
            } else {
                $("#divPlayers").css({"display":"none"})
            }
            let maxPlayers = data.players.max;
            let minPlayers = data.players.online;
            let serverStatus = data.online; // return true or false
            let totalPlayers = minPlayers + "/" + maxPlayers;
            let motd = data.motd.html;
            let ipA = data.ip;
            let port = data.port;
            $(".motd").html(motd);
            $(".ip-con").text("IP: " + ipA);
            $(".port2").text("Port: " + port);
            if(serverStatus == true) {
                $(".server-status").text("Status: " + "Online");
            } else {
                $(".server-status").text("Status: " + "Offline");
            }
            $(".players").text("Players: " + totalPlayers);
        
        }
    )
}