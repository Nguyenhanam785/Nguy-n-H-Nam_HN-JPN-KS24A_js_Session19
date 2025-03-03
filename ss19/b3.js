let loaitien =Number(prompt("Mời bạn nhập loại  tiền USD->VND:1 VND->USD:2"));
let sotien =Number(prompt("Mời bạn nhập giá trị muốn quy đổi"));
let result;
if (loaitien==1) {
    result=sotien*23000;
    console.log(`Số tiền quy đổi sang VND là ${result}VND`);
    document.write(`Số tiền quy đổi sang VND là ${result}VND`);
    alert(`Số tiền quy đổi sang VND là ${result}VND`);  
}else if(loaitien==2){
    result=sotien/23000;
    console.log(`Số tiền quy đổi sang VND là ${result}VND`);
    document.write(`Số tiền quy đổi sang VND là ${result}VND`);
    alert(`Số tiền quy đổi sang USD là ${result.toFixed(2)} USD`);
}