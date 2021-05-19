const FigRep = "img/snapshots/";
const OkColor = '#00ee00'
const AltColor = '#ff0000'
const ChosenColor = '#9932CC'

let fetchedImages = {};

d3.xml("img/landscape.svg")
    .then(data => { // importing SVG data
        d3.select("#landscape-container").node().append(data.documentElement);
    })
    .then(() => { // preloading images
        d3.selectAll('#landscape-container g').nodes()
            .filter(node => node.id.match(/-?\d\.\d{3}_-?\d\.\d{3}/))
            .forEach(node => preloadImage(node.id))
    });

function preloadImage(id) {
    let img = new Image();
    fetchedImages[id] = { img: img, loaded: false , chosen: false};
    img.onload = () => {
        document.querySelector('#landscape-container g[id="' + id + '"] path').style.fill = OkColor;
        fetchedImages[id].loaded = true;
    }
    img.src = FigRep + id + '.jpeg';
}

function fillSvgItem(id, color) {
    document.querySelector('#landscape-container g[id="' + id + '"] path').style.fill = color;
}

function onHover(obj) {
    document.getElementById('legend').textContent = 'u = ' + obj.id;
    if (fetchedImages[obj.id].loaded && !fetchedImages[obj.id].chosen) {
        fillSvgItem(obj.id, AltColor);
        document.getElementById('snapshot').src = fetchedImages[obj.id].img.src;
    }
}

function onOut(obj) {
    if (fetchedImages[obj.id].loaded && !fetchedImages[obj.id].chosen) {
        fillSvgItem(obj.id, OkColor);
    }
}

function onClick(obj){
    if (fetchedImages[obj.id].loaded) {
        if (fetchedImages[obj.id].chosen){
            fillSvgItem[obj.id, OkColor];
            fetchedImages[obj.id].chosen = false;
            
            var str = document.getElementById('adresses').innerHTML.replace("data/"+obj.id+".vtp,","");
            document.getElementById('adresses').innerHTML = str;
            console.log(str);
        }
        else {
            fetchedImages[obj.id].chosen = true;
            fillSvgItem(obj.id, ChosenColor);
            document.getElementById('adresses').innerHTML += "data/"+obj.id+".vtp,";
            console.log(document.getElementById('adresses').innerHTML);
        }
        
    }
}

