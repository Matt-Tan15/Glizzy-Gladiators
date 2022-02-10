const scoreHolder = add ([
    text('score:', {
        size:40
    }),
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

const lifeNumber = add([
    text("3"), // sprite() component makes it render as a sprite
    pos(450, 20), // pos() component gives it position, also enables movement
    layer('ui'),
    {
        value: 3,
    }
  ]);

  const life = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(400, 30 ), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);