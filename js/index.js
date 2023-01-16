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