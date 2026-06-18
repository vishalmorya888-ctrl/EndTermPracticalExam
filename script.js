function checkArmstrong() {
    let num = parseInt(document.getElementById("num").value);
    let originalNum = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }

    document.getElementById("result").innerHTML =
        (sum === originalNum)
            ? originalNum + " is an Armstrong Number"
            : originalNum + " is not an Armstrong Number";
}