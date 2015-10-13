var gallery = document.getElementById("gallery");
var info = document.getElementById("info");

gallery.innerHTML = "";
for (var i = 0; i < images.length; i++){
  gallery.innerHTML += "<img class='gallery-cell' src='." + images[i].new + "' alt='" + images[i].name + "' />";
  //console.log(gallery.innerHTML);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            element.style.display =  'initial';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

setTimeout( (function(){
  var flkity = new Flickity('.gallery', {
    wrapAround: true,
    //freeScroll: true,
    //autoPlay: 4000 //milliseconds
  });
  
  function ondragstart(){
    fade(info);
    info.innerHTML = '';
  }
  function onsettle(){
    var i = flkity.selectedIndex;
    info.innerHTML = '';
    info.innerHTML += "<h1 class='arttitle'>" + images[i].name + "</h1>";
    info.innerHTML += "<h2 class='artauther'>by " + images[i].author + "</h2>";
    unfade(info);
  }
  onsettle();
  flkity.on("dragStart", ondragstart);
  flkity.on("cellSelect", ondragstart);
  flkity.on("settle", onsettle);
}),1250);

























