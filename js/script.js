(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html("");
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current == "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

let images = [
  'url("img/1.jpg")',
  'url("img/2.jpg")',
  'url("img/3.jpg")',
  'url("img/4.jpg")',
  'url("img/5.jpg")',
  'url("img/6.jpg")',
  'url("img/7.jpg")',
  'url("img/8.jpg")',
  'url("img/9.jpg")',
  'url("img/10.jpg")',
  'url("img/11.jpg")',
  'url("img/12.jpg")',
  'url("img/13.jpg")',
  'url("img/14.jpg")',
  'url("img/15.jpg")',
  'url("img/16.jpg")',
  'url("img/17.jpg")',
  'url("img/18.jpg")',
  'url("img/19.jpg")',
  'url("img/20.jpg")',
  'url("img/21.jpg")',
  'url("img/22.jpg")',
  'url("img/23.jpg")',
  'url("img/24.jpg")',
  'url("img/25.jpg")',
  'url("img/26.jpg")',
  'url("img/27.jpg")',
  'url("img/28.jpg")',
  'url("img/29.jpg")',
  'url("img/30.jpg")',
  'url("img/31.jpg")',
  'url("img/32.jpg")',
  'url("img/33.jpg")',
  'url("img/34.jpg")',
  'url("img/35.jpg")',
  'url("img/36.jpg")',
  'url("img/37.jpg")',
];
function dropImage() {
  let section = document.querySelector("section");
  let drop = document.createElement("span");
  drop.style.left = Math.random() * innerWidth + "px";

  let bg = images[Math.floor(Math.random() * images.length)];

  let size = Math.random() * 250 + 50;
  drop.style.width = size + "px";
  drop.style.height = size + "px";
  drop.style.backgroundImage = bg;
  section.appendChild(drop);
  setTimeout(() => {
    drop.remove();
  }, 10000);
}
setInterval(dropImage, 500);

function checkSize() {
  if ($(".sampleClass").css("float") == "none") {
    $("body, html, section").addClass("full-screen");
    $(window).resize(function () {
      $("body, html, section").addClass("full-screen");
    });
    $("body, html, section")
      .css("overflowX", "scroll")
      .css("overflowY", "hidden");
  }
}
setTimeout(function () {
  $("#greet").fadeIn(1000);
}, 4000);
setTimeout(function () {
  $(".candle").fadeIn(1000);
  $("#hbd-anim").fadeIn(1000);
  document.getElementById("hbd-song").play();
  $("#polaroid").click(function(){
    document.getElementById("hbd-song").play();
  });
}, 5000);
setTimeout(function () {
  $(".card").addClass("flip-on-hover");
  $("#code").fadeIn(1000);
  $("#code").typewriter();
  setTimeout(function () {
    $("#gift").fadeIn(1000);
  }, 70000);
}, 7000);
$("#gift").click(function () {
	$("body, html").css("background-color", "rgb(0,0,0)");
  $(".card").remove();
  $("section").fadeIn(1000);
  checkSize();
});
