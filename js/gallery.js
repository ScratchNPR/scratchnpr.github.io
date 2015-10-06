var images = [
  {
    new: './img/etf-stamper.png',
    name: 'ETF Stamper',
    link: 'https://scratch.mit.edu/projects/78729910/',
    author: 'BookOwl'
  },
  {
    new: './img/posterize-griffpatch.png',
    name: 'Selective Posterization',
    link: 'https://scratch.mit.edu/projects/75595518/',
    author: 'griffpatch'
  },
  {
    new: './img/obama-posterizer.png',
    name: 'Obama Posterizer',
    link: 'https://scratch.mit.edu/projects/78850462/',
    author: 'EpicGuy369'
  },
  {
    new: './img/npr-pencil-sketch.png',
    name: 'NPR Pencil Sketch',
    link: 'https://scratch.mit.edu/projects/78545064/',
    author: 'chooper100'
  },
  {
    new: './img/dreams.png',
    name: 'Dreams',
    link: 'https://scratch.mit.edu/projects/78207862/',
    author: 'Layzej'
  },
  {
    new: './img/chalkboard-drawing.png',
    name: 'Chalkboard Drawing',
    link: 'https://scratch.mit.edu/projects/76580404/',
    author: 'PullJosh'
  },
  {
    new: './img/stamped-brush.png',
    name: 'Stamped Brush',
    link: 'https://scratch.mit.edu/projects/75561094/',
    author: 'Layzej'
  },
  {
    new: './img/polyart.png',
    name: 'Polyart',
    link: 'https://scratch.mit.edu/projects/76558888/',
    author: 'Really_A'
  },
  {
    new: './img/night-vision.png',
    name: 'Night Vision',
    link: 'https://scratch.mit.edu/projects/75861350/',
    author: 'Yoda3D'
  },
  {
    new: './img/sponge-paint.png',
    old: './img/nprguy.jpg',
    name: 'Sponge Paint',
    link: 'https://scratch.mit.edu/projects/78119508/',
    author: 'Layzej'
  },
  {
    new: './img/magnitude-experiment.png',
    name: 'Magnitude Experiment',
    link: 'https://scratch.mit.edu/projects/78043302/',
    author: 'chooper-beta'
  }
];
var currentImg;

var gridArea = document.getElementById("grid");
gridArea.innerHTML = "";
for(i = 0; i < images.length; i++) {
  gridArea.innerHTML += "<div class='grid-item'><img src='" + images[i].new + "' alt='" + images[i].name + "' onclick='openLight(" + i + ")' /></div>";
}

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function openLight(n) {
  var lightElem = document.getElementById("lightBox");
  
  
  lightElem.innerHTML = "<img src='" + images[n].new + "' class='finalImg'>";
  lightElem.innerHTML += "<a href='" + images[n].link + "'>" + images[n].name + "</a>";
  lightElem.innerHTML += "<p>by " + images[n].author + "</p>";
  addClass(lightElem, "visible");
  currentImg = n;
}

function closeLight() {
  var lightElem = document.getElementById("lightBox");
  removeClass(lightElem, "visible");
}

document.getElementById("lightBack").onclick = function() {closeLight()};

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter:20,
  isOriginLeft: true
});
