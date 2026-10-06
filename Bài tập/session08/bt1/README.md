# Phân tích lỗi sai
 - Lỗi nghiệp vụ khi sử dụng pop(), pop() là xóa và trả về phần từ cuối cùng tức là xe vào cuối cùng thì lại được
 điều phối sạc trước điều này vi phạm quy tác FIFO của queue, ở đây lên thay bằng shift để lấy phần tử đầu tiên của mảng 
 tức là xe nào vào trước thì được được điều phối trước
 - Lỗi thứ hai là i <= completedSessionsKwh.length, ờ đây lên là i < completedSessionsKwh.length vì index ở mạng chỉ
 bắt đầu từ 0 đến length -1, = completedSessionsKwh.length tức là index bị vượt khỏi phạm vi của mảng dẫn đến lỗi NaN


# Bảng test case
Trường hợp kiểm thử / Dữ liệu đầu vào / Kết quả sai thực tế / Kết quả đúng mong đợi.
-----------------------------------------------------------------------
 Điều phối xe đầu hàng đợi /
 waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'] /
 pop() lấy 51K-678.99 → xe cuối hàng đợi được điều phối trước /
 Hệ thống phải điều phối 29A-112.33 → xe đầu hàng đợi được phục vụ trước
------------------------------------------------------------------------
 Tính tổng sản lượng và doanh thu /
 completedSessionsKwh = [45.2, 30.5, 62.8, 28.0], fastChargingRate = 4500 /
 completedSessionsKwh[4] là undefined → totalKwh = NaN → totalRevenue = NaN /
 totalKwh = 166.5 kWh → totalRevenue = 749,250 VNĐ