const scoreHolder = add ([
    text('score:', {
        size:40
    }),
    pos(width() - 130,20),
    origin("topright"),
    layer('ui'),
    
])

const score = add ([
    text('0', {
        size:40
    }),
    pos(width() - 120,20),
    origin("topleft"),
    layer('ui'),
    {
        value: 0,
    }
])

const livesHolder = add ([
    text('lives:', {
        size:40
    }),
    pos(width() / 35,20),
    layer('ui'),
])

loadSprite("heart", "./sprites/output.png");

const lifeNumber = add([
    text("3", {
        size:45
    }), // sprite() component makes it render as a sprite
    pos(width() / 7.7, 17), // pos() component gives it position, also enables movement
    layer('ui'),
    {
        value: 3,
    }
  ]);

  const life = add([
    sprite("heart"), // sprite() component makes it render as a sprite
    pos(width() / 9.5, 20 ), // pos() component gives it position, also enables movement
    area(),
    solid(),
    "heart"
  ]);