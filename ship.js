loadBean();

const player = add([
	sprite("bean"),   // sprite() component makes it render as a sprite
	pos(680, 590),     // pos() component gives it position, also enables movement
	rotate(0),        // rotate() component gives it rotation
	origin("center"), // origin() component defines the pivot point (defaults to "topleft")
])

