loadSprite("face", "./sprites/face.png");

const enemy = add([
  sprite("face"), // sprite() component makes it render as a sprite
  pos(900, 40), // pos() component gives it position, also enables movement
  area(),
  solid(),
]);

const speed = 480;

onKeyDown("a", () => {
  // .move() is provided by pos() component, move by pixels per second
  enemy.move(-speed, 0);
});

onKeyDown("d", () => {
  enemy.move(speed, 0);
});
