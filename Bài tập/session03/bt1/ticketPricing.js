const customerName = "Tran Thi Mai";
const customerAge = 20;
const movieRating = "T18";
const seatType = "VIP";
const isStudent = true;
const isWeekday = true;

const basePrice = 80000;

let surcharge = 0;
let seatName = "";
let ticketPrice = 0;
let discountPercent = 0;

if (customerAge < 18 && movieRating === "T18") {
    console.warn("GIAO DICH THAT BAI: Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18!");
    exit();
}

switch (seatType) {
    case "STANDARD":
        seatName = "Ghe thuong";
        surcharge = 0;
        break;
    case "VIP":
        seatName = "Ghe VIP";
        surcharge = 15000;
        break;
    case "COUPLE":
        seatName = "Ghe Doi Couple";
        surcharge = 40000;
        break;
    default:
        console.error("GIAO DICH THAT BAI: Loai ghe khong hop le!");
        exit();
}
const giftMessage = seatType === "COUPLE" ? "Tang 01 ly nuoc ngot co lon" : "Khong ap dung qua tang";

if (isStudent === true && isWeekday === true) {
    discountPercent = 20;
}

ticketPrice = basePrice + surcharge;
const discountAmount = (ticketPrice * discountPercent) / 100;
const finalPayment = ticketPrice - discountAmount;

console.log("========================================");
console.log("       HOA DON BAN VE CINEMA CGV       ");
console.log("========================================");
console.log(`Khach hang: ${customerName}`);
console.log(`Tuoi: ${customerAge} | Nhan phim: ${movieRating} (Hop le)`);
console.log(`Hang ghe: ${seatName}`);
console.log(`Gia ve co so: ${basePrice} VND`);
console.log(`Phu thu ghe: ${surcharge} VND`);
console.log(`Tong gia ve goc: ${ticketPrice} VND`);
console.log(`Chiet khau HSSV: (${discountPercent}%): -${discountAmount} VND`);
console.log(`-----------------------------------------`);
console.log(`TONG TIEN THANH TOAN: ${finalPayment} VND`);
console.log(`Uu dai di kem: ${giftMessage}`);
console.log("========================================");