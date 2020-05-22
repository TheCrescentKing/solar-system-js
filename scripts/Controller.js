const SPEED_MULTIPLIER = 0.05;
const SCALE = 0.5;

// Init Solar System object

let solarSystem = {
  celestialBodies: {
    sun: new CelestialBody("Sun", new Point(width/2, height/2), 50*SCALE, 1, '#ff0')
  }
}

// Init planets from planets.js

let pos = 80;
for (let key in planets){

  let planet = planets[key];

  let currentPlanetObj = new CelestialBody(planets[key].name,
    new Point(width/2 + pos, solarSystem.celestialBodies.sun.y),
    planet.size*SCALE,
    planet.speed*SPEED_MULTIPLIER,
    planet.colour,
    solarSystem.celestialBodies[planet.binding]);

  solarSystem.celestialBodies[key] = currentPlanetObj;
  pos += 50;
}

// Init moons from moons.js

for (let key in moons){

  let moon = moons[key];
  let bindingBody = solarSystem.celestialBodies[moon.binding];

  let currentMoon = new CelestialBody(moon.name,
    new Point(
      bindingBody.x + moon.position,
      bindingBody.y + moon.position
    ),
    moon.size*SCALE,
    moon.speed*SPEED_MULTIPLIER,
    moon.colour,
    bindingBody);

    solarSystem.celestialBodies[key] = currentMoon;
}


// Animation Loop

function loop() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);
  solarSystem.celestialBodies.sun.draw(ctx);

  for (let key in solarSystem.celestialBodies){
    let planet = solarSystem.celestialBodies[key];
    planet.draw(ctx);
    planet.update();
  }

  requestAnimationFrame(loop);
}

loop();
