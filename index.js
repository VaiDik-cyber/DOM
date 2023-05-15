// function create3rdPost(callback) {
//   setTimeout(() => {
//       console.log('Post Three');
//       if (callback) {
//           callback();
//       }
//   }, 1000);
// }

// function create4thPost() {
//   setTimeout(() => {
//       console.log('Post Four');
//   }, 2000);
// }

// function create5thPost() {
//   setTimeout(() => {
//       console.log('Post Five');
//   }, 3000);
// }

// create5thPost(create4thPost(create3rdPost()))


var x = function () {
  this.a = 1;
  console.log(this.a);
  setTimeout(function () {
    console.log(this.a);
  });
};
var a = 10;
var xx = new x();
