const scoreHolder = add ([
    text('score:'),
    pos(950,20),
    layer('ui'),
])

const score = add ([
    text('0'),
    pos(1250,20),
    layer('ui'),
    {
        value: 0,
    }
])

const livesHolder = add ([
    text('lives:'),
    pos(110,20),
    layer('ui'),
])

loadSprite("heart", "./sprites/heart.png");

const life1 = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(400, 30), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);

  const life2 = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(500, 30), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);
  
  const life3 = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(600, 30), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);