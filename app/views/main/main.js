let login = function () {
    var username = document.getElementById("first-name").value;
    var password = document.getElementById("password").value;;
    if (username != "" && password != "") {
        console.log("melo");
        window.location.replace('dashboard.html');
        console.log("melo2");
    } else {
        window.location.replace('dashboard.html');
    }
}