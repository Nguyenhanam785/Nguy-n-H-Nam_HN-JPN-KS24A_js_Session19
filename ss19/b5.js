let chuoi = prompt("Nhập một chuỗi bất kỳ:");

if (chuoi.includes(" ")) {
    console.log("Chuỗi chứa dấu cách");
    document.write("chuỗi chứa dấu cách");
    alert("chuỗi chứa dấu cách");
} else {
    console.log("Chuỗi không chứa dấu cách");
    document.write("Chuỗi không chứa dấu cách");
    alert("Chuỗi không chứa dấu cách");
}