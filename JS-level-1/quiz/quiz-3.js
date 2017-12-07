
let i = 100; // context data
this.i = 200; // obj data

function func() {
    console.log(i);
    //printing the I value to xonsole
    console.log(this.i);
}
func();
