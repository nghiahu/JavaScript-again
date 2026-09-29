# Phân tích lỗi sai 
Sai ở dòng for (let cupIndex = 1; cupIndex < orderQuantity; cupIndex++) 
và đoạn if (isGoldMember) { totalBill = totalBill * 0.9; }
Điều kiện ở vòng lặp for là cupIndex < orderQuantity, nhưng orderQuantity là số lượng cốc, 
nên vòng lặp sẽ chạy từ 1 đến orderQuantity - 1, dẫn đến thiếu một cốc trong tính toán
Đoạn if (isGoldMember) { totalBill = totalBill * 0.9; } để trong vòng lặp for, 
nên mỗi cốc lặp sẽ áp dụng giảm giá 10% cho tổng hóa đơn, dẫn đến tổng hóa đơn bị giảm quá nhiều.

# Bảng test case
Trường hợp kiểm thử / Dữ liệu đầu vào / Kết quả sai thực tế / Kết quả đúng mong đợi.
1 / orderQuantity = 3, isGoldMember = true / totalBill = 91.800 VND / totalBill = 137.700 VND
2 / orderQuantity = 2, isGoldMember = false / totalBill = 102.000 VND / totalBill = 51.000 VND