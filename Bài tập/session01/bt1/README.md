# Phân tích nguyên nhân lỗi: 
Do rawFoodPrice, rawToppingPrice, và rawDeliveryFee là kiểu dũ liệu String nên khi thực hiện phép toán cộng
sẽ bị hiểu nhầm là nối chuỗi thay vì thực hiện phép cộng số học.

# Bảng Test Case:
Trường hợp kiểm thử, Dữ liệu đầu vào, Kết quả sai thực tế, Kết quả đúng mong đợi.
1. Tính tổng giá trị món ăn
"55000", "15000", "5500015000", 70000
1. Tính toán tổng số tiền thanh toán cuối cùng
"5500015000", "20000", 10000, 550001500020000-10000, 75000