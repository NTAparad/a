  function Calculator() {
    this.add = function(a, b) {
      return a + b;
    };

    this.sub = function(a, b) {
        return a - b;
    };

    this.mul = function(a, b) {
        return a * b;
    };

    this.div = function(a, b) {
      if (b === 0) {
        console.log('khong thuc hien duoc');
      }
      else{
      return a / b;
      };
    };
  }
  
  let calculation = new Calculator();
  console.log(calculation.add(12, 13));
  console.log(calculation.mul(12, 13));
  console.log(calculation.sub(12, 13));
  console.log(calculation.div(12, 13));
  // function Double(a, b) {
//   this.a = a;
//   this.b = b;
// }
// // let calculationConstructor = {
// //     add: function() {
// //       return this.a + this.b;
// //     },
  
// //     sub: function() {
// //       return this.a - this.b;
// //     },
  
// //     mul: function() {
// //       return this.a * this.b;
// //     },
  
// //     div: function() {
// //       if (this.b === 0) {
// //         console.log('khong thuc hien duoc');
// //       }
// //       else{
// //         return this.a / this.b;
// //       };
// //     }
// // }

// Double.prototype.add = function() {
//   console.log(this.a + this.b);
// }
// Double.prototype.sub = function() {
//   console.log(this.a - this.b);
// }
// Double.prototype.mul = function() {
//   console.log(this.a * this.b);
// }
// Double.prototype.div = function() {
//   console.log(this.a / this.b);
//   if (this.b === 0) {
//     console.log('khong thuc hien duoc');
//   }
//   else{
//     return this.a / this.b;
//           };
// }
// let n1 = new Double(12, 13);
// n1.add();