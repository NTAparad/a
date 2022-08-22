class tinh_toan {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
    
  add() {
    console.log(a + b);
  }

  sub() {
    console.log(a - b);
  }

  multi() {
    console.log(a * b);
  }
  
  div() {
    console.log(a / b);
  }
}

let he_so = new tinh_toan(13, 12);
console.log(he_so);