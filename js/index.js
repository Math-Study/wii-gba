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
  tile1.style.backgroundImage = "url('assets/nsmbdsf.jpg')";

  var tile2 = document.getElementById("nes-tile");
  tile2.style.backgroundImage = "url('assets/nes-tile.webp')";

  var tile3 = document.getElementById("snes-tile");
  tile3.style.backgroundImage = "url('assets/nes-tile.webp')";

  var tile4 = document.getElementById("wii-tile");
  tile4.style.backgroundImage = "url('assets/smbwii.jpg')";


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
      backImage = "assets/nsmbds.jpg";
      shortName = "Nds";
      link = "launchpad.html";
      coreName = 'nds'
      let gameFile = "New_Super_Mario_Bros._(USA)"
      localStorage.setItem("fileName", gameFile);
      localStorage.setItem("coreName", coreName);
    }

    if (this.id == "nes-tile") {
      backImage = "assets/nes-tile.webp";
      shortName = "NES";
      link = "nes.html";
    }

    if (this.id == "wii-tile") {
      backImage = "assets/nsmbwii.jpg";
      shortName = "GBA";
      link = "gba.html";
    }

    if (this.id == "snes-tile") {
      backImage = "assets/nsmbds.jpg";
      shortName = "Nds";
      link = "launchpad.html";
      coreName = 'nds'
      let gameFile = "New_Super_Mario_Bros._(USA)"
      localStorage.setItem("fileName", gameFile);
      localStorage.setItem("coreName", coreName);
    }

    let lastTile = localStorage.setItem("lastTile", this.id);


    // Add tiles ABOVE HERE!!
    document.querySelector("#tile-content").style.backgroundImage = "url('" + backImage + "')";
    document.querySelector("#StartText").href = link;
  });
});

async function openAnimation(el) {
  document.querySelector("#" + el.id).classList.add("fullscreen");
  window.scrollTo(0, 0);
    await sleep(1000);
    document.querySelector("#" + el.id).classList.add("hidden");
      document.querySelector("#tile-content").classList.add("tile-content");
      document.querySelector("#black").classList.add("black-screen");
      await sleep(800);
      document.querySelector("#tile-content").classList.add("fullscreen");

      StopSound("homeMusic");
      PlayHomeSound("smbMusicIntro");

}

document.querySelector("#Wiimenu").addEventListener("click", () => {
  let lastTile = localStorage.getItem("lastTile");
  document.querySelector("#tile-content").classList.remove("fullscreen");
  document.querySelector("#tile-content").classList.remove("tile-content");
  document.querySelector("#black").classList.remove("black-screen");
  document.querySelector("#" + lastTile).classList.remove("hidden");
  document.querySelector("#" + lastTile).classList.remove("fullscreen");

  StopSound("smbMusicIntro");
  StopSound("homeMusic");
  PlayHomeSound("homeMusic");
});

document.querySelector("#arrow-right").addEventListener("click", () => {
document.querySelector("#arrow-right").classList.add("hidden");
document.querySelector("#arrow-left").classList.remove("hidden");

//document.querySelector("#arrow-left2").classList.remove("hidden");
//document.querySelector("#arrow-right2").classList.add("hidden");
});

document.querySelector("#arrow-left").addEventListener("click", () => {
  document.querySelector("#arrow-left").classList.add("hidden");
  document.querySelector("#arrow-right").classList.remove("hidden");

  //document.querySelector("#arrow-left2").classList.add("hidden");
 // document.querySelector("#arrow-right2").classList.remove("hidden");
  });

//661.9875183105469, 168.47500228881836,
//58.36249923706055, 432.5500183105469,





// Thanks z3r0 
//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});