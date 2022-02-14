loadSprite("chomp", "./sprites/chomp.png");

const ENEMY_SPEED = 300;
let CURRENT_SPEED = ENEMY_SPEED;
const speed = 500;

action("enemy", (s) => {
  s.move(CURRENT_SPEED, 0);
});

collides("enemy", "topleft", () => {
  CURRENT_SPEED = ENEMY_SPEED;
  every("enemy", (e) => {
    add([
      pos(e.pos.add(50, 80)),
      move(DOWN, speed),
      rect(12, 48),
      area(),
      outline(4),
      cleanup(),
      origin("center"),
      color(112, 59, 237),
      "eBullet",
    ]);
  });
});

collides("enemy", "topright", (e) => {
  CURRENT_SPEED = -ENEMY_SPEED;
  every("enemy", (e) => {
    add([
      pos(e.pos.add(50, 80)),
      move(DOWN, speed),
      rect(12, 48),
      area(),
      outline(4),
      cleanup(),
      origin("center"),
      color(112, 59, 237),
      "eBullet",
    ]);
  });
});

onCollide("eBullet", "player", (e) => {
  lifeNumber.value--;
  lifeNumber.value += 0.5;
  lifeNumber.text = lifeNumber.value;
  destroy(e);
  cleanup();
  if (lifeNumber.value === 0) {
    destroy(player);
    go("lose");
  }
});
