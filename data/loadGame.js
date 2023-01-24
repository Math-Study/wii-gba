let gameName = localStorage.getItem("fileName");
let coreName = localStorage.getItem("coreName");
let fileName = null;
let internal = localStorage.getItem("internal");
if (internal == 'true') {
console.log("Grabbing internal Roms");
if (coreName == 'nds') {
    fileName = 'https://nds-host.nailington1.repl.co/?url=https://rawcdn.githack.com/mathadventure1/nds-host/a15becf40ff31c1f8fd57b8ca65254559311bbad/nds-alt/' + gameName + '.zip';
    console.log(fileName);
}

if (coreName == 'gba') {
    fileName = 'https://math-study.github.io/gba-host/gba-alt/' + gameName + '.gba';
}

if (coreName == 'nes') {
    fileName = 'https://math-study.github.io/gba-host/nes-alt/' + gameName + '.nes.zip';
}

if (coreName == 'segaMd') {
    fileName = 'https://math-study.github.io/gba-host/segaMd-alt/' + gameName + '.zip';

}

}

if (internal == 'false') {
console.log("Grabbing external Roms");
 fileName = gameName;
 }
 console.log(gameName, coreName, internal, fileName);