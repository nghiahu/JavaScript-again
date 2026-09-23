# Đoạn code sai logic là đoạn tính giá cước chuyến xe ở đây nếu giá cước > 2km thì thu thêm 45000 cho mỗi
km vượt quá 2km. Còn nếu cước <= 2km thì chỉ thu 12000.
Nhưng ở đoạn nàu totalFare = baseFare + distanceInKm * extraFarePerKm; 
khi vượt quá 2km thì lại tính cả 2km ban đầu vào

# Bảng Test Case 
Trường hợp kiểm thử, Dữ liệu đầu vào, Kết quả sai thực tế, Kết quả đúng mong đợi.
1. Trường hợp số km <= 2-không mưa, 2km, 12.000, 12.000
2. Trường hợp số km <= 2-mưa, 2km, 14.4000, 14.400
3. Trường hợp số km > 2-không mưa, 3km, 25.500, 16.500
4. Trường hợp số km > 2-mưa, 3km, 30.600, 19.800