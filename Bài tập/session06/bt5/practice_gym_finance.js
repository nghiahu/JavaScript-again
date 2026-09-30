const priceSession = 350000;
const VAT = 1.08;
const stringTransaction = "TX01:500000:SUCCESS|TX02:1200000:SUCCESS|TX03:800000:FAILED"
let exit = false
do{
    console.log("========== MENU QUẢN TRỊ ==========");
    console.log("1. Quyết toán hợp đồng");
    console.log("2. Đối soát chuỗi giao dịch");
    console.log("3. Tra cứu");
    console.log("4. In báo cáo quyết toán tài chính.");
    console.log("0. Thoát")
    console.log("-----------------------------------")
    const choice = Number(prompt("Lựa chọn của bạn: "));
    switch(choice){
        case 1:
            let isvaliNum = true;
            let orderPrice = 0;
            let n = 0;
            while(isvaliNum){
               n = Number(prompt("Số buổi tập: "));
               if(!Number.isInteger(n) || n < 1){
                console.log("Số buổi tập không hợp lệ");
               }else{
                orderPrice = priceSession*n
                if(n > 30 && n < 50){
                    orderPrice = orderPrice*0.9;
                }else if(n > 50){
                    orderPrice = orderPrice*0.8;
                }
                orderPrice *= VAT;
                isvaliNum =  false;
               }
            }
            console.log("=========Gói tập=========");
            console.log(`Đơn giá: ${priceSession}/buổi`);
            console.log(`Số buổi: ${n}`);
            console.log(`VAT: ${VAT}`);
            console.log(`Tổng cộng: ${orderPrice}`);
            console.log("=========================")
            break;
        case 2:
            let totalIncome = 0;
            const transactions = stringTransaction.split("|");
            for(let i = 0; i < transactions.length; i++){
                const transaction = transactions[i].split(":");
                if(transaction[2] === "SUCCESS"){
                    totalIncome += Number(transaction[1]);
                }
            }
            console.log("Tổng tiền thực thu:", totalIncome);
            break;
        case 3:
            const search = prompt("Nhập mã giao dịch")
            const transactions2 = stringTransaction.split("|");
            let isFound = false;
            for(let i = 0; i < transactions2.length; i++){
                const transaction = transactions2[i].split(":");
                if(transaction[0] === search){
                    isFound = true;
                    console.log("Giao dịch:", transactions2[i]);
                    break;
                }
            }
            if(!isFound){
                console.log("Không tìm thấy giao dich!");
            }
            break;
        case 4:
            let totalRevenue = 0;
            let totalFailed = 0;
            const transactions3 = stringTransaction.split("|");
            for (let i = 0; i < transactions3.length; i++) {
                const transaction = transactions3[i].split(":");
                if (transaction[2] === "SUCCESS") {
                    totalRevenue += Number(transaction[1]);
                } else if (transaction[2] === "FAILED") {
                    totalFailed += Number(transaction[1]);
                }
            }
            console.log("=======================================");
            console.log("     BÁO CÁO QUYẾT TOÁN TÀI CHÍNH");
            console.log("---------------------------------------");
            console.log(`| Doanh thu thực thu: ${totalRevenue} VNĐ`);
            console.log(`| Giao dịch thất bại: ${totalFailed} VNĐ`);
            console.log(`| Tổng giao dịch: ${transactions3.length}`);
            console.log("======================================");

            break;
        case 0:
            exit=true;
            break;
        default:
            console.log("Lựa chọn không phù hợp vui lòng chọn lại!")
            break;
    }
}while(!exit);