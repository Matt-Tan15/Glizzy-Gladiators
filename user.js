loadSprite("hotdog", "./sprites/newCar.png");

const player = add([
  sprite("hotdog"), 
  pos(width() / 2, height() - 100), 
  rotate(0), 
  origin("center"),
  area(),
  solid(),
  "player",
]);

const SPEED = 500;

onKeyDown("left", () => {
  player.move(-SPEED, 0);
});

onKeyDown("right", () => {
  player.move(SPEED, 0);
});

function spawnLeftBullet(p) {
  add([
    rect(12, 48),
    area(),
    pos(p),
    origin("center"),
    color(255, 0, 0),
    outline(4),
    move(UP, BULLET_SPEED),
    cleanup(),
    "bullet",
  ]);
}

function spawnRightBullet(p) {
  add([
    rect(12, 48),
    area(),
    pos(p),
    origin("center"),
    color(255, 255, 10),
    outline(4),
    move(UP, BULLET_SPEED),
    cleanup(),
    "bullet",
  ]);
}

let insaneMode = false;
const BULLET_SPEED = 1200;

onKeyPress("space", () => {
  spawnLeftBullet(player.pos.sub(16, 0));
  spawnRightBullet(player.pos.add(16, 0));
});

onCollide("bullet", "enemy", (b, e) => {
  destroy(e);
  addKaboom(e.pos.add(50));
  destroy(b)
  shake(10);
  score.value++;
  score.text = score.value;
  cleanup();
  if (score.value === 7) {
    destroy("enemy");
    go("win");
  }
});
