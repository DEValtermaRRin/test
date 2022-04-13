function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

let val = Number(prompt('введите число'));
let pow = Number(prompt('введите степень'));
alert(power(val, pow));