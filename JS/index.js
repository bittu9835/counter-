
let a = 0;

const increse = () => {
    a += 1;
    document.getElementById("output").innerHTML = a;
};

const decrese = () => {
    a -= 1;
    document.getElementById("output").innerHTML = a;
};

const zero = () => {
    a = 0;
    document.getElementById("output").innerHTML = a;
}