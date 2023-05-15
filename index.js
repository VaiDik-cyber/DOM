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


let a=7;
        var b=7;
        // fun1();
        var x = function () {
            // console.log(window.a)     //unde
            // console.log(window.b)
                  //7
            
            console.log(this.a)       //unde
            console.log(this.b)       //7
            console.log(a)            //7
            console.log(b)            //7
            this.a=20;          
            this.b=30;
            var a = 5;
            var b = 6;
            console.log(this.a)       //20
            console.log(this.b)       //30
            console.log(a)            //7
            console.log(b)            //30
            // console.log(window.a)     //20
            // console.log(window.b)     //30
        }
        x();










        // function y(){
        //   var name1 = "khushhal";
        // }
        // y();
        // console.log(name1);
        
        // var obj ={
        //   name: "bala",
        // }
        // console.log(obj.age);