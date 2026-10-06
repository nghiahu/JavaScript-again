let exit = false;
do{
    console.log("=====================================================");
    console.log("   Hệ thống thu ngân phòng khám Medlatec Clinic");
    console.log("=====================================================");
    console.log("1. Nhập và kiểm chuẩn mã phiếu khám bệnh");
    console.log("2. Tính viện phí xét nghiệm");
    console.log("3. Thẩm định mã hồ sơ may mắn");
    console.log("0. Thoát chương trình");
    console.log("=====================================================");
    const choice = prompt("Vui lòng nhập lựa chọn của bạn (0 - 3): ").trim();
    switch(choice){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 0:
            exit = true;
            break;
        default:
            console.log("Lựa chọn không hợp lệ vui lòng nhập lại!");
            break;
    }
}while(!exit);