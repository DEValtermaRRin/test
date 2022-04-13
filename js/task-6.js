function Operations() {
    switch (operation) {
        case 'сложение':
            return (arg1 + arg2);
            break;
        case 'вычитание':
            return (arg1 - arg2);
            break;
        case 'умножение':
            return (arg1 * arg2);
            break;
        case 'деление':
            return (arg1 / arg2);
            break;
        default:
            console.log('Введен некорректный выбор действия!');
    }
}

let operation = (prompt('Введите действие, которое нелбходимо произвести: (сложение, вычитание, умножение, деление)'));
let arg1 = Number(prompt('введите - a'));
let arg2 = Number(prompt('введите - b'));

alert(Operations(arg1, arg2, operation));