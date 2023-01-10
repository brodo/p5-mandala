(() => {
  // src/main.ts
  function setup() {
    createCanvas(
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    );
  }
  function draw() {
    background(20);
    textAlign(CENTER, CENTER);
    textSize(height / 10);
    fill(200);
    text("Hello World!", width / 2, height / 2);
  }
  function keyPressed() {
  }
  function keyReleased() {
  }
  var app = {
    setup,
    draw,
    keyPressed,
    keyReleased
  };

  // src/index.ts
  globalThis.app = app;
})();
