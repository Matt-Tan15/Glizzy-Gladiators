loadSprite("face", "./sprites/face.png");

const enemy = add([
  sprite("face"), // sprite() component makes it render as a sprite
  pos(900, 40), // pos() component gives it position, also enables movement
]);
