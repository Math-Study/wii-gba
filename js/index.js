var y = document.getElementById("safety");
y.currentTime = 1;
let backImage = "";
let shortName = "";
let link = ""
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function startup() {
  setTimeout(function() {
    var e = document.getElementById("safety");
    e.style.transition = '.7s';
    e.style.opacity = '0';
    e.style.visibility = 'hidden';
  }, 0);
  PlayHomeSound("homeMusic");



  // Set Tile Icons
  var tile1 = document.getElementById("gba-tile");
  tile1.style.backgroundImage = "url('assets/smbwii.jpg')";

  var tile2 = document.getElementById("nes-tile");
  tile2.style.backgroundImage = "url('assets/nes-tile.webp')";



  window.scrollTo(0, 0);
}

document.querySelector("#safety").addEventListener("click", () => {
  startup();
});
document.addEventListener("keypress", function (event) {
  startup();
});

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.2;
  thissound.play();
}

function PlayHomeSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.5;
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

    openAnimation(this);

    if (this.id == "gba-tile") {
      backImage = "../assets/nsmbwii.jpg";
      shortName = "GBA";
      link = "gba.html";
    }

    if (this.id == "nes-tile") {
      backImage = "../assets/nes-tile.webp";
      shortName = "NES";
      link = "nes.html";
    }

    let lastTile = localStorage.setItem("lastTile", this.id);


    // Add tiles ABOVE HERE!!
    document.querySelector("#tile-content").style.backgroundImage = "url('" + backImage + "')";
    document.querySelector("#StartText").href = link;
  });
});

async function openAnimation(el) {
  document.querySelector("#" + el.id).classList.add("fullscreen");
    await sleep(1000);
    document.querySelector("#" + el.id).classList.add("hidden");
      document.querySelector("#tile-content").classList.add("tile-content");
      document.querySelector("#black").classList.add("black-screen");
      await sleep(900);
      document.querySelector("#tile-content").classList.add("fullscreen");

      StopSound("homeMusic");
      PlayHomeSound("smbMusic");

}

document.querySelector("#Wiimenu").addEventListener("click", () => {
  let lastTile = localStorage.getItem("lastTile");
  document.querySelector("#tile-content").classList.add("fullscreen");
  document.querySelector("#tile-content").classList.remove("tile-content");
  document.querySelector("#black").classList.remove("black-screen");
  document.querySelector("#" + lastTile).classList.remove("hidden");
  document.querySelector("#" + lastTile).classList.remove("fullscreen");

  StopSound("smbMusic");
  StopSound("homeMusic");
  PlayHomeSound("homeMusic");
});
