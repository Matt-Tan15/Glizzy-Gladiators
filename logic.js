kaboom({
  background: [0, 0, 0],
});

const block = add([
  rect(20, height()),
  area(),
  pos(width() / 6, 0),
  origin("topleft"),
  solid(),
  "topleft",
]);

const block3 = add([
  rect(20, height()),
  area(),
  pos(width() - 350, 0),
  origin("topright"),
  solid(),
  "topright",
]);

const road = loadSprite("road", "./sprites/road.png");

let background = add([
  sprite("road"),
  // Make the background centered on the screen
  pos(width() / 2, height() / 2),
  origin("center"),
  // Allow the background to be scaled
  scale(1),
  // Keep the background position fixed even when the camera moves
  // fixed(),
]);

onUpdate("background", (road) => {
  background.move(DOWN, 120);
})

scene("lose", () => {
  add([text("You Lose"), pos(width() / 2, height() / 2)]);
  origin("center");
  // // Press any key to go back
  // onKeyPress(start)
});
