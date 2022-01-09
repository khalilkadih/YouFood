function CheckUser() {

    if (document.getElementById("in").value == "user") {

        window.open("../YouFood-Badr/index.html");
    } else
    if (document.getElementById("in").value == "admin") {
        window.open("../admin/admin.html");
    } else
    if (document.getElementById("in").value == "chef") {
        window.open("../YouFood-Mourad/Menu/index.html");
    } else {
        window.alert("wrong !!!! Verifie votre user name (user ,chef ,admin)");
    }
}