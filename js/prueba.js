function changeVentana() {
    let img = document.getElementById("imgVentana");

    if (img.src.match("Color")) {
        img.src = "img/windowNegra.png";
    } else {
      img.src = "img/windowColor.png";
    }}