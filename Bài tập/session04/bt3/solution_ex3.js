const strOrder = ["MLT", "SSX", "LLTT"];
const S = 35000;
const M = 42000;
const L = 48000;
const T = 10000;
let totalBill = 0;

for(let i = 0; i < strOrder.length; i++){
        let tableBill = 0;
    for(let j = 0; j < strOrder[i].length; j++){
        switch(strOrder[i][j]){
            case "S":
                tableBill += S;
                break;
            case "M":
                tableBill += M;
                break;
            case "L":
                tableBill += L;
                break;
            case "T":
                tableBill += T;
                break;
            case "X":
                continue;
            default:
                console.log("Size không hợp lệ");
                break;
        }
    }
    if(tableBill > 100000){
        tableBill = tableBill * 0.9
    }
    console.log(`Tổng tiền bàn${i+1}: ${tableBill} VNĐ`);
    totalBill += tableBill;
}
console.log("---------------------------------------");
console.log(`Tổng doanh thu tất cả các bàn: ${totalBill}`)
