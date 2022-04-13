let Result = 'Результат = ';

function SummN(a, b) {
    a = a + b;
    return (a);
}

function DiffN(a, b) {
    a = a - b;
    return (a);
}

function MultN(a, b) {
    a = a * b;
    return (a);
}

function DivN(a, b) {
    a = a / b;
    return (a);
}

let Action = Number(prompt('введите действие, которое нелбходимо произвести (1-сложить, 2 - вычесть, 3 - умножить, 4 разделить):'));
let a = Number(prompt('введите - a'));
let b = Number(prompt('введите - b'));

switch (Action) {
    case 1:
        alert(Result + SummN(a, b));
        break;
    case 2:
        alert(Result + DiffN(a, b));
        break;
    case 3:
        alert(Result + MultN(a, b));
        break;
    case 4:
        alert(Result + DivN(a, b));
        break;
    default:
        alert('Ввседен некорректный выбор действия!');
}