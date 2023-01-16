var y = document.getElementById("safety");
y.currentTime = 1;

document.addEventListener("keypress", function(event) {
  var x = event.key;
  console.log("e");
  if (x == "a" || x == "A") { 
    console.log("he")
    var e = document.getElementById("safety");
    e.style.transition = "visibility 0s 2s, opacity 2s linear;"
    e.style.display = "none";
    var s = document.getElementById("safety-back");
    s.style.transition = "visibility 0s 2s, opacity 2s linear;"
    s.style.display = "none";
    PlayHomeSound('homeMusic');
    window.scrollTo(0, 0);



    // Set Tile Icons
    var tile1 = document.getElementById("gba-tile");
    tile1.style.backgroundImage = "url('assets/mgba.png')";
  }
});

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.volume = 0.2;
    thissound.play();
  }

  function PlayHomeSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.volume = 0.8;
    thissound.play();
  }
  
  function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
  }

  document.querySelector('#gba-tile').addEventListener('click', () => {
    document.querySelector('#gba-tile').classList.add('expand');
    document.querySelector('#gba-content').classList.add('gba-content');
    document.querySelector('#gba-tile').classList.remove('empty-tile');
  }); 

  document.querySelector('#Wiimenu').addEventListener('click', () => {
    console.log("test")
    document.querySelector('#gba-tile').classList.remove('expand');
    document.querySelector('#gba-content').classList.remove('hidden');
    document.querySelector('#gba-content').classList.remove('gba-content');
    document.querySelector('#gba-tile').classList.add('empty-tile');
  }); 