var images = [
  {
    new: './img/dreams.png',
    old: './img/nprguy.jpg',
    name: 'Dreams',
    link: 'https://scratch.mit.edu/projects/78207862/'
  },
  {
    new: './img/chalkboard-drawing.png',
    old: './img/nprguy.jpg',
    name: 'Chalkboard Drawing',
    link: 'https://scratch.mit.edu/projects/76580404/'
  },
  {
    new: './img/stamped-brush.png',
    old: './img/nprguy.jpg',
    name: 'Stamped Brush',
    link: 'https://scratch.mit.edu/projects/75561094/'
  },
  {
    new: './img/polyart.png',
    old: './img/nprguy.jpg',
    name: 'Polyart',
    link: 'https://scratch.mit.edu/projects/76558888/'
  },
  {
    new: './img/night-vision.png',
    old: './img/nprguy.jpg',
    name: 'Night Vision',
    link: 'https://scratch.mit.edu/projects/75861350/'
  },
  {
    new: './img/sponge-paint.png',
    old: './img/nprguy.jpg',
    name: 'Sponge Paint',
    link: 'https://scratch.mit.edu/projects/78119508/'
  },
  {
    new: './img/magnitude-experiment.png',
    old: './img/nprguy.jpg',
    name: 'Magnitude Experiment',
    link: 'https://scratch.mit.edu/projects/78043302/'
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
  lightElem.innerHTML += "<img src='" + images[n].old + "' class='oldImg'>";
  lightElem.innerHTML += "<a href='" + images[n].link + "'>" + images[n].name + "</a>";
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
  gutter:10,
  isOriginLeft: false
});