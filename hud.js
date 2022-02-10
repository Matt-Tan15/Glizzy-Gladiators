const scoreHolder = add ([
    text('score:', {
        size:40
    }),
    pos(950,20),
    layer('ui'),
    
])

const score = add ([
    text('0', {
        size:40
    }),
    pos(1250,20),
    layer('ui'),
    {
        value: 0,
    }
])

const livesHolder = add ([
    text('lives:', {
        size:40
    }),
    pos(110,20),
    layer('ui'),
])

loadSprite("heart", "./sprites/output.png");

const lifeNumber = add([
    text("3", {
        size:45
    }), // sprite() component makes it render as a sprite
    pos(310, 17), // pos() component gives it position, also enables movement
    layer('ui'),
    {
        value: 3,
    }
  ]);

  const life = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(255, 20 ), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);