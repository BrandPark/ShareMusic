const gui = new dat.GUI(),
guiSet = {
  frequency: 5,
  reset: () => {
    $.reset();
  } };


gui.add(guiSet, 'frequency').min(5).max(50);
gui.add(guiSet, 'reset');

const $ = {};

/*========================================
              Initialize
              ========================================*/

$.init = () => {
  $.c = document.querySelector('canvas');
  $.ctx = $.c.getContext('2d');
  $.simplex = new SimplexNoise();
  $.events();
  $.reset();
  $.loop();
};

/*========================================
   Reset
   ========================================*/

$.reset = () => {
  $.w = window.innerWidth;
  $.h = window.innerHeight;
  $.cx = $.w / 2;
  $.cy = $.h / 2;
  $.c.width = $.w;
  $.c.height = $.h;
  $.count = Math.floor($.w / guiSet.frequency); // Wave frequency
  $.xoff = 0;
  $.xinc = 0.015;
  $.yoff = 0;
  $.yinc = 0.016; // Speed
  $.goff = 0;
  $.ginc = 0;
  $.y = $.h * 0.65;
  $.length = $.w + 0;
  $.amp = 15; // Wave height
};

/*========================================
   Event
   ========================================*/

$.events = () => {
  window.addEventListener('resize', $.reset.bind(undefined));
};

/*========================================
   Wave
   ========================================*/

$.wave = (color, amp, height, comp) => {
  $.ctx.beginPath();

  const sway = $.simplex.noise2D($.goff, 0) * amp;

  for (let i = 0; i <= $.count; i++) {
    $.xoff += $.xinc;

    const x = $.cx - $.length / 2 + $.length / $.count * i,
    y = height + $.simplex.noise2D($.xoff, $.yoff) * amp + sway;

    $.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
  }

  $.ctx.lineTo($.w, -$.h); // -$.h - Vertically reflection
  $.ctx.lineTo(0, -$.h); // -$.h - Vertically reflection
  $.ctx.closePath();
  $.ctx.fillStyle = color;

  if (comp) {
    $.ctx.globalCompositeOperation = comp;
  }

  $.ctx.fill();
};

/*========================================
   Loop
   ========================================*/

$.loop = () => {
  requestAnimationFrame($.loop);

  $.ctx.clearRect(0, 0, $.w, $.h);
  $.xoff = 0;

  $.ctx.fillStyle = "#182645";
  $.ctx.fillRect(0, 0, $.w, $.h);

  $.wave("#fb0000", 20, $.h * .5, "screen");
  $.wave("#00ff8e", 20, $.h * .5, "screen");
  $.wave("#6F33FF", 20, $.h * .5, "screen");

  $.ctx.fillStyle = "#ebcdcd";
  $.ctx.globalCompositeOperation = "darken";
  $.ctx.fillRect(0, 0, $.w, $.h);

  $.yoff += $.yinc;
  $.goff += $.ginc;
};

/*========================================
   Start
   ========================================*/

$.init();