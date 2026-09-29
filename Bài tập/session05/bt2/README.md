# Phân tích lỗi
Dùng trim() và toUpperCase() để cắt khoảng trắng và đồng bộ thành chữ viết hoa nhưng không gán lại cho 
biến nào nên ở bên dưới dùng lại rawTicketCode thì vẫn là chuỗi gốc chưa được sử lý

# Bảng test case
Trường hợp kiểm thử / Dữ liệu đầu vào / Kết quả sai thực tế / Kết quả đúng mong đợi.
Kiểm tra tiền tố / " med-card-0428-ut "/ Mã phiếu hợp lệ: false/ Mã phiếu hợp lệ: true
Lấy mã khoa  / " med-card-0428-ut "/ Khoa điều trị: med/ Khoa điều trị: CAR