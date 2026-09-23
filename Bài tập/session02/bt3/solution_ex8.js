
const baseFare = 12000;
const extraFarePerKm = 4500;
const operationalSurcharge = 1.2;
const distanceInKm = 4; // Quãng đường (km)

const membershipTier = "PLATINUM"; // "PLATINUM", "GOLD", "SILVER", "STANDARD"
let isPeakHour = true;
let totalFare = 0;
let discount = 0;

if (distanceInKm <= 2) {
  totalFare = baseFare;
}else {
  totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
}

switch (membershipTier) {
  case "PLATINUM":
    discount = totalFare - (totalFare * 0.85) <= 30000 ? totalFare - (totalFare * 0.85) : 30000;
    break;
  case "GOLD":
    discount = totalFare - (totalFare * 0.9) <= 20000 ? totalFare - (totalFare * 0.9) : 20000;
    break;
  case "SILVER":
    discount = totalFare - (totalFare * 0.95) <= 10000 ? totalFare - (totalFare * 0.95) : 10000;
    break;
  case "STANDARD":
    break;
  default:
    console.log("Khách hàng không có hạng thành viên hoặc hạng thành viên không hợp lệ.");
    break;
}

console.log("========== HÓA ĐƠN CHUYẾN ĐI GRABRIDE ============");
console.log(`Cước ban đầu: ${totalFare} VND`);
console.log(`Phụ phí giờ cao điểm: ${isPeakHour ? `${totalFare * 0.2}` : "Không"}`);
console.log(`Mức giảm giá hội viên ${membershipTier}: ${discount} VND`);
console.log(`Tổng cước chuyến đi: ${totalFare + (isPeakHour ? totalFare * 0.2 : 0) - discount} VND`);
console.log("=================================================");
