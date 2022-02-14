kaboom({
  background: [0, 0, 0],
});

const block = add([
  rect(20, height()),
  area(),
  pos(width() / 6, 0),
  origin("topleft"),
  solid(),
  "topleft",
]);

const block2 = add([
  rect(20, height()),
  area(),
  pos(width() - 350, 0),
  origin("topright"),
  solid(),
  "topright",
]);

const newRoad = loadSprite("newRoad", "./sprites/newRoad.png");

const START_POS = -200;
const END_POS = height();
const BGSPEED = 500;

let bg1 = add([
  sprite("newRoad"),
  pos(width() / 2, height()),
  origin("center"),
  scale(1.75),
  fixed(),
]);

let bg2 = add([
  sprite("newRoad"),
  pos(width() / 2, height() / 2),
  origin("center"),
  scale(1.75),
  fixed(),
]);

bg1.onUpdate(() => {
  bg1.move(0, 2500)
  if (bg1.pos.y > END_POS) {
      bg1.pos.y = START_POS;
  }
})

bg2.onUpdate(() => {
  bg2.move(0, 2500)
  if (bg2.pos.y > END_POS) {
      bg2.pos.y = START_POS;
  }
})

function late(t) {
  let timer = 0;
  return {
    add() {
      this.hidden = true;
    },
    update() {
      timer += dt();
      if (timer >= t) {
        this.hidden = false;
      }
    },
  };
}

add([
  text("KILL", { size: 160 }),
  color(220, 53, 69),
  pos(width() / 2, height() / 2),
  origin("center"),
  lifespan(1),
  fixed(),
]);

add([
  text("THE", { size: 80 }),
  color(133, 64, 245),
  pos(width() / 2, height() / 2),
  origin("center"),
  lifespan(2),
  late(1),
  fixed(),
]);

add([
  text("ENEMIES", { size: 120 }),
  color(253, 152, 67),
  pos(width() / 2, height() / 2),
  origin("center"),
  lifespan(4),
  late(2),
  fixed(),
]);

addLevel(
  [
    "                                       ",
    "                                       ",
    "          e     e           e          ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
  ],
  {
    width: 50,
    height: 32,
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    e: () => [
      sprite("face"),
      area(),
      solid(),
      state("idle", ["idle", "attack", "move"]),
      "enemy",
    ],
  }
);

// enemy.onStateEnter("attack", () => {
//   // Don't do anything if player doesn't exist anymore
//   if (player.exists() && enemy.exists()) {
//     // const dir = player.pos.sub(enemy.pos).unit();

//     add([
//       pos(enemy.pos.add(50, 90)),
//       move(DOWN, speed),
//       rect(12, 48),
//       area(),
//       outline(4),
//       cleanup(),
//       origin("center"),
//       color(BLUE),
//       "eBullet",
//     ]);
//   }
// })

scene("lose", () => {
  add([text("You Lose"), pos(width() / 2, height() / 2)]);
  origin("center");
  // // Press any key to go back
  // onKeyPress(start)
});
