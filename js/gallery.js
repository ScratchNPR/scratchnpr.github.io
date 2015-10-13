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
