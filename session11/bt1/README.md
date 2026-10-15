# Phân tích lỗi
 Ở đây có hai lỗi sai là if (updatedData.isActive) chỉ thực hiện khi isActive = true vậy thì sẽ không thể cập 
 nhật tắt được và updatedData.powerWatts nếu powerWatts = 0 thì điều kiện trong if sẽ sai vì 0 là giá trị falsy

# Bảng test case
 Trường hợp kiểm thử / Dữ liệu đầu vào / Kết quả sai thực tế / Kết quả đúng mong đợi.
 Tắt điều hòa phòng khách / updatedData = { isActive: false } / isActive vẫn là true, chưa tắt / isActive là fales
 Hạ công suất đèn ngủ về 0W / updatedData = { powerWatts: 0 } / powerWatts giữ nguyên giá trị cũ / powerWatts = 0, công suất đèn ngủ được cập nhật về 0W.