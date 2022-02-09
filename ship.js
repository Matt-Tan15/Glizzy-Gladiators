loadBean();

const player = add([
	sprite("bean"),   // sprite() component makes it render as a sprite
	pos(680, 560),     // pos() component gives it position, also enables movement
	rotate(0),        // rotate() component gives it rotation
	origin("center"), // origin() component defines the pivot point (defaults to "topleft")
    solid()
])

const SPEED = 320;

onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})