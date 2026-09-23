const customerName = "Nguyen Van An";
const rawMainDishPrice = "120000"; // Giá món chính (VND)
const rawDrinkPrice = "35000"; // Giá đồ uống (VND)
const rawQuantity = "2"; // Số lượng suất
const rawDistanceKm = "3.5"; // Cự ly giao hàng (km)
const openingDiscount = 20000; // Giảm giá khai trương cố định (VND)
const vatRate = 0.08; // Thuế suất VAT (8%)

let foodSubtotal = (Number(rawMainDishPrice) + Number(rawDrinkPrice)) * Number(rawQuantity);
let discountedTotal  = foodSubtotal - openingDiscount;
let vatAmount  = discountedTotal * vatRate;
let shippingFee = 15000 + Number(rawDistanceKm) * 4000;
let finalPayment = discountedTotal + vatAmount + shippingFee;

console.log("================ HÓA ĐƠN ĐẶT MÓN ================");
console.log(`Khách hàng: ${customerName}`);
console.log(`Tiền món ăn: ${foodSubtotal} VND`);
console.log(`Chiết khấu khai trương: ${openingDiscount} VND`);
console.log(`Tiền sau chiết khấu: ${discountedTotal} VND`);
console.log(`Thuế VAT (8%): ${vatAmount} VND`);
console.log(`Cước vận chuyển (${rawDistanceKm} km): ${shippingFee} VND`);
console.log("-------------------------------------------------");
console.log(`TỔNG THANH TOÁN THỰC TẾ: ${finalPayment} VND`);
console.log("=================================================");

