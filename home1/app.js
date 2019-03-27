var color = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
"BlanchedAlmond", "Blue", "BlueViolet" ]


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
document.getElementById("Button").onclick = function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = color [ index = randomInteger(0, color.length) ];
  }
