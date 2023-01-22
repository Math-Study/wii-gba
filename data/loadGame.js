let gameName = localStorage.getItem("fileName");
let coreName = localStorage.getItem("coreName");
let fileName = null;


if (coreName == 'nds') {
    fileName = 'https://nds-host.nailington1.repl.co/?url=https://rawcdn.githack.com/mathadventure1/nds-host/a15becf40ff31c1f8fd57b8ca65254559311bbad/nds-alt/' + gameName + '.zip';
}
