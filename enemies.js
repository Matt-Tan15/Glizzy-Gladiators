loadSprite("face", "./sprites/face.png");

const enemy = add([
  sprite("face"), // sprite() component makes it render as a sprite
  pos(900, 40), // pos() component gives it position, also enables movement
  area(),
  solid(),
  state("idle", ["idle", "attack", "move"]),
  "enemy",
]);

const ENEMY_SPEED = 200;
let CURRENT_SPEED = ENEMY_SPEED;

action("enemy", (s) => {
  s.move(CURRENT_SPEED, 0);
});

onCollide("enemy", "topright", () => {
  CURRENT_SPEED = -ENEMY_SPEED;
});

onCollide("enemy", "topleft", () => {
  CURRENT_SPEED = -ENEMY_SPEED;
});

const speed = 300;

enemy.onStateEnter("idle", async () => {
  await wait(0.5);
  enemy.enterState("attack");
});

enemy.onStateEnter("attack", async () => {
  // Don't do anything if player doesn't exist anymore
  if (player.exists() && enemy.exists()) {
    const dir = player.pos.sub(enemy.pos).unit();

    add([
      pos(enemy.pos.add(50, 90)),
      move(DOWN, speed),
      rect(12, 48),
      area(),
      outline(4),
      cleanup(),
      origin("center"),
      color(BLUE),
      "eBullet",
    ]);
  }

  await wait(1);
  enemy.enterState("move");
});

enemy.onStateEnter("move", async () => {
  await wait(2);
  enemy.enterState("idle");
});

// enemy.onStateUpdate("move", () => {
// 	if (!player.exists()) return
// 	const dir = player.pos.sub(enemy.pos).unit()
// 	enemy.move(dir.scale(ENEMY_SPEED))
// })

enemy.enterState("move");

onCollide("eBullet", "player", (e) => {
  lifeNumber.value--;
  lifeNumber.text = lifeNumber.value;
  destroy(e);
  cleanup();
  if (lifeNumber.value === 0) {
    destroy(player);
    go("lose");
  }
});
