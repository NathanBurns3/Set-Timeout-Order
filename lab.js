let one = () => console.log("one");
let two = () => console.log("two");

function three() {
    console.log("three");
    one();
    two();
}

function four() {
    console.log("four");
    setTimeout(three, 0);
    setTimeout(one, 0);
}

four();