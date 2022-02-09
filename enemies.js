loadSprite("fish", "./sprites/bobo.png");

const enemy = add([
	sprite("fish"),   // sprite() component makes it render as a sprite
	pos(680, 400),     // pos() component gives it position, also enables movement
])
