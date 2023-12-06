export default class Character {
  constructor() {
    this.distance = 0;
    this.attack = 0;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  set attack(value) {
    const distanceModifier = 1 - 0.1 * (this.distance - 1);
    const stonedModifier = this.stoned ? Math.log2(this.distance) * 5 : 0;
    this._attack = Math.round(value * distanceModifier - stonedModifier);
  }

  get attack() {
    return this._attack;
  }
}