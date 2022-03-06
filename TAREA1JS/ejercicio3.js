function fibonachi() {
    let num1 = 0;
    let num2 = 1;

    console.log(`{$num2}`)

    for (let indice = 0; indice < 100; indice++) {
        num2 = num1 + num2;
        num1 = num2 + num1;
        console.log(`${num2}`);
    }
}
fibonachi();