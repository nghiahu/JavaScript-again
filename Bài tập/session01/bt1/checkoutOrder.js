// Dữ liệu tiếp nhận từ biểu mẫu đơn hàng dạng chuỗi ký tự thô
const customerName = "Nguyen Thi Mai";
const foodItemName = "Com Tam Suon Bi Cha";
const rawFoodPrice = "55000";
const rawToppingPrice = "15000";
const rawDeliveryFee = "20000";
const voucherDiscount = 10000;

const foodTotal = Number(rawFoodPrice) + Number(rawToppingPrice);

const finalPayment = foodTotal + Number(rawDeliveryFee) - Number(voucherDiscount);

console.log(`Khách hàng: ${customerName}`);
console.log(`Món ăn: ${foodItemName}`);
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
console.log(`Số tiền thanh toán thực tế: ${finalPayment} VND`);