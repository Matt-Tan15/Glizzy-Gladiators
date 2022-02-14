kaboom({
  background: [0, 0, 0],
});

const newRoad = loadSprite("newRoad", "./sprites/newRoad.png");

const START_POS = -200;
const END_POS = height();
const BGSPEED = 500;

let bg1 = add([
  sprite("newRoad"),
  pos(width() / 2, height()),
  origin("center"),
  scale(1.25),
  fixed(),
]);

let bg2 = add([
  sprite("newRoad"),
  pos(width() / 2, height() / 3),
  origin("center"),
  scale(1.25),
  fixed(),
]);

const block = add([
  rect(0, height()),
  area(),
  pos(width() / 4.3, 0),
  origin("topleft"),
  solid(),
  "topleft",
]);

const block2 = add([
  rect(0, height()),
  area(),
  pos(width() / 1.32, 0),
  origin("topright"),
  solid(),
  "topright",
]);

bg1.onUpdate(() => {
  bg1.move(0, 4000)
  if (bg1.pos.y > END_POS) {
      bg1.pos.y = START_POS;
  }
})

bg2.onUpdate(() => {
  bg2.move(0, 4000)
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
    "                                     ",
    "                                     ",
    "                  e          e       ",
    "                                     ",
    "                                     ",
    "                                     ",
    "                                     ",
  ],
  {
    width: 40,
    height: 32,
    e: () => [
      sprite("face"),
      area(),
      solid(),
      state("idle", ["idle", "attack", "move"]),
      "enemy",
    ],
  }
);

scene("lose", () => {
  add([text("You Lose"), pos(width() / 2, height() / 2)]);
  origin("center");
  // // Press any key to go back
  // onKeyPress(start)
});
