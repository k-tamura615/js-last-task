"use strict";
function calculateSplit() {
    const totalAmount = Number(document.getElementById("totalAmount").value);
    const peopleCount = Number(document.getElementById("peopleCount").value);
    const ratio = Number(document.getElementById("ratio").value) / 100;
    const rounding = document.getElementById("rounding").value;
    
    if (totalAmount <= 0 || peopleCount <= 0) {
        alert("正しい金額と人数を入力してください。");
        return;
    }

    let amountPerPerson = (totalAmount * ratio) / peopleCount;

    if (rounding === "up") {
        amountPerPerson = Math.ceil(amountPerPerson);
    } else if (rounding === "down") {
        amountPerPerson = Math.floor(amountPerPerson);
    }

    if (amountPerPerson % 1 === 0) {
        amountPerPerson = amountPerPerson.toFixed(0);
    } else {
        amountPerPerson = amountPerPerson.toFixed(2);
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `一人あたり: <strong>${amountPerPerson} 円</strong>`;
}
