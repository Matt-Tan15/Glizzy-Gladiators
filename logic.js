kaboom({
  background: [0, 0, 0],
});

//load sprites
loadSprite("hotdog", "./sprites/newCar.png");
loadSprite("mush", "./sprites/betterMushroom.png");
loadSprite("heart", "./sprites/output.png");
loadSprite("newRoad", "./sprites/newRoad.png");
loadSound("bruh", "./sounds/Bruh.mp3")
loadSound("oof", "./sounds/uuhhh.mp3")
//load start scene
scene("start", () => {
  const START_POS = -200;
  const END_POS = height();
  let bg1 = add([
    sprite("newRoad", {
      width: width() * 0.675,
    }),
    pos(width() / 2, height()),
    origin("center"),
    scale(1),
    fixed(),
  ]);

  let bg2 = add([
    sprite("newRoad", {
      width: width() * 0.675,
    }),
    pos(width() / 2, height() / 3),
    origin("center"),
    scale(1),
    fixed(),
  ]);

  bg1.onUpdate(() => {
    bg1.move(0, 4000);
    if (bg1.pos.y > END_POS) {
      bg1.pos.y = START_POS;
    }
  });

  bg2.onUpdate(() => {
    bg2.move(0, 4000);
    if (bg2.pos.y > END_POS) {
      bg2.pos.y = START_POS;
    }
  });
  add([text("Welcome\n\nPress to start\n\nLeft/Right to move\n\nSpace to Shoot"), pos(width() / 2, height() / 2), origin("center")]);
  onKeyPress(() => go("game"));
});

// logic
scene("game", () => {
  const START_POS = -200;
  const END_POS = height();

  let bg1 = add([
    sprite("newRoad", {
      width: width() * 0.675,
    }),
    pos(width() / 2, height()),
    origin("center"),
    scale(1),
    fixed(),
  ]);

  let bg2 = add([
    sprite("newRoad", {
      width: width() * 0.675,
    }),
    pos(width() / 2, height() / 3),
    origin("center"),
    scale(1),
    fixed(),
  ]);

  const block = add([
    rect(0, height()),
    area(),
    pos(width() / 6.8, height() / 2),
    origin("center"),
    solid(),
    "topleft",
  ]);

  const block2 = add([
    rect(0, height()),
    area(),
    pos(width() / 1.2, height() / 2),
    origin("center"),
    solid(),
    "topright",
  ]);

  bg1.onUpdate(() => {
    bg1.move(0, 4000);
    if (bg1.pos.y > END_POS) {
      bg1.pos.y = START_POS;
    }
  });

  bg2.onUpdate(() => {
    bg2.move(0, 4000);
    if (bg2.pos.y > END_POS) {
      bg2.pos.y = START_POS;
    }
  });

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

  // //user
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
    destroy(b);
    play("bruh")
    shake(10);
    score.value++;
    score.text = score.value;
    cleanup();
    if (score.value === 7) {
      destroy("enemy");
      go("win");
    }
  });

  addLevel(
    [
      "         l                       ",
      "         l                       ",
      "         l    e        e         ",
      "         l e       e       e     ",
      "         l    e        e         ",
      "         l                       ",
      "         l                       ",
    ],
    {
      width: 40,
      height: 30,
      e: () => [sprite("mush"), area(), scale(1.7), solid(), "enemy"],
    }
  );

  // //enemies
  let ENEMY_SPEED = 300;
  const speed = 300;

  action("enemy", (s) => {
    s.move(ENEMY_SPEED, 0);
  });

  loop(3, () => {
    every("enemy", (e) => {
      add([
        pos(e.pos.add(50, 80)),
        move(DOWN, speed),
        rect(12, 48),
        area(),
        outline(4),
        cleanup(),
        origin("center"),
        color(225, 127, 0),
        "eBullet",
      ]);
    });
  });

  collides("enemy", "topleft", () => {
    ENEMY_SPEED = 300;
  });

  collides("enemy", "topright", () => {
    ENEMY_SPEED = -300;
  });

  onCollide("eBullet", "player", (e) => {
    play("oof")
    lifeNumber.value--;
    lifeNumber.text = lifeNumber.value;
    destroy(e);
    cleanup();
    if (lifeNumber.value === 0) {
      destroy(player);
      go("lose");
    }
  });

  //hud
  const scoreHolder = add([
    text("score:", {
      size: 40,
    }),
    pos(width() * 0.95, 20),
    origin("topright"),
    layer("ui"),
  ]);

  const score = add([
    text("0", {
      size: 40,
    }),
    pos(width() * 0.96, 20),
    origin("topleft"),
    layer("ui"),
    {
      value: 0,
    },
  ]);

  const livesHolder = add([
    text("lives:", {
      size: 40,
    }),
    pos(width() / 35, 20),
    layer("ui"),
  ]);

  const lifeNumber = add([
    text("3", {
      size: 45,
    }), // sprite() component makes it render as a sprite
    pos(width() / 7.3, 17), // pos() component gives it position, also enables movement
    layer("ui"),
    {
      value: 3,
    },
  ]);
});

//lose and win scenes
scene("lose", () => {
  add([text("GAME OVER"), pos(width() / 2, height() / 2), origin("center")]);
  // // Press any key to go back
  wait(3, () => {
    go("start");
  });
  // onKeyPress(start)
});

scene("win", () => {
  add([text("You Win"), pos(width() / 2, height() / 2), origin("center")]);

  // onKeyPress(start)
});

go("start");
