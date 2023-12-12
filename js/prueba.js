function changeVentana() {
    let img = document.getElementById("imgVentana");

    if (img.src.match("Color")) {
        img.src = "img/windowNegra.png";
    } else {
      img.src = "img/windowColor.png";
    }}

    function changeImg() {
        let img = document.getElementById("fotoPared2a");
    
        if (img.src.match("Color")) {
            img.src = "img/fotoPared2.png";
        } else {
          img.src = "img/fotoParedColor2a.png";
        }}
        function changeB() {
            let img = document.getElementById("fotoPared2b");
        
            if (img.src.match("Color")) {
                img.src = "img/fotoPared2.png";
            } else {
              img.src = "img/fotoParedColor2b.png";
            }}