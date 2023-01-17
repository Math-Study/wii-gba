var y = document.getElementById("safety");
y.currentTime = 1;
let backImage = "";
let shortName = "";

document.querySelector("#safety").addEventListener("click", () => {
  var e = document.getElementById("safety");
  e.style.transition = "visibility 0s 2s, opacity 2s linear;";
  e.style.display = "none";
  var s = document.getElementById("safety-back");
  s.style.transition = "visibility 0s 2s, opacity 2s linear;";
  s.style.display = "none";
  PlayHomeSound("homeMusic");
  // Set Tile Icons
  var tile1 = document.getElementById("gba-tile");
  tile1.style.backgroundImage = "url('assets/mgba.png')";

  var tile2 = document.getElementById("nes-tile");
  tile2.style.backgroundImage = "url('assets/nes-tile.webp')";
  window.scrollTo(0, 0);
});
document.addEventListener("keypress", function (event) {
  var x = event.key;
  console.log("e");
  if (x == "a" || x == "A") {
    console.log("he");
    var e = document.getElementById("safety");
    e.style.transition = "visibility 0s 2s, opacity 2s linear;";
    e.style.display = "none";
    var s = document.getElementById("safety-back");
    s.style.transition = "visibility 0s 2s, opacity 2s linear;";
    s.style.display = "none";
    PlayHomeSound("homeMusic");
    window.scrollTo(0, 0);

    // Set Tile Icons
    var tile1 = document.getElementById("gba-tile");
    tile1.style.backgroundImage = "url('assets/mgba.png')";

    var tile2 = document.getElementById("nes-tile");
    tile2.style.backgroundImage = "url('assets/nes-tile.webp')";
  }
});

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.2;
  thissound.play();
}

function PlayHomeSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 1;
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

function addClasses(id) {
  let qid = "#" + id;
}

window.onload = function() {
  let empties = document.getElementsByClassName("empty-tile");
  for (var i=0; i<empties.length; i++) {
    empties[i].setAttribute("onmouseover", "PlaySound('mySound');")
    empties[i].setAttribute("onmouseleave", "StopSound('mySound');")
    empties[i].setAttribute("onclick", "PlaySound('clickSound');")
  }
}


document.querySelectorAll('.empty-tile').forEach(function(el){
  el.addEventListener('click', function() {
    document.querySelector("#" + this.id).classList.add("hidden");
    document.querySelector("#" + this.id).classList.remove("empty-tile");
    document.querySelector("#tile-content").classList.add("tile-content");
    document.querySelector("#black").classList.add("black-screen");

    if (this.id == "gba-tile") {
      backImage = "../assets/nsmbwii.jpg";
      shortName = "GBA";
    }

    if (this.id == "nes-tile") {
      backImage = "../assets/nes-tile.webp";
      shortName = "NES";
    }




    // Add tiles ABOVE HERE!!
    document.querySelector("#tile-content").style.backgroundImage = "url('" + backImage + "')";
    document.querySelector("#StartText").innerHTML = "Start " + shortName;
  });
});

document.querySelector("#Wiimenu").addEventListener("click", () => {
  console.log("hehe");
  // Add closing code here for whatever tile they on (Rn it just reloads page to reset)
});
