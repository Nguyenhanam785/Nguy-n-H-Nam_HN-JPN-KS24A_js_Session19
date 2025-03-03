let num = parseInt(prompt("Nhập một số bất kỳ:"));

if (!isNaN(num)) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} chia hết cho cả 3 và 5`);
        document.write(`${num} chia hết cho cả 3 và 5`);
        alert(`${num} chia hết cho cả 3 và 5`);
    } else {
        console.log(`${num} không chia hết cho cả 3 và 5`);
        document.write(`${num} không hết cho cả 3 và 5`);
        alert(`${num} không hết cho cả 3 và 5`);
    }
} else {
    console.log("Vui lòng nhập một số hợp lệ!");
    document.write("Vui lòng nhập một số hợp lệ!");
    alert("Vui lòng nhập một số hợp lệ!");
}