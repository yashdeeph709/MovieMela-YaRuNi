function loadXMLDoc(url) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send(null);
    document.getElementById("frame").innerHTML = xmlhttp.response;
}

function star(event, id) {
    var rating = document.getElementById('rating');
    var img = rating.getElementsByTagName('img');
    console.log(event.cli)
    if (img[id].src === "img/full.png") {
        console.log("full")
        img[id].src = "img/empty.png";
    } else {
        console.log("empty")
        img[id].src = "img/full.png";
    }
    console.log(img[id])
}
