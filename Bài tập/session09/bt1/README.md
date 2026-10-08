# Phân tích lỗi

Lỗi tại dòng const basePrice = bookingReservation.priceKey; vì priceKey = "roomPrice"
nên khi dùng Dot Notation để tìm thì nó sẽ không tìm được và trả về ăn undefined
thay vào đó nên dùng Bracket Notation

# Bảng test case

 Trường hợp kiểm thử / Dữ liệu đầu vào / Kết quả sai thực tế / Kết quả đúng mong đợi.

- TC01 – Nhận phòng sớm trước 12h / roomPrice = 1.500.000, checkInHour = 9 / basePrice = undefined → surcharge = NaN → totalAmount = NaN / basePrice = 1.500.000 → phụ thu 30% = 450.000 → tổng tiền 1.950.000

- TC02 – Nhận phòng từ 12h trở đi / roomPrice = 1.500.000, checkInHour = 14 / basePrice = undefined → totalAmount = NaN / basePrice = 1.500.000 → không có phụ thu → tổng tiền 1.500.000
