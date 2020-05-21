const SPEED_MULTIPLIER = 0.05;
const SCALE = 0.5;

let solarSystem = {
  sun: new CelestialBody("Sun", new Point(width/2, height/2), 50*SCALE, 1, '#ff0'),
  celestialBodies: []
}

let pos = 80;
for (let key in planets){
  let currentPlanet = new CelestialBody(planets[key].name,
    new Point(width/2 + pos, solarSystem.sun.y),
    planets[key].size*SCALE,
    planets[key].speed*SPEED_MULTIPLIER,
    planets[key].colour,
    solarSystem.sun);

  solarSystem.celestialBodies.push(currentPlanet);
  pos += 50;
}


function loop() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);
  solarSystem.sun.draw(ctx);

  for (let i = 0; i < solarSystem.celestialBodies.length; i++){
    let planet = solarSystem.celestialBodies[i];
    planet.draw(ctx);
    planet.update();
  }

  requestAnimationFrame(loop);
}

loop();
