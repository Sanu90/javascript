class fruits {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  showName() {
    console.log(`Fruit name is ${this.name}`);
  }
  showColor() {
    console.log(`Fruit color is ${this.color}`);
  }
}

let f = new fruits("Apple", "Red");
f.showName();
f.showColor();
