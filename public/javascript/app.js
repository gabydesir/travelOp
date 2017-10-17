

// slides home page
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

// progress bar
function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById("myP").className = "w3-text-green w3-animate-opacity";
      document.getElementById("myP").innerHTML = "Successfully uploaded 1 photo!";
    } else {
      width++;
      elem.style.width = width + '%';
      var num = width * 1 / 10;
      num = num.toFixed(0)
      document.getElementById("demo").innerHTML = num;
    }
  }
}

// Modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// Twitter API
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));


twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "‎CNTraveler"
  },
  document.getElementById("container")
);

//     sliderId: "slider",
//     startSlide: 0,
//     effect: "series1",
//     effectRandom: false,
//     pauseTime: 2800,
//     transitionTime: 1200,
//     slices: 14,
//     boxes: 8,
//     hoverPause: 1,
//     autoAdvance: true,
//     thumbnailsWrapperId: "thumb_container_id",
//     m: false,
//     license: "mylicense"
// };








// var nsOptions = { transitionType: "zoom" }

// var sliderOptions =
//     {
//     sliderId: "slider",
//     effect: "17,13,1",
//     effectRandom: true,
//     pauseTime: 2800,
//     transitionTime: 1200,
//     slices: 14,
//     boxes: 8,
//     hoverPause: 1,
//     autoAdvance: true,
//     captionOpacity: 0.4,
//     captionEffect: "fade",
//     thumbnailsWrapperId: "thumbs",
//     m: false,
//     // license: "mylicense"
//     };

// var thumbnailSliderOptions = {
//     sliderId: "imageSlider",
//     orientation: "horizontal",
//     thumbWidth: "140px", // or "xx%", or "auto"
//     thumbHeight: "70px", // or "xx%", or "auto"
//     showMode: 1,
//     autoAdvance: true,
//     selectable: true,
//     slideInterval: 3000, // in seconds
//     transitionSpeed: 300, // in seconds
//     shuffle: false,
//     startSlideIndex: 0, // 0-based
//     pauseOnHover: true,
//     initSliderByCallingInitFunc: false,
//     rightGap: 0, // or 90, or "auto"
//     keyboardNav: true,
//     mousewheelNav: false,
//     before: null,
//     // license: "yourlicensekey"
// };

// var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);








// var nsOptions = { ...
//     thumbWidth: "50%",//As the thumbHeight is set to "auto", this 50% is the percentage
//     //of the gallery viewport width.
//     thumbHeight: "auto",
//     showMode: 3, //Then the active thumbnail always stays in the center of the gallery
//     ...
// }
