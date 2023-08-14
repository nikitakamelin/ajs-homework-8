export default class Character {
  constructor(name, attack, distance, stoned = false) {
    this.name = name;
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  // Возможность насылать «дурман» на магов и демонов
  setStoned() {
    this.stoned = true;
  }

  removeStoned() {
    this.stoned = false;
  }

  // Возможность поменять дистанцию атаки
  setDistance(x) {
    this.distance = x;
  }

  // устанавливаем атаку в зависимости от дистанции и 'дурмана'
  get attack() {
    return this.stoned
      ? this._attack - (this.distance - 1) * 10 - Math.log2(this.distance) * 5
      : this._attack - (this.distance - 1) * 10;
  }

  set attack(value) {
    this._attack = value;
  }
}
