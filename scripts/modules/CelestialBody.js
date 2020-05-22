class CelestialBody{
  constructor(name, position, size, speedRadians, colour, celestialBinding){
    this._name = name;
    this._position = position;
    this._speed = speedRadians;
    this._colour = colour;
    this._size = size;
    this._celestialBinding = celestialBinding;
  }

  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }

  get position(){
    return this._position;
  }

  set position(position){
    this._position = position;
  }

  get speed(){
    return this._speed;
  }

  set speed(speedRadians){
    this._speed = speedRadians;
  }

  get size(){
    return this._size;
  }

  set size(size){
    this._size = size;
  }

  get colour(){
    return this._colour;
  }

  set colour(colour){
    this._colour = colour;
  }

  get x(){
    return this._position.x;
  }

  get y(){
    return this._position.y;
  }

  get celestialBinding(){
    return this._celestialBinding;
  }

  set celestialBinding(celestialBinding){
    this._celestialBinding = celestialBinding;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.colour;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(){
    if(this.celestialBinding){
      let radians = degToRad(this.speed);
      this.position = this.position.rotate(this.celestialBinding.x, this.celestialBinding.y, radians);
    }
  }
}
