function Operations(a, b) {
    if (a > 0 & b > 0) {
        return (a - b);
    }
    else if (a < 0 & b < 0) {
        return (a * b);
    } else return (a + b);

}
let a = Number(prompt('введите - a'));
let b = Number(prompt('введите - b'));
alert(Operations(a, b));
