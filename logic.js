kaboom({
  background: [0, 0, 0],
});

const block = add([
  rect(0, 90),
  area(),
  pos(285, 550),
  origin("center"),
  solid(),
]);

const block2 = add([
  rect(0, 90),
  area(),
  pos(1080, 550),
  origin("center"),
  solid(),
]);

let bgImage = loadSprite(
  "background",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54ff7af5-2e49-471e-8efc-69c98615ab82/d128hmk-5d073adb-0821-44d1-a2bf-1e936f5b16b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU0ZmY3YWY1LTJlNDktNDcxZS04ZWZjLTY5Yzk4NjE1YWI4MlwvZDEyOGhtay01ZDA3M2FkYi0wODIxLTQ0ZDEtYTJiZi0xZTkzNmY1YjE2YjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rrEKAOowLqMQiuUOrbKG4fWCAfn71GhnUWUirLQzy-o"
);

let background = add([
  sprite("background"),
  // Make the background centered on the screen
  pos(width() / 2, height() / 2),
  origin("center"),
  // Allow the background to be scaled
  scale(1),
  // Keep the background position fixed even when the camera moves
  fixed(),
]);


