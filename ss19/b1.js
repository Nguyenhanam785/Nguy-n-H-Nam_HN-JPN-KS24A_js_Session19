let month = Number(prompt("Nhập tháng: "));

if (month < 1 || month > 12) {
    console.log("tháng không hợp lệ");
    document.write("tháng không hợp lệ");
    alert("tháng không hợp lệ");
} else if (month === 2) {
    console.log("tháng 2 có 28 hoặc 29 ngày năm nhuận");
    document.write("tháng 2 có 28 hoặc 29 ngày năm nhuận");
    alert("tháng 2 có 28 hoặc 29 ngày năm nhuận");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`tháng ${month} có 30 ngày`);
    document.write(`tháng ${month} có 30 ngày`);
    alert(`tháng ${month} có 30 ngày`);
} else {
    console.log(`tháng ${month} có 31 ngày`);
    document.write(`tháng ${month} có 31 ngày`);
    alert(`tháng ${month} có 31 ngày`);
}