loadGhosty();

const enemy = add([
	sprite("ghosty"),   // sprite() component makes it render as a sprite
	pos(120, 560),     // pos() component gives it position, also enables movement
	rotate(0),        // rotate() component gives it rotation
	origin("center"), // origin() component defines the pivot point (defaults to "topleft")
    area(),
])
