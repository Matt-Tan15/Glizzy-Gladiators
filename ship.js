loadBean();
loadSprite('hotdog', './sprites/HotDog.png')

const player = add([
  sprite("hotdog"), // sprite() component makes it render as a sprite
  pos(width() / 2, height() - 100), // pos() component gives it position, also enables movement
  rotate(0), // rotate() component gives it rotation
  origin("center"), // origin() component defines the pivot point (defaults to "topleft")
  area(),
  solid(),
]);

const SPEED = 320;

onKeyDown("left", () => {
  // .move() is provided by pos() component, move by pixels per second
  player.move(-SPEED, 0);
});

onKeyDown("right", () => {
  player.move(SPEED, 0);
});
